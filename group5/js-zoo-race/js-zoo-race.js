
// both pass tests without async

// Returns a *Promise* that:
// - Resolves with the `name` of the animal after it completes the race
export function animal(
    name,
    maxSpeed,
    maxSpeedRange,
    midSpeed,
    midSpeedRange,
    speed,
    distance,
) {
    let time = 0;
    if (distance <= maxSpeedRange) {
        time = distance / maxSpeed;
    } else if (distance <= maxSpeedRange + midSpeedRange) {
        time = maxSpeedRange / maxSpeed + (distance - maxSpeedRange) / midSpeed;
    } else {
        time = maxSpeedRange / maxSpeed + midSpeedRange / midSpeed + (distance - maxSpeedRange - midSpeedRange) / speed;
    }

    return new Promise((res) => setTimeout(() => res(name), time))     // arrow function inside timeout
}

// Returns a *Promise* that resolves with the value of the first animal promise to resolve.
export function zooRace(animals) {
    return Promise.race(animals);
}