export function nestedArrayReverser(words) {
    return words.reverse().map((line) => line.reverse().join(' ')).join(' ');
}