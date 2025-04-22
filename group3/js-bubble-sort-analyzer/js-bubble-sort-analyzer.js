export function bubbleSortAnalyzer(arr, comparator) {
    let steps = 0;
    let swaps = 0;

    let end = 0;
    while (true) {
        let swapNow = false;
        for (let i = 0; i < arr.length - 1 - end; i++) {
            if (comparator(arr[i], arr[i + 1]) > 0) {
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