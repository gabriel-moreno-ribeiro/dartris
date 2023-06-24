import 'dart:math';

import 'package:dartris/tetris.dart';
import 'package:test/test.dart';

/// Fills a row completely except for the given gaps.
void fillRow(Board board, int y, {List<int> gaps = const []}) {
  for (var x = 0; x < board.width; x++) {
    board.cells[y][x] = gaps.contains(x) ? 0 : 3;
  }
}

void main() {
  group('Piece', () {
    test('every tetromino has four cells in every rotation', () {
      for (final t in Tetromino.values) {
        for (var r = 0; r < 4; r++) {
          expect(Piece(t, r, 0, 0).cells.length, 4, reason: '$t rotation $r');
        }
      }
    });

    test('rotation wraps around and moves translate cells', () {
      final p = Piece(Tetromino.t, 3, 2, 5);
      expect(p.rotated(1).rotation, 0);
      expect(p.rotated(3).rotation, 2);
      final moved = p.moved(1, -2);
      expect(moved.x, 3);
      expect(moved.y, 3);
      expect(moved.cells.first, p.cells.first + const Point(1, -2));
    });

    test('I piece spans four columns horizontally and four rows vertically', () {
      final flat = Piece(Tetromino.i, 0, 0, 0).cells;
      expect(flat.map((c) => c.y).toSet(), {1});
      expect(flat.map((c) => c.x).toSet(), {0, 1, 2, 3});
      final tall = Piece(Tetromino.i, 1, 0, 0).cells;
      expect(tall.map((c) => c.x).toSet(), {2});
    });
  });

  group('Board', () {
    test('fits rejects cells outside or occupied', () {
      final board = Board();
      expect(board.fits(const Piece(Tetromino.o, 0, 0, 0)), isTrue);
      expect(board.fits(const Piece(Tetromino.o, 0, -1, 0)), isTrue, reason: 'O box has an empty first column');
      expect(board.fits(const Piece(Tetromino.o, 0, -2, 0)), isFalse, reason: 'past left wall');
      expect(board.fits(const Piece(Tetromino.o, 0, 8, 0)), isFalse, reason: 'past right wall');
      expect(board.fits(const Piece(Tetromino.o, 0, 3, 18)), isTrue, reason: 'resting on the floor');
      expect(board.fits(const Piece(Tetromino.o, 0, 3, 19)), isFalse, reason: 'past the floor');
      board.cells[1][2] = 1;
      expect(board.fits(const Piece(Tetromino.o, 0, 0, 0)), isFalse, reason: 'occupied');
    });

    test('cells above the board are allowed (spawn area)', () {
      final board = Board();
      expect(board.fits(const Piece(Tetromino.i, 0, 3, -1)), isTrue);
    });

    test('clearLines removes full rows and keeps the rest in order', () {
      final board = Board();
      fillRow(board, 19);
      fillRow(board, 18, gaps: [0]);
      fillRow(board, 17);
      board.cells[16][5] = 7;
      expect(board.clearLines(), 2);
      expect(board.cells[19][0], 0, reason: 'row with gap moved to bottom');
      expect(board.cells[19][1], 3);
      expect(board.cells[18][5], 7);
      expect(board.cells[17].every((v) => v == 0), isTrue);
      expect(board.clearLines(), 0);
    });
  });

  group('Game', () {
    test('7-bag randomizer deals every piece once per bag', () {
      final game = Game(seed: 1);
      final dealt = <Tetromino>[];
      for (var i = 0; i < 14; i++) {
        dealt.add(game.current!.type);
        game.hardDrop();
        for (final row in game.board.cells) {
          row.fillRange(0, row.length, 0); // keep the board empty so the game never ends
        }
      }
      expect(dealt.take(7).toSet().length, 7, reason: 'first bag');
      expect(dealt.skip(7).take(7).toSet().length, 7, reason: 'second bag');
      expect(game.next.length, 5, reason: 'preview always shows five pieces');
    });

    test('same seed gives the same sequence', () {
      final a = Game(seed: 99);
      final b = Game(seed: 99);
      for (var i = 0; i < 20; i++) {
        expect(a.current!.type, b.current!.type);
        a.hardDrop();
        b.hardDrop();
      }
    });

    test('pieces spawn at the top centre', () {
      final game = Game(seed: 1);
      expect(game.current!.x, 3);
      expect(game.current!.y, 0);
    });

    test('moving left and right stops at the walls', () {
      final game = Game(seed: 1);
      var moves = 0;
      while (game.moveLeft()) {
        moves++;
      }
      expect(game.current!.cells.map((c) => c.x).reduce(min), 0);
      expect(moves, greaterThan(0));
      while (game.moveRight()) {}
      expect(game.current!.cells.map((c) => c.x).reduce(max), game.board.width - 1);
    });

    test('hard drop lands the piece on the floor and spawns the next one', () {
      final game = Game(seed: 1);
      final type = game.current!.type;
      final nextType = game.next.first;
      final rows = game.hardDrop();
      expect(rows, greaterThan(10));
      expect(game.board.cells[19].any((v) => v == type.index + 1), isTrue);
      expect(game.current!.type, nextType);
      expect(game.score, rows * 2);
    });

    test('ghost is the lowest fitting position', () {
      final game = Game(seed: 1);
      final ghost = game.ghost;
      expect(game.board.fits(ghost), isTrue);
      expect(game.board.fits(ghost.moved(0, 1)), isFalse);
    });

    test('soft drop locks when blocked and gravity ticks drop the piece', () {
      final game = Game(seed: 1);
      final startY = game.current!.y;
      expect(game.tick(game.gravityMs), 1);
      expect(game.current!.y, startY + 1);
      expect(game.tick(game.gravityMs ~/ 2), 0);
      while (game.softDrop()) {}
      expect(game.board.cells.expand((r) => r).where((v) => v != 0).length, 4);
    });

    test('clearing lines scores by count and level', () {
      final game = Game(seed: 1);
      // fill rows 18 and 19 except the columns an upright I piece will fill
      fillRow(game.board, 19, gaps: [4]);
      fillRow(game.board, 18, gaps: [4]);
      fillRow(game.board, 17, gaps: [4]);
      fillRow(game.board, 16, gaps: [4]);
      // force an I piece, upright, over column 4
      game.current = const Piece(Tetromino.i, 1, 2, 0);
      final rows = game.hardDrop();
      expect(rows, 16);
      expect(game.lines, 4);
      expect(game.score, lineScores[4] * 1 + 2 * rows);
      expect(game.board.cells.every((row) => row.every((v) => v == 0)), isTrue);
    });

    test('level rises every ten lines and gravity speeds up', () {
      final game = Game(seed: 1);
      final slow = game.gravityMs;
      game.lines = 10;
      expect(game.level, 1);
      expect(game.gravityMs, lessThan(slow));
    });

    test('rotation kicks away from the wall', () {
      final game = Game(seed: 1);
      game.current = const Piece(Tetromino.i, 1, -2, 5); // upright I hugging the left wall
      expect(game.board.fits(game.current!), isTrue);
      expect(game.rotateCw(), isTrue);
      expect(game.current!.rotation, 2);
      expect(game.board.fits(game.current!), isTrue);
    });

    test('rotation fails when no kick fits', () {
      final game = Game(seed: 1);
      for (var y = 0; y < 20; y++) {
        for (var x = 0; x < 10; x++) {
          game.board.cells[y][x] = (x == 4 && y > 2) ? 0 : 3;
        }
      }
      game.current = const Piece(Tetromino.i, 1, 2, 5);
      expect(game.board.fits(game.current!), isTrue);
      expect(game.rotateCw(), isFalse);
      expect(game.current!.rotation, 1);
    });

    test('hold swaps pieces and works once per drop', () {
      final game = Game(seed: 1);
      final first = game.current!.type;
      final second = game.next[0];
      final third = game.next[1];
      expect(game.holdPiece(), isTrue);
      expect(game.hold, first);
      expect(game.current!.type, second);
      expect(game.holdPiece(), isFalse, reason: 'already held this turn');
      game.hardDrop(); // locks the second piece, third one spawns
      expect(game.current!.type, third);
      expect(game.holdPiece(), isTrue);
      expect(game.current!.type, first, reason: 'held piece comes back');
      expect(game.hold, third);
    });

    test('game ends when a new piece cannot spawn', () {
      final game = Game(seed: 1);
      // every row has two holes so nothing ever clears; the spawn area is blocked
      for (var y = 0; y < 20; y++) {
        fillRow(game.board, y, gaps: [0, 9]);
      }
      game.current = const Piece(Tetromino.i, 1, 7, 0); // upright I in column 9
      expect(game.board.fits(game.current!), isTrue);
      game.hardDrop();
      expect(game.lines, 0);
      expect(game.isOver, isTrue);
      expect(game.moveLeft(), isFalse);
      expect(game.hardDrop(), 0);
    });

    test('render shows piece, ghost and locked cells', () {
      final game = Game(seed: 1);
      game.current = const Piece(Tetromino.o, 0, 0, 0);
      game.board.cells[19][9] = 5;
      final text = game.render();
      final rows = text.trimRight().split('\n');
      expect(rows.length, 20);
      expect(rows[0].substring(1, 3), '##');
      expect(rows[18].substring(1, 3), '..');
      expect(rows[19][9], '5');
    });
  });
}
