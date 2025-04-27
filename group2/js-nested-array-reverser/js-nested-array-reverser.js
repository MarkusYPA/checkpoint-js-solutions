export function nestedArrayReverser(words) {
    // map because it creates a new array where it's possible to put strings instead of arrays
    return words.reverse().map((line) => line.reverse().join(' ')).join(' ');
}