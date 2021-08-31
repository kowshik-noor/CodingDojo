// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve, you can also use a counter

// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string

function parensValid(str) {
    // your code here
    let isEvenParens = false;
    let opens = 0;
    let closed = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' ) {
            opens ++;
        } else if (str[i] === ')') {
            closed++;
        }
    }
    if (opens === closed) {
        isEvenParens = true
    } else {
        isEvenParens = false;
    }

    let startswithOpen = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            startswithOpen = true;
            break;
        } else if (str[i] === ')') {
            break;
        }
    }

    let startswithClose = false;
    for (let i = str.length - 1; i > -1; i--) {
        if (str[i] === ')') {
            startswithClose = true;
            break;
        } else if (str[i] === '(') {
            break;
        }
    }



    let parensList = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            parensList.push([i, '('])
        } else if (str[i] === ')') {
            parensList.push([i, ')'])
        }
    }
    

    return startswithOpen && startswithClose && isEvenParens;
}

console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(o)k"));
console.log(parensValid("((()))"));
console.log(parensValid("()()()()()()("));

// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid (returns true/false). 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve, you can also use a counter

function bracesValid(str) {
    // your code here
}

console.log(bracesValid("({[({})]})"));
console.log(bracesValid("d(i{a}l[t]o)n{e!"));
console.log(bracesValid("{{[a]}}(){bcd}{()}"));









