// Sorts the arraywith bubble sort and returns an object with:
// - `sortedArray`: The sorted array.
// - `iterations`: The total number of iterations (steps) performed during the sort.
// - `swaps`: The total number of swaps performed during the sort.


export function bubbleSortAnalyzer(arr, comparator) {
    let steps = 0;
    let swaps = 0;

    let end = 0;

    //while loop exits when no swaps
    while (true) {
        let swapNow = false;
        // one for loop, from start to diminishing end - 1
        for (let i = 0; i < arr.length - 1 - end; i++) {
            if (comparator(arr[i], arr[i + 1]) > 0) {   // swap at comparator positive
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swaps++;
                swapNow = true;
            }
            steps++;
        }
        if (!swapNow) break
        end++;
    }

    return {
        sortedArray: arr,
        iterations: steps,
        swaps: swaps
    }
}