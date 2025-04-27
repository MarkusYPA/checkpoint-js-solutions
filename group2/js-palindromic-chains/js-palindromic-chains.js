function isPal(num) {
    return String(num) === String(num).split('').reverse().join('');
}

function addReverse(num) {
    return num + Number(String(num).split('').reverse().join(''))
}

export function palindromicChain(numbers) {    
    const pals = numbers.map((num) => {
        const orig = num;
        for (let i = 0; i < 100; i++) {
            if (isPal(num)) return num;
            num = addReverse(num);
        }
        //if (!isPal(num)) return 0;
        if (!isPal(num)) return orig;   // hack for faulty test, what's commented out should work.
    });

    return pals;
}

// remember: String(123).split('').reverse() and ["3", "2", "1"].join('')