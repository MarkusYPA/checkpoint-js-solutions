// - Returns a function that:
// - Calls `callback` with the provided arguments, retrying the call until `count` limit is reached.
// - If all attempts fail, returns `"Final Attempt Fail"`.
// - At success returns the result of `callback`.

// not async: async func would return a promise, not the function
export function FinalAttempt(callback, count) {

    // there's an await, so async. Remeber: ...args for an undefined number of them
    // works with or without arrow
    return async function (...args) {
        let tries = 0;

        // no recursion: just keep trying with looping
        while (tries < count) {
            tries++;
            try {
                return await callback(...args);
            } catch (err) {
                if (tries === count) {
                    return "Final Attempt Fail";
                }
            }
        }
    }
}