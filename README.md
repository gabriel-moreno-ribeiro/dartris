# dartris

Tetris written from scratch in Dart, playable in the terminal. The game engine
is a pure library with no UI dependencies, so it is fully unit-tested, and the
terminal front-end is a thin layer of raw keyboard input and ANSI drawing.

```sh
dart run bin/tetris.dart          # random seed
dart run bin/tetris.dart 42       # reproducible piece sequence
dart compile exe bin/tetris.dart -o tetris && ./tetris
```

| Key | Action |
| --- | --- |
| `a` / `d` or arrows | move |
| `w` / up | rotate clockwise |
| `z` | rotate counter-clockwise |
| `s` / down | soft drop |
| `space` | hard drop |
| `c` | hold |
| `p` | pause |
| `q` | quit |

## What is implemented

- The seven tetrominoes with SRS orientations and simple wall kicks
- 7-bag randomizer (every piece appears once per seven), seedable
- Ghost piece, hold slot (once per piece), five-piece preview
- Line clears with classic scoring (40 / 100 / 300 / 1200 x level+1),
  hard-drop bonus, levels every ten lines with faster gravity
- Game over when a piece cannot spawn or locks above the board
- Terminal rendering with colours, 20 fps refresh, non-blocking input

## Design

`lib/tetris.dart` holds three classes:

- `Piece`: an immutable tetromino (type, rotation, position) that knows the
  board coordinates of its four cells.
- `Board`: the grid, collision test (`fits`), placement and line clearing.
- `Game`: the rules. Every input is a method (`moveLeft`, `rotateCw`,
  `hardDrop`, `holdPiece`, ...) and time advances through `tick(elapsedMs)`,
  which applies gravity steps as they come due. `render()` prints the state
  as text, which makes the engine easy to test and to drive from any UI.

`bin/tetris.dart` puts the terminal in raw mode, listens to stdin for keys
(including arrow escape sequences), runs a timer for gravity and redraws the
screen with ANSI escape codes.

## Tests

```sh
dart pub get
dart test
```

## License

MIT
