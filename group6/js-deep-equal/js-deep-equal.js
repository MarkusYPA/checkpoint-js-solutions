

// No arrays in tests: this never runs
function checkArray(a1, a2) {
    if (!Array.isArray(a2)) return false;

    if (a1 === a2) return true;
    if (a1 === null || a2 === null) return false;
    if (a1.length !== a2.length) return false;

    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) return false;
    }

    return true;
}

// remember: Object.entries(obj), Object.hasOwn(obj, key)

function checkEqual(o1, o2) {
    for (const [k, v] of Object.entries(o1)) {
        if (!Object.hasOwn(o2, k)) {
            return false;
        } else {
            // primitive
            if (typeof v !== "object" || v === null) {
                if (v !== o2[k]) {
                    return false;
                } else {
                    continue;
                }
            }

            // array
            if (Array.isArray(v)) {
                if (!checkArray(v, o2[k])) return false;
            }

            // self - o2.self has to be o1, not o2!
            if (v === o1) {
                if (o2[k] !== o1) {
                    return false;
                } else {
                    continue;
                }
            }

            // object
            if (typeof o2[k] !== "object" || o2[k] === null || Array.isArray(o2[k])) {
                return false;
            }
            if (!checkEqual(v, o2[k])) {
                return false
            };
        }
    }
    return true;
}


export function deepEqual(obj1, obj2) {
    if (typeof obj1 !== "object" || obj1 === null || Array.isArray(obj1) || typeof obj2 !== "object" || obj2 === null || Array.isArray(obj2)) {
        // error throwing tests were commented out, but this passes them
        // spelling must be exact
        throw new Error("Input must be a non-null object")
    }
    return checkEqual(obj1, obj2);
}
