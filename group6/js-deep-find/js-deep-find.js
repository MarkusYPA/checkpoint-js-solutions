
export function deepFind(obj, path) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        throw new Error("Input must be a non-null object");
    }
    if (typeof path !== 'string') {
        throw new Error("Path must be a string");
    }

    const steps = path.split('.');
    let thisLevel = obj;

    for (const step of steps) {
        if (Object.keys(thisLevel).includes(step)) { // works for arrays too
            thisLevel = thisLevel[step];
        } else {
            return undefined
        }
    }

    return thisLevel;
}

// remember: Object.keys(thisLevel).includes(step)