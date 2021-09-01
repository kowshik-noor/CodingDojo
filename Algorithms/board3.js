function longestPallindrome(str) {
    // your code here
    let reverse = "";
    for(let i = str.length-1; i > -1; i--) {
        reverse += str[i];
    }
    console.log(reverse)
}

console.log(longestPallindrome("my favorite racecar erupted"));
console.log(longestPallindrome("nada"));
console.log(longestPallindrome("nothing to see"));