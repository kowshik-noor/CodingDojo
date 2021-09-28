function binarySearchRecursive(arr, target) {
    let midpoint = Math.floor(arr.length / 2)
    let midpointVal = arr[midpoint]
    

    if (target === midpointVal) {
        return true;
    }

    if (target < midpointVal) {
        return binarySearchRecursive(arr.slice(0, midpoint), target)
    } else if (target > midpointVal) {
        return binarySearchRecursive(arr.slice(midpoint + 1), target)
    }
    
    return false;
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13], 10))
console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 9 ))
console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 16 ))
console.log(binarySearchRecursive([0, 2, 4, 6, 8, 12, 14, 16], 8 ))
console.log(binarySearchRecursive([8], 8 ))   