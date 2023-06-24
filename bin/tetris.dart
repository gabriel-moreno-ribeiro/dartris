// Terminal front-end for the Tetris engine: raw keyboard input, ANSI
// rendering and a gravity timer.
import 'dart:async';
import 'dart:io';
import 'dart:math';

import 'package:dartris/tetris.dart';

const _colors = <int, String>{
  1: '\x1b[46m', // I cyan
  2: '\x1b[43m', // O yellow
  3: '\x1b[45m', // T magenta
  4: '\x1b[42m', // S green
  5: '\x1b[41m', // Z red
  6: '\x1b[44m', // J blue
  7: '\x1b[47m', // L white
};
const _reset = '\x1b[0m';

void main(List<String> args) {
  final seed = args.isNotEmpty ? int.tryParse(args.first) : null;
  final game = Game(seed: seed);
  var paused = false;

  final hasTerminal = stdin.hasTerminal;
  if (hasTerminal) {
    stdin.echoMode = false;
    stdin.lineMode = false;
  }
  stdout.write('\x1b[?25l\x1b[2J'); // hide cursor, clear screen

  void quit() {
    stdout.write('\x1b[?25h$_reset\n');
    if (hasTerminal) {
      stdin.echoMode = true;
      stdin.lineMode = true;
    }
    stdout.writeln('final score: ${game.score}  lines: ${game.lines}');
    exit(0);
  }

  void draw() {
    final b = StringBuffer('\x1b[H');
    final pieceCells = game.current?.cells.toSet() ?? {};
    final ghostCells = game.isOver ? <Point<int>>{} : game.ghost.cells.toSet();
    final nextPreview = _preview(game.next.take(3).toList());
    final holdPreview = _preview(game.hold == null ? [] : [game.hold!]);

    b.writeln('  DARTRIS   score ${game.score}   lines ${game.lines}   level ${game.level}');
    b.writeln('  +${'-' * (game.board.width * 2)}+');
    for (var y = 0; y < game.board.height; y++) {
      b.write('  |');
      for (var x = 0; x < game.board.width; x++) {
        final p = Point(x, y);
        if (pieceCells.contains(p)) {
          b.write('${_colors[game.current!.id]}  $_reset');
        } else if (ghostCells.contains(p)) {
          b.write('\x1b[2m[]$_reset');
        } else {
          final v = game.board.cells[y][x];
          b.write(v == 0 ? '  ' : '${_colors[v]}  $_reset');
        }
      }
      b.write('|   ');
      if (y == 0) b.write('next');
      if (y >= 1 && y <= 8) b.write(nextPreview.length > y - 1 ? nextPreview[y - 1] : '');
      if (y == 10) b.write('hold');
      if (y >= 11 && y <= 12) b.write(holdPreview.length > y - 11 ? holdPreview[y - 11] : '');
      if (y == 15) b.write('a/d or arrows: move');
      if (y == 16) b.write('w/up: rotate  s/down: drop');
      if (y == 17) b.write('space: hard drop  c: hold');
      if (y == 18) b.write('p: pause  q: quit');
      b.writeln('\x1b[K');
    }
    b.writeln('  +${'-' * (game.board.width * 2)}+');
    if (game.isOver) b.writeln('  GAME OVER - press q');
    if (paused) b.writeln('  PAUSED');
    b.write('\x1b[J');
    stdout.write(b.toString());
  }

  var last = DateTime.now();
  final timer = Timer.periodic(const Duration(milliseconds: 50), (_) {
    final now = DateTime.now();
    final elapsed = now.difference(last).inMilliseconds;
    last = now;
    if (!paused && !game.isOver) game.tick(elapsed);
    draw();
  });

  var escape = <int>[];
  stdin.listen((bytes) {
    for (final byte in bytes) {
      if (escape.isNotEmpty) {
        escape.add(byte);
        if (escape.length == 3) {
          switch (escape[2]) {
            case 65: // up
              game.rotateCw();
            case 66: // down
              game.softDrop();
            case 67: // right
              game.moveRight();
            case 68: // left
              game.moveLeft();
          }
          escape = [];
        }
        continue;
      }
      switch (byte) {
        case 27:
          escape = [27];
        case 113: // q
          timer.cancel();
          quit();
        case 112: // p
          paused = !paused;
        case 97 when !paused: // a
          game.moveLeft();
        case 100 when !paused: // d
          game.moveRight();
        case 119 when !paused: // w
          game.rotateCw();
        case 122 when !paused: // z
          game.rotateCcw();
        case 115 when !paused: // s
          game.softDrop();
        case 32 when !paused: // space
          game.hardDrop();
        case 99 when !paused: // c
          game.holdPiece();
      }
    }
    draw();
  }, onDone: () {
    timer.cancel();
    quit();
  });
}

/// Small 4x2 previews of pieces, stacked vertically.
List<String> _preview(List<Tetromino> pieces) {
  final lines = <String>[];
  for (final t in pieces) {
    final p = Piece(t, 0, 0, 0);
    final rows = List.generate(2, (_) => List.filled(4, '  '));
    for (final c in p.cells) {
      if (c.y < 2) rows[c.y][c.x] = '${_colors[p.id]}  $_reset';
    }
    lines.addAll(rows.map((r) => r.join()));
    lines.add('');
  }
  return lines;
}
