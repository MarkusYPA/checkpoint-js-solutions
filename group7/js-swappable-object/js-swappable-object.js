
export function swappableObject(obj) {

    // handler intercepts attempts at accessing properties (get)
    const handler = {
        // get method inside handler object
        get(obj, prop) {
            // look for matches in values
            for (const [k, v] of Object.entries(obj)) {
                if (v === prop) return k;
            }
            // normal behavior
            return obj[prop]
        },
    };

    // return a proxy that targets the given object and uses the handler above
    return new Proxy(obj, handler);
}