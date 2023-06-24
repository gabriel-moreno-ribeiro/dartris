/// Tetris game logic, independent of any UI.
///
/// The [Game] owns a [Board], the falling [Piece], a 7-bag randomizer, the
/// hold slot, scoring and gravity. Every action is a method (moveLeft,
/// rotateCw, hardDrop, ...) so the same engine can drive a terminal, a GUI
/// or a test-suite.
library tetris;

import 'dart:math';

/// The seven tetrominoes, in the classic order.
enum Tetromino { i, o, t, s, z, j, l }

/// Rotation states for each tetromino, as 4 strings (one per orientation)
/// laid out on a 4x4 grid ('#' = filled). These follow the SRS orientations.
const Map<Tetromino, List<String>> _shapes = {
  Tetromino.i: [
    '....####........',
    '..#...#...#...#.',
    '........####....',
    '.#...#...#...#..',
  ],
  Tetromino.o: [
    '.##..##.........',
    '.##..##.........',
    '.##..##.........',
    '.##..##.........',
  ],
  Tetromino.t: [
    '.#..###.........',
    '.#...##..#......',
    '....###..#......',
    '.#..##...#......',
  ],
  Tetromino.s: [
    '.##.##..........',
    '.#...##...#.....',
    '.....##.##......',
    '#...##...#......',
  ],
  Tetromino.z: [
    '##...##.........',
    '..#..##..#......',
    '....##...##.....',
    '.#..##..#.......',
  ],
  Tetromino.j: [
    '#...###.........',
    '.##..#...#......',
    '....###...#.....',
    '.#...#..##......',
  ],
  Tetromino.l: [
    '..#.###.........',
    '.#...#...##.....',
    '....###.#.......',
    '##...#...#......',
  ],
};

/// Wall-kick offsets tried, in order, when a rotation collides.
const List<Point<int>> _kicks = [
  Point(0, 0),
  Point(-1, 0),
  Point(1, 0),
  Point(0, -1),
  Point(-2, 0),
  Point(2, 0),
  Point(-1, -1),
  Point(1, -1),
];

/// Points awarded for clearing 1, 2, 3 or 4 lines at once (times level + 1).
const List<int> lineScores = [0, 40, 100, 300, 1200];

/// A tetromino at a position and orientation on the board.
class Piece {
  final Tetromino type;
  final int rotation; // 0..3
  final int x; // column of the 4x4 box's left edge
  final int y; // row of the 4x4 box's top edge (0 = top of board)

  const Piece(this.type, this.rotation, this.x, this.y);

  Piece copyWith({int? rotation, int? x, int? y}) =>
      Piece(type, rotation ?? this.rotation, x ?? this.x, y ?? this.y);

  Piece moved(int dx, int dy) => copyWith(x: x + dx, y: y + dy);

  Piece rotated(int steps) => copyWith(rotation: (rotation + steps) % 4);

  /// Absolute board coordinates of the four filled cells.
  List<Point<int>> get cells {
    final shape = _shapes[type]![rotation];
    final out = <Point<int>>[];
    for (var i = 0; i < 16; i++) {
      if (shape[i] == '#') out.add(Point(x + i % 4, y + i ~/ 4));
    }
    return out;
  }

  /// Colour/id stored in the board grid for this piece type (1-based).
  int get id => type.index + 1;
}

/// The playfield. `cells[row][col]` is 0 when empty, otherwise a piece id.
class Board {
  final int width;
  final int height;
  final List<List<int>> cells;

  Board({this.width = 10, this.height = 20})
      : cells = List.generate(height, (_) => List.filled(width, 0));

  bool inside(int x, int y) => x >= 0 && x < width && y < height;

  bool isEmpty(int x, int y) => y < 0 ? inside(x, y) : inside(x, y) && cells[y][x] == 0;

  /// True when every cell of the piece is inside the board and unoccupied.
  bool fits(Piece piece) => piece.cells.every((c) => isEmpty(c.x, c.y));

  void place(Piece piece) {
    for (final c in piece.cells) {
      if (c.y >= 0 && c.y < height) cells[c.y][c.x] = piece.id;
    }
  }

  /// Removes full rows, returns how many were cleared.
  int clearLines() {
    final kept = cells.where((row) => row.any((v) => v == 0)).toList();
    final cleared = height - kept.length;
    if (cleared > 0) {
      cells
        ..clear()
        ..addAll(List.generate(cleared, (_) => List.filled(width, 0)))
        ..addAll(kept);
    }
    return cleared;
  }

  bool get isRowFull => cells.any((row) => row.every((v) => v != 0));
}

/// Full game state and rules.
class Game {
  final Board board;
  final Random _random;
  final List<Tetromino> _bag = [];
  final List<Tetromino> next = [];

  Piece? current;
  Tetromino? hold;
  bool canHold = true;
  int score = 0;
  int lines = 0;
  bool isOver = false;
  int _gravityAccumulator = 0;

  Game({int? seed, int width = 10, int height = 20})
      : board = Board(width: width, height: height),
        _random = Random(seed) {
    _refillNext();
    spawn();
  }

  int get level => lines ~/ 10;

  /// Milliseconds between gravity steps at the current level.
  int get gravityMs => max(80, 800 - level * 70);

  void _refillNext() {
    while (next.length < 5) {
      if (_bag.isEmpty) {
        _bag.addAll(Tetromino.values);
        _bag.shuffle(_random);
      }
      next.add(_bag.removeLast());
    }
  }

  /// Starts the next piece at the top centre. Ends the game if it cannot fit.
  void spawn() {
    final type = next.removeAt(0);
    _refillNext();
    _spawnType(type);
  }

  void _spawnType(Tetromino type) {
    final piece = Piece(type, 0, board.width ~/ 2 - 2, 0);
    if (!board.fits(piece)) {
      // try one row higher (partly above the board) before giving up
      final higher = piece.moved(0, -1);
      if (board.fits(higher)) {
        current = higher;
        return;
      }
      current = piece;
      isOver = true;
      return;
    }
    current = piece;
  }

  bool _tryMove(Piece candidate) {
    if (isOver || !board.fits(candidate)) return false;
    current = candidate;
    return true;
  }

  bool moveLeft() => _tryMove(current!.moved(-1, 0));
  bool moveRight() => _tryMove(current!.moved(1, 0));

  /// Moves down one row. Returns false (and locks the piece) when blocked.
  bool softDrop() {
    if (isOver) return false;
    if (_tryMove(current!.moved(0, 1))) {
      return true;
    }
    lock();
    return false;
  }

  /// Drops to the ghost position and locks. Returns rows travelled.
  int hardDrop() {
    if (isOver) return 0;
    final target = ghost;
    final travelled = target.y - current!.y;
    current = target;
    score += travelled * 2;
    lock();
    return travelled;
  }

  bool rotateCw() => _rotate(1);
  bool rotateCcw() => _rotate(3);

  bool _rotate(int steps) {
    if (isOver) return false;
    final rotated = current!.rotated(steps);
    for (final kick in _kicks) {
      final candidate = rotated.moved(kick.x, kick.y);
      if (board.fits(candidate)) {
        current = candidate;
        return true;
      }
    }
    return false;
  }

  /// Where the current piece would land if dropped straight down.
  Piece get ghost {
    var p = current!;
    while (board.fits(p.moved(0, 1))) {
      p = p.moved(0, 1);
    }
    return p;
  }

  /// Swaps the current piece with the hold slot (once per piece).
  bool holdPiece() {
    if (isOver || !canHold) return false;
    final swapped = hold;
    hold = current!.type;
    canHold = false;
    if (swapped == null) {
      spawn();
    } else {
      _spawnType(swapped);
    }
    return true;
  }

  /// Fixes the current piece to the board, clears lines, scores and spawns.
  void lock() {
    final piece = current!;
    if (piece.cells.any((c) => c.y < 0)) {
      board.place(piece);
      isOver = true;
      return;
    }
    board.place(piece);
    final cleared = board.clearLines();
    lines += cleared;
    score += lineScores[cleared] * (level + 1);
    canHold = true;
    _gravityAccumulator = 0;
    spawn();
  }

  /// Advances time; applies gravity steps as they come due. Returns the
  /// number of gravity steps that happened.
  int tick(int elapsedMs) {
    if (isOver) return 0;
    _gravityAccumulator += elapsedMs;
    var steps = 0;
    while (_gravityAccumulator >= gravityMs && !isOver) {
      _gravityAccumulator -= gravityMs;
      softDrop();
      steps++;
    }
    return steps;
  }

  /// A text rendering of the board with the current piece and ghost, for
  /// debugging and tests. '#' current piece, '.' ghost, digits for locked cells.
  String render() {
    final buffer = StringBuffer();
    final ghostCells = isOver ? <Point<int>>{} : ghost.cells.toSet();
    final pieceCells = current?.cells.toSet() ?? {};
    for (var y = 0; y < board.height; y++) {
      for (var x = 0; x < board.width; x++) {
        final p = Point(x, y);
        if (pieceCells.contains(p)) {
          buffer.write('#');
        } else if (ghostCells.contains(p)) {
          buffer.write('.');
        } else {
          final v = board.cells[y][x];
          buffer.write(v == 0 ? ' ' : v.toString());
        }
      }
      buffer.writeln();
    }
    return buffer.toString();
  }
}
