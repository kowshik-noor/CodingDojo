// Create a function that, given a string, returns the string's acronym as a string (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

function acronym(str) {
    // your code here
    let result = ''

    // function that would use recursion to check for multiple spaces
    // function spaceChecker(word, i) {
    //     if (word[i] === ' ') {
    //         i += 1;
    //         spaceChecker(word, i)
    //     } else if (word[i] !== ' ' && word[i] !== undefined) {
    //         return i;
    // }
    // }

    // check if the first letter is a space
    if (str[0] !== ' ') {
        result += str[0].toUpperCase();
    }
    
    // check for word breaks
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += str[i+1].toUpperCase()
        }
    }

    // updated for loop that uses the spaceChecker function
    // for (let i = 0; i < str.length; i++) {
    //     result += str[spaceChecker(str,i)].toUpperCase()
    // }

    return result;

}

console.log(acronym("there's no free lunch - gotta pay yer way"));



// Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.

// Example: "creature" ---> "erutaerc"

// ** Don't use the built-in reverse() method!

function reverseString(str) {
    // your code here
    let newString = ""
    for (let i = str.length - 1; i > -1; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString("creature")); // "erutaerc"