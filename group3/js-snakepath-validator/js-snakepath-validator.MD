# Snake Path Validator

## Instructions
Write a function isSnakePath(grid) that:

Takes a 2D grid of numbers where each cell is either 1 or 0. Checks whether the 1s in the grid form a valid snake path. A valid snake path is defined as:

- All 1s are connected either horizontally or vertically (no diagonal connections are allowed).
- There are no isolated 1s.
- The path can only have one connected sequence of 1s.
PS: the snake may have a single piece

Note: You are not allowed to use any kind of loops.

## Expected function
`function isSnakePath(grid) {}`

## Usage
Here is a possible program to test your function:

```
const grid1 = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 0],
];

const grid2 = [
  [1, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
];

console.log(isSnakePath(grid1)); // true
console.log(isSnakePath(grid2)); // false
```

And its output:

```
$ node main.js
true
false
$
```
