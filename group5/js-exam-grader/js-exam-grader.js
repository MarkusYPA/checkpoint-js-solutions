export async function examGrader(timeout, exercises) {
    const startTime = Date.now();
    let totalGrade = 0;
  
    for (const exercise of exercises) {
      const elapsed = Date.now() - startTime;
      const timeLeft = timeout - elapsed;
  
      if (timeLeft <= 0) break;
  
      try {
        const result = await Promise.race([
          exercise(),
          new Promise((_, reject) => setTimeout(() => reject(new Error("time out")), timeLeft)), // takes two arrow functions to do this
        ]);
  
        totalGrade += result.note;
      } catch (err) {
        break; // timed out, new promise won the race
      }
    }
  
    return totalGrade;
}
