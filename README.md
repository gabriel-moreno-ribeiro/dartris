# dartris

> 🇺🇸 [English version below](#english)

Tetris em Dart. O motor é uma biblioteca pura, sem nenhuma dependência de interface, e por isso tem duas caras: uma no terminal (ANSI, teclado cru) e uma **extensão do Chrome** que abre o jogo num popup na barra de ferramentas. Foi meu jeito de aprender Dart sem passar por Flutter.

## Extensão do Chrome

A pasta `extension/` já vem com o `game.js` compilado. `chrome://extensions` → modo desenvolvedor → "Carregar sem compactação" → escolhe `extension/`. Aparece um ícone na barra; clica e joga. Melhor pontuação fica salva no `localStorage`.

Pra recompilar depois de mexer no código:

```sh
dart pub get
dart compile js -O2 --no-source-maps web/main.dart -o extension/game.js
```

`web/main.dart` é o front-end de canvas (uns 150 linhas): desenha o tabuleiro, a peça fantasma, o próximo e o hold, e traduz teclado pra chamadas do motor.

## Terminal

```sh
dart run bin/tetris.dart          # seed aleatória
dart run bin/tetris.dart 42       # sequência de peças reproduzível
dart compile exe bin/tetris.dart -o tetris && ./tetris
```

| Tecla | Ação |
| --- | --- |
| `a` / `d` ou setas | mover |
| `w` / cima | girar horário, `z` anti-horário |
| `s` / baixo | soft drop, `space` hard drop |
| `c` | hold |
| `p` / `q` | pausa / sair |

## O motor (`lib/tetris.dart`)

- As sete peças com as orientações do SRS e wall kicks simples
- Randomizador 7-bag (cada peça aparece uma vez a cada sete), com seed
- Peça fantasma, hold (uma vez por peça), preview de cinco
- Pontuação clássica (40 / 100 / 300 / 1200 × nível+1), bônus de hard drop, nível a cada dez linhas com gravidade mais rápida
- Game over quando uma peça não consegue nascer ou trava acima do tabuleiro

Três classes: `Piece` (imutável: tipo, rotação, posição, sabe suas quatro células), `Board` (grade, `fits`, colocação, limpeza de linhas) e `Game` (as regras; cada input é um método e o tempo avança por `tick(elapsedMs)`). O `render()` devolve o estado como texto, que é o que deixa o motor fácil de testar e de pendurar em qualquer UI. Foi a decisão de design que mais valeu a pena: a extensão foi escrita numa tarde porque o jogo já existia pronto.

Testes: `dart test`.

---

## English

Tetris in Dart. The engine is a pure library, with no interface dependency at all, and because of that it has two faces: one in the terminal (ANSI, raw keyboard) and a **Chrome extension** that opens the game in a popup on the toolbar. It was my way of learning Dart without going through Flutter.

## Chrome extension

The `extension/` folder already comes with the compiled `game.js`. `chrome://extensions` → developer mode → "Load unpacked" → pick `extension/`. An icon shows up on the bar; click and play. Best score is saved in `localStorage`.

To recompile after touching the code:

```sh
dart pub get
dart compile js -O2 --no-source-maps web/main.dart -o extension/game.js
```

`web/main.dart` is the canvas front-end (some 150 lines): draws the board, the ghost piece, the next one and the hold, and translates keyboard into engine calls.

## Terminal

```sh
dart run bin/tetris.dart          # random seed
dart run bin/tetris.dart 42       # reproducible piece sequence
dart compile exe bin/tetris.dart -o tetris && ./tetris
```

| Key | Action |
| --- | --- |
| `a` / `d` or arrows | move |
| `w` / up | rotate clockwise, `z` counter-clockwise |
| `s` / down | soft drop, `space` hard drop |
| `c` | hold |
| `p` / `q` | pause / quit |

## The engine (`lib/tetris.dart`)

- The seven pieces with SRS orientations and simple wall kicks
- 7-bag randomizer (each piece shows up once every seven), seeded
- Ghost piece, hold (once per piece), preview of five
- Classic scoring (40 / 100 / 300 / 1200 × level+1), hard drop bonus, a level every ten lines with faster gravity
- Game over when a piece can't spawn or locks above the board

Three classes: `Piece` (immutable: type, rotation, position, knows its four cells), `Board` (grid, `fits`, placement, line clearing) and `Game` (the rules; every input is a method and time advances through `tick(elapsedMs)`). `render()` returns the state as text, which is what makes the engine easy to test and to hang on any UI. It was the design decision that paid off the most: the extension was written in one afternoon because the game already existed, ready.

Tests: `dart test`.

MIT.
