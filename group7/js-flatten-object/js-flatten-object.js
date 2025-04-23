
export function flattenObject(obj) {
    const flatObj = {};

    // Define two functions inside here: one for flattening arrays, the other for flattening objects
    // Each can call the other or itself
    // Both modify the flatObj -object that will be returned
    // All test cases are run with an object -> start with object flattening

    const flatArr = (arr, path) => {
        arr.forEach((ele, i) => {
            const arrKey = [path, String(i)].join('.');

            // primitive
            if (typeof ele !== 'object' || ele === null) {
                flatObj[arrKey] = ele;
                return;
            }

            // arrays
            if (Array.isArray(ele)) {
                flatArr(ele, arrKey);
                return;
            }

            // object
            flatten(ele, arrKey);
        })
    }

    const flatten = (obj, path = "") => {
        for (const [k, v] of Object.entries(obj)) {

            let key = k;
            if (path !== "") {
                key = [path, k].join('.')
            }

            // primitive
            if (typeof v !== 'object' || v === null) {
                flatObj[key] = v;
                continue;
            }

            // arrays
            if (Array.isArray(v)) {
                flatArr(v, key);
                continue;
            }

            // object
            flatten(v, key);
        }
    }

    flatten(obj);
    return flatObj;
}