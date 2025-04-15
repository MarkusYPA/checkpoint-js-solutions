export function tester(tests){
    tests.forEach((testFn, i) => {
        try {
            testFn({
                eq: (a, b) => {
                    const passed = JSON.stringify(a) === JSON.stringify(b);
                    if (!passed) throw new Error(`Expected ${b}, got ${a}`);
                    return true;
                }
            });
            console.log(`✅ Test ${i + 1} bimmed`);
        } catch (err) {
            console.error(`❌ Test ${i + 1} failed:`, err.message);
        }
    });
}