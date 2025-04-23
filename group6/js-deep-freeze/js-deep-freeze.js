
function freezeIt(obj){
    Object.freeze(obj);
    for (const val of Object.values(obj)) {
        if (typeof val === 'object' && val !== null && val !== obj) { // last clause deals with circular reference
            freezeIt(val);
        }
    }
}

export function deepFreeze(obj) {
    if (typeof obj !== 'object' || obj === null) {
        throw new Error ("Input must be a non-null object")
    }

    freezeIt(obj);    

    return obj;
}
