export function insertionSortAnalyzer(arr, comparator) {
    let its = 0;
    let swaps = 0;

    /* 
    1. Iterate through all element starting form index 1
    2. Swap the element down the array until comparison to previous is ok
    */

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && comparator(arr[j-1], arr[j]) > 0; j--) { // continue swapping until comparison is ok
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            its++;
            swaps++;
        }
        its++;
    }

    return {
        sortedArray: arr,
        iterations: its,
        swaps: swaps
    }
}