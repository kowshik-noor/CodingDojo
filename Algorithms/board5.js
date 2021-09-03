function generateCoinChange(input) {
    let result = "";
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    input *= 100;

    while (input >= 25) {
        input -= 25;
        quarters++
    }
    if (quarters) {
        result += `${quarters} ${quarters > 1 ? 'quarters' : 'quarter'}${input === 0 ? '':', '}`
    }
    while (input >= 10) {
        input -= 10;
        dimes++
    }
    if (dimes) {
        result += `${dimes} ${dimes > 1 ? 'dimes' : 'dime'}${input === 0 ? '':', '}`
    }
    while (input >= 5) {
        input -= 5;
        nickels++
    }
    if (nickels) {
        result += `${nickels} ${nickels > 1 ? 'nickels' : 'nickel'}${input === 0 ? '':', '}`
    }
    while (input > 0) {
        input -= 1;
        pennies++
    }
    if (pennies) {
        result += `${pennies} ${pennies > 1 ? 'pennies' : 'penny'}${input === 0 ? '':', '}`
    }

    return result;
}

console.log(generateCoinChange(0.77)) // 3 quarters, 2 pennies
console.log(generateCoinChange(2.85)) // 11 quarters, 1 dime
console.log(generateCoinChange(4.57)) // 18 quarters, 1 nickel, 2 pennies