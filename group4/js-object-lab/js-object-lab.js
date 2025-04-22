
export function mergeAndTransform(objects, transforms) {

    // let because transforms create new objects in its place
    let nuObj = {};
    let news = 0;
    let overs = 0;

    // Tests assume keys are added to the first object > disregard these from new keys count
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

    transforms.forEach((t) => nuObj = t(nuObj))

    const res = {
        finalObject: nuObj,
        transformationsCount: transforms.length,    // just the number of functions
        keysAdded: news - offset,
        keysOverwritten: overs
    };

    //console.log(res);

    return res
}