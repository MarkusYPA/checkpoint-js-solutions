export function gridWordFinder2(grid, word) {
    const result = [];

    if (grid.length === 0 || grid[0].length === 0 || word ==='')
        return result;

    // hor
    grid.forEach((line, index) => {
        const ix = line.join('').indexOf(word)
        if (ix >= 0) {
            result.push({ x: ix, y: index, direction: 'horizontal' });
        }
    })

    // vert
    grid[0].forEach((_, x) => {
        // construct string from a letter on each line
        let col = '';
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