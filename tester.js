export function tester(tests){
    tests.forEach((testFn, i) => {
        try {
            const fnSource = testFn.toString();
            testFn({
                eq: (a, b = "") => {
                    const passed = JSON.stringify(a) === JSON.stringify(b);
                    if (!passed) {
                        throw new Error(`
    case:     ${fnSource}
    expected: ${JSON.stringify(b)}
    actual:   ${JSON.stringify(a)}`);
                    }
                    return true;
                }
            });
            console.log(`✅ Test ${i + 1} bimmed`);
        } catch (err) {
            console.error(`❌ Test ${i + 1} failed:`, err.message);
        }
    });
}