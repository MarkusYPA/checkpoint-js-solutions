export function sentencePyramid(sentence) {
    // remove leading and trailing ws, split by any ws
    const words = sentence.trim().split(/\s+/);

    words.forEach((_, i) => {
        // print partial array with slice()
        console.log(words.slice(0, i + 1).join(' '));
    })
}

// remember: trim(), and /\s+/ for any amount whitespace more than 0, and slice(from, to)