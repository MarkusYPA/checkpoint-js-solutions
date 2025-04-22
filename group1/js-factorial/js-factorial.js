export function factorial(n) {
    let res = 1;
    while (n > 1) {
        res *= n;        
        n--;
    }
    return res;
}