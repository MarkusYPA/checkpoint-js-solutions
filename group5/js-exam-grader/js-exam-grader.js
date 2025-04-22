export async function examGrader(timeout, exercises) {
    let totalNote = 0;
    const startTime = Date.now();

    for (const exercise of exercises) {
        const now = Date.now();
        const elapsed = now - startTime;
        const timeLeft = timeout - elapsed;

        if (timeLeft <= 0) break;

        const result = await Promise.race([
            exercise(),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeLeft)),
        ]).catch(err => null); // Catch timeout or any error

        if (result) {
            totalNote += result.note;
        } else {
            break; // Timeout occurred during this exercise, stop processing further
        }
    }
    
    return totalNote;
}
