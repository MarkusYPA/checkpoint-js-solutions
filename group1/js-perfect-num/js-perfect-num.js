export function isPerfectNum(n) {
    // start with 1 on the array, deals with 0 and negatives
    const divisors = [1];

    // go through all numbers from 2 to n
    for (let div = 2; div <= n; div++) {
        if (n % div == 0) divisors.push(div);
    }
    const sum = divisors.reduce((acc, v) => acc += v);

    return sum - n === n;
}