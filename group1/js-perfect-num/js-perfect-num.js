export function isPerfectNum(n) {
    if (n < 1) return false;

    let sum = 0;

    // all numbers from 1 to n-1
    for (let div = 1; div < n; div++) {
        if (n % div == 0) {
            sum += div;
        }
    }

    return sum === n;
}