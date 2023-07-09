// Browser front-end for the engine: a canvas, the keyboard, and the same
// Game class the terminal uses. Compiled to JavaScript for the Chrome
// extension popup (see extension/).
// ignore_for_file: deprecated_member_use
import 'dart:html';

import 'package:dartris/tetris.dart';

const int cell = 22;
const List<String> colors = [
  '#101418', // empty
  '#4cc9f0', // I
  '#f9c74f', // O
  '#b388ff', // T
  '#80ed99', // S
  '#f94144', // Z
  '#577590', // J
  '#f3722c', // L
];

void main() {
  final canvas = querySelector('#board') as CanvasElement;
  final preview = querySelector('#next') as CanvasElement;
  final holdCanvas = querySelector('#hold') as CanvasElement;
  final scoreEl = querySelector('#score')!;
  final linesEl = querySelector('#lines')!;
  final levelEl = querySelector('#level')!;
  final messageEl = querySelector('#message')!;

  var game = Game();
  var paused = false;
  var best = int.tryParse(window.localStorage['dartris-best'] ?? '') ?? 0;
  num last = window.performance.now();

  canvas.width = game.board.width * cell;
  canvas.height = game.board.height * cell;

  void square(CanvasRenderingContext2D ctx, int x, int y, String color, {bool ghost = false}) {
    ctx.fillStyle = color;
    if (ghost) {
      ctx.globalAlpha = 0.25;
      ctx.fillRect(x * cell + 1, y * cell + 1, cell - 2, cell - 2);
      ctx.globalAlpha = 1;
      return;
    }
    ctx.fillRect(x * cell + 1, y * cell + 1, cell - 2, cell - 2);
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.fillRect(x * cell + 1, y * cell + 1, cell - 2, 4);
  }

  void drawPiece(CanvasElement target, Tetromino? type) {
    final ctx = target.context2D;
    ctx.fillStyle = '#0b0e12';
    ctx.fillRect(0, 0, target.width!, target.height!);
    if (type == null) return;
    final piece = Piece(type, 0, 0, 0);
    for (final c in piece.cells) {
      square(ctx, c.x, c.y + 1, colors[piece.id]);
    }
  }

  void draw() {
    final ctx = canvas.context2D;
    ctx.fillStyle = '#0b0e12';
    ctx.fillRect(0, 0, canvas.width!, canvas.height!);
    for (var y = 0; y < game.board.height; y++) {
      for (var x = 0; x < game.board.width; x++) {
        final v = game.board.cells[y][x];
        if (v != 0) square(ctx, x, y, colors[v]);
      }
    }
    if (!game.isOver) {
      for (final c in game.ghost.cells) {
        if (c.y >= 0) square(ctx, c.x, c.y, colors[game.current!.id], ghost: true);
      }
    }
    final current = game.current;
    if (current != null) {
      for (final c in current.cells) {
        if (c.y >= 0) square(ctx, c.x, c.y, colors[current.id]);
      }
    }
    drawPiece(preview, game.next.isEmpty ? null : game.next.first);
    drawPiece(holdCanvas, game.hold);
    scoreEl.text = '${game.score}';
    linesEl.text = '${game.lines}';
    levelEl.text = '${game.level}';
    if (game.isOver) {
      if (game.score > best) {
        best = game.score;
        window.localStorage['dartris-best'] = '$best';
      }
      messageEl.text = 'game over · best $best · press R';
    } else if (paused) {
      messageEl.text = 'paused · press P';
    } else {
      messageEl.text = best > 0 ? 'best $best' : '';
    }
  }

  window.onKeyDown.listen((KeyboardEvent e) {
    final key = (e.key ?? '').toLowerCase();
    if (key == 'r') {
      game = Game();
      paused = false;
    } else if (key == 'p') {
      paused = !paused;
    } else if (!paused && !game.isOver) {
      switch (key) {
        case 'arrowleft':
        case 'a':
          game.moveLeft();
        case 'arrowright':
        case 'd':
          game.moveRight();
        case 'arrowup':
        case 'w':
        case 'x':
          game.rotateCw();
        case 'z':
          game.rotateCcw();
        case 'arrowdown':
        case 's':
          game.softDrop();
        case ' ':
          game.hardDrop();
        case 'c':
          game.holdPiece();
        default:
          return;
      }
    } else {
      return;
    }
    e.preventDefault();
    draw();
  });

  void frame(num now) {
    final elapsed = (now - last).round();
    last = now;
    if (!paused && !game.isOver) game.tick(elapsed);
    draw();
    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
}
