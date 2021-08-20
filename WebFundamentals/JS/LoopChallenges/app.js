// Print odds 1-20
console.log("Print odds 1-20");
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// Decreasing multiples of 3
console.log("Decreasing mulitiples of 3");
for (let i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Print the sequence
console.log("Print the sequence");
function printSequence(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printSequence([4, 2.5, 1, -0.5, -2, -3.5]);

// Sigma
console.log("Sigma");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Facotrial
console.log("Factorial")
let product = 1;
for (let i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product);