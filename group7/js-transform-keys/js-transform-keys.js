
function tk(obj, transformFn) {
    for (const [key, val] of Object.entries(obj)) {
        // transform keys of sub objects first
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            tk(val, transformFn);  
        }
        // assign value to new key and delete the old one
        obj[transformFn(key)] = val;
        delete obj[key];
    }
}

export function transformKeys(obj, transformFn) {
    tk(obj, transformFn);   // use non-returning function instead of recurring this one
    return obj;
}