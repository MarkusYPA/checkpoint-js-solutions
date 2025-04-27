export function reverseChunks(arr, chunkSize) {
    let chunked = [];

    // remember: array.slice(from, to)
    for (let i = 0; i < arr.length; i += chunkSize) {
        if (i + chunkSize < arr.length) {
            arr.slice(i, i + chunkSize).reverse().forEach((v) => chunked.push(v))
        } else {
            arr.slice(i).reverse().forEach((v) => chunked.push(v))
        }
    }

    return chunked
}