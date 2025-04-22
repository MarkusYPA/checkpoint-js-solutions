
export function createCurriedFilterAndMap(criteria, mapper) {
    return ((obj)=>{
        const newObj = {};
        let keysKept = 0 ;

        // remember to let/const - and 'of'
        for (const [key, val] of Object.entries(obj)) {
            if (criteria(key, val)) {
                newObj[key] = mapper(val);
                keysKept++;
            }
        }

        // must remember: Object.keys(obj) and Object.entries(obj)
        return {filteredObject: newObj, keysKept: keysKept, keysFilteredOut: Object.keys(obj).length - keysKept};
    });
}