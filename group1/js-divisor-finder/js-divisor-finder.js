// remember to export

export function divisors(n) {
    const divs = [];
    let divisor = 0;
    if (n < 0) n *= -1
    while (divisor < n - 1) {
        divisor++;
        if (n % divisor === 0) {
            divs.push(divisor);
        }
    };
    return divs;
}