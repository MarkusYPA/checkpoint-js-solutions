

export function isSnakePath(grid) {
    // give x and y coordinates, returns number of 1s around it
    function countNeighbors(coords) {
        const x = coords[0]
        const y = coords[1]
        let neighs = 0;

        if (y > 0 && grid[y - 1][x] == 1) {
            neighs++
        };
        if (y < grid.length - 1 && grid[y + 1][x] == 1) {
            neighs++
        };
        if (x > 0 && grid[y][x - 1] == 1) {
            neighs++
        };
        if (x < grid[0].length - 1 && grid[y][x + 1] == 1) {
            neighs++
        };

        return neighs;
    }

    let activeCells = 0;
    const neighborCounts = new Map();
    grid.forEach((row, y) => row.forEach((_, x) => {

        // count neighbors of all 1s
        if (grid[y][x] == 1) {
            activeCells++;
            const ns = countNeighbors([x, y])
            let countNow = neighborCounts.get(ns);
            if (!countNow) countNow = 0;
            countNow++
            neighborCounts.set(ns, countNow);
        }
    }));

    //console.log(neighborCounts)


    const ones = neighborCounts.get(1);
    
    if (activeCells == 1) return true;
    if (ones != 0 && ones != 2) return false;

    return true;

}


/* isSnakePath([
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
]) */