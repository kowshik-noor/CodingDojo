var big = [
    [67,34,45,56],
    [98,87,76,65],
    [56,67,78,89],
    [54,43,32,21]
];

var small = [
    [67,78],
    [43,32]
];

var anotherSmall = [
    [67,7],
    [43,32]
];


function matrixSearch (larger, smaller) {
// Insert Code Here
    // iterate through each array in the array
    for (let li = 0; li < larger.length; li ++) {
        for(let si = 0; si < larger[li].length; si++) {
            // if we approach two values that equal the first row of our small array, we move on to the next row and look for that index
            if (smaller[0][0] === larger[li][si] && smaller[0][1] === larger[li][si + 1]) {
                if (smaller[1][0] === larger[li + 1][si] && smaller[1][1] === larger[li + 1][si + 1]) {
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(matrixSearch(big, small)); //should output true
