# dartris

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

**EN:** Tetris in Dart with a UI-free engine (SRS pieces, 7-bag randomizer, ghost, hold, preview, classic scoring and levels) and two front-ends: a terminal one and a Chrome extension popup compiled with `dart compile js` (the built `extension/game.js` is committed, so it loads unpacked as is). `dart test` covers the engine. MIT.
