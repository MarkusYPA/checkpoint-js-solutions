// tests don't include arrays so this never runs
function cloneArray(arr) {
    const nwArr = [];
    arr.forEach(el => {
        // primitives
        if (typeof el !== 'object' || el === null) {
            nwArr.push(el);
            return;     // same as continue in normal loop (this is a function that runs for each element)
        }
        // arrays
        if (Array.isArray(el)) {
            nwArr.push(cloneArray(el));
            return;
        }
        // objects
        nwArr.push = cloneObject(el);
    });
    return nwArr;
}

function cloneObject(obj) {
    const nwObj = {};
    for (const [key, val] of Object.entries(obj)) {
        
        // primitives
        if (typeof val !== 'object' || val === null) {
            nwObj[key] = val;
            continue;
        }

        // arrays
        if (Array.isArray(val)) {
            nwObj[key] = cloneArray(val);
            continue;
        }

        // self
        if (val === obj) {
            nwObj[key] = nwObj; // when value is object itself, reference itself here too
            continue;
        }

        // objects
        nwObj[key] = cloneObject(val);
    }
    return nwObj;
}

export function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        throw new Error("Input must be a non-null object");     // required error message
    }
    return cloneObject(obj);
}
