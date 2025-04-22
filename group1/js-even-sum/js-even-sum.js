export function evenSum(n){
    let current = 0;
    let mult = 1;
    let evens = 0;

    if (n < 0) {
        mult = -1;
        n *= -1;
    }

    while (current <= n) {
        evens += (current * mult);
        current += 2;
    }

    return evens;
}