// What does it mean?: "You are not allowed to use any kind of loops"
// Is forEach allowed? While and for surely not?

export function gridWordFinder2(grid, word) {
    const result = [];

    if (grid.length === 0 || grid[0].length === 0 || word ==='')
        return result;

    // horizontal
    grid.forEach((line, index) => {
        const ix = line.join('').indexOf(word)
        // negative means not found?
        if (ix >= 0) {
            result.push({ x: ix, y: index, direction: 'horizontal' });
        }
    })

    // vertical
    // column indices (x)
    grid[0].forEach((_, x) => {
        // construct string from a letter on each line
        let col = '';
        // all line indices (y)
        grid.forEach((_, y) => {
            col += grid[y][x];
        })

        const ix = col.indexOf(word)
        if (ix >= 0) {
            result.push({ x: x, y: ix, direction: 'vertical' });
        }
    })

    return result;
}

// remember: anystring.indexOf(substring)