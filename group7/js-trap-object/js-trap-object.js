
export function trapObject(obj, fn) {

    const handler = {
        get(target, key) {
            const value = target[key];
            // what fn() gets as arguments is clearly stated in the exercise
            fn("get", key, value);

            // Recursively proxy nested objects
            if (value === null || typeof value !== 'object') return value;
            return new Proxy(value, handler);
        },

        set(target, key, newValue) {
            const oldValue = target[key];
            const result = (target[key] = newValue);   // result is always true in tests
            fn("set", key, oldValue, newValue);
            return result;
        }
    }

    return new Proxy(obj, handler);
}
