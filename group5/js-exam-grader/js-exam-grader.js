// Calculates the final grade by:
// - Summing the grades (property `note`) of all exercises that completed within `timeout`.

export async function examGrader(timeout, exercises) {
  const startTime = Date.now();
  let totalGrade = 0;

  for (const exercise of exercises) {
    const elapsed = Date.now() - startTime;
    const timeLeft = timeout - elapsed;

    // Stop trying by racing against reject
    try {
      const result = await Promise.race([
        exercise(),
        //new Promise((_, reject) => setTimeout(() => reject(new Error("time out")), timeLeft)), // It takes two arrow functions to do this
        new Promise((_, reject) => setTimeout(() => reject(), timeLeft)), // Reject value not really necessary
      ]);

      totalGrade += result.note;
    } catch (err) {
      break; // timed out, reject promise won the race
    }
  }

  return totalGrade;
}
