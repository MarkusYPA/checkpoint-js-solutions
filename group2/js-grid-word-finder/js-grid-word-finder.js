export function gridWordsFinder(grid, words) {
    const founds = [];

    if (grid.length === 0 || grid[0].length === 0) {
        return founds;
    }

    // search in horizontal lines
    words.forEach(w => {
        grid.forEach(line => {
            if (line.join('').includes(w)) {
                if (!founds.includes(w)) founds.push(w)
            }
        });
    })

    // search in vertical lines
    words.forEach(w => {
        for (let i = 0; i < grid[0].length; i++) {
            let thisCol = '';
            for (let j = 0; j < grid.length; j++) {
                thisCol += grid[j][i];
            }
            if (thisCol.includes(w)) {
                if (!founds.includes(w)) founds.push(w)
            }
        }
    });

    return founds
}
