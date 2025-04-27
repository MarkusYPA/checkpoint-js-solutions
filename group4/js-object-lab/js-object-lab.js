
export function mergeAndTransform(objects, transforms) {
    
    let nuObj = {}; // let because transforms create new objects in its place
    let news = 0;
    let overs = 0;

    // Tests assume keys are added to the first object > disregard these from new keys count with 'offset'
    const offset = Object.keys(objects[0]).length;

    objects.forEach(o => {
        for (const [key, val] of Object.entries(o)) {
            if (nuObj[key]) {
                overs++;
            } else {
                news++;
            }
            nuObj[key] = val;
        }
    });

    // very simple to apply all transformations
    transforms.forEach((t) => nuObj = t(nuObj))

    const res = {
        finalObject: nuObj,
        transformationsCount: transforms.length,    // just the number of functions
        keysAdded: news - offset,
        keysOverwritten: overs
    };

    return res
}

// remember: check if key existes with if (nuObj[key])