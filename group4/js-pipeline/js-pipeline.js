
export function pipeline(initialValue, functions) {

    const steps = [];

    functions.forEach((f, i) => {
        steps.push({
            index: i,
            input: initialValue,
            output: f(initialValue),
        })
        initialValue = f(initialValue);
    });

    return {
        finalValue: initialValue,
        steps: steps
    }
}