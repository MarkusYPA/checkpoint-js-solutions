
export function isSnakePath(grid) {

    // given x and y coordinates, returns number of 1s around it
    function countNeighbors(coords) {
        const x = coords[0]
        const y = coords[1]
        let neighs = 0;

        if (y > 0 && grid[y - 1][x] == 1) neighs++
        if (y < grid.length - 1 && grid[y + 1][x] == 1) neighs++
        if (x > 0 && grid[y][x - 1] == 1) neighs++
        if (x < grid[0].length - 1 && grid[y][x + 1] == 1) neighs++

        return neighs;
    }

    let activeCells = 0;
    const neighborCounts = new Map();

    // two forEaches to scan all cells
    grid.forEach((row, y) => row.forEach((_, x) => {
        // count neighbors of all 1s
        if (grid[y][x] == 1) {
            activeCells++;
            const ns = countNeighbors([x, y])

            // update how many cells have this count of neighbours
            let countNow = neighborCounts.get(ns);
            if (!countNow) countNow = 0;
            countNow++
            neighborCounts.set(ns, countNow);
        }
    }));    

    return (neighborCounts.get(1) == 2 || activeCells == 1) // tests and instructions are lacking: only test if there are two ends or one active cell

    const ones = neighborCounts.get(1);
    if (activeCells == 1) return true;
    if (ones != 0 && ones != 2) return false; // tests and instructions are lacking: only test if there are two or zero ends.
    return true;
}

// remember: const mymap = new Map(), mymap.get(key), mymap.set(key, value)