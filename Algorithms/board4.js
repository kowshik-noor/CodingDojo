// Write a function that given a sorted array of page numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"

// ============================
// Instructor's Solution
// ============================

function arrayConsecNumLoop(first, next, arr) {
    for (let i = first, j = next; arr[i] + 1 === arr[j]; i++, j++){
        next = j
    }
    return next
}

function bookIndex(arr){
    //your code here
    let result = ""
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
        if (arr[i + 1] !== arr[i] + 1) {
            result += ", "
        } else {
            let nextIndex = arrayConsecNumLoop(i, (i+1), arr)
            result += `-${arr[nextIndex]}, `
            i = nextIndex
        }
    };

    return result.slice(0, -2);;
}

console.log(bookIndex([1, 3, 4, 5, 7, 8, 10, 12]))
console.log(bookIndex([1,2,3,4,5,6,7,8,9,10,11,12]))
console.log(bookIndex([1,3,4,5,7,8,10,12,100,101,102,104,105,106,107]))