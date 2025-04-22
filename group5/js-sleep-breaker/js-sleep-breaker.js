
// sleepBreaker returns a  promise that resolves with undefined
// when either the delay is reached or breaker resolves

export function sleepBreaker(delay, breaker) {

    // new promise has resolve and reject as parameters
    return new Promise((resolve) => {

        // define a timer to resolve after delay
        // starts right away
        const to = setTimeout(() => {
            resolve();
        }, delay);

        // start breaker
        breaker().then(() => {
            // cancel the sleep timer and resolve
            clearTimeout(to); 
            resolve();
        });
    });
}
