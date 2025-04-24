
export function trapObject(obj, fn) {

    const handler = {
        get(t, key) {
            const value = t[key];
            // what fn() gets as arguments is clearly stated in the exercise
            fn("get", key, value);

            // Recursively proxy nested objects
            return createProxy(value);
        },

        set(t, key, newValue) {
            const oldValue = t[key];
            const result = t[key] = newValue;   // result is always true in tests
            fn("set", key, oldValue, newValue);
            return result;
        }
    }

    // a function that returns a proxy when the target is an object
    // and otherwise just the target
    function createProxy(target) {
        if (target === null || typeof target !== 'object') return target;
        return new Proxy(target, handler);
    }

    return createProxy(obj);
}
