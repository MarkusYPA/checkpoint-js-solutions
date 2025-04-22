
// not async: async func would return a promise, not the function
export function FinalAttempt(callback, count) {

    // there's an await, so async. Remeber: ...args for an undefined number of them
    // works with arrow or not
    //return async (...args) => {
    return async function (...args) {
        let tries = 0;

        // no recursion: just keep trying with looping
        while (tries < count) {
            try {
                const result = await callback(...args);
                return result;
            } catch (err) {
                tries++;
                if (tries === count) {
                    return "Final Attempt Fail";
                }
            }
        }
    }
}