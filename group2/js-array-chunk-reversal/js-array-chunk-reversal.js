export function reverseChunks(arr, chunkSize) {
    let subArrs = [];

    //let exArr = [1, 0, 2, 4, 5, , 6, 7, 8, 9];

    for (let i = 0; i < arr.length; i += chunkSize) {
        if (i + chunkSize <= arr.length) {
            subArrs.push(arr.slice(i, i + chunkSize))
        } else {
            subArrs.push(arr.slice(i))
        }
    }

    subArrs.forEach( sa => sa.reverse())
    const outArrs = [];
    subArrs.forEach((sa) => sa.forEach(e => outArrs.push(e)))

    return outArrs
}