function balanceIndex(arr) {
    let i, j
    let sum1=0, sum2=0
    for (i = 0, j = arr.length; i < arr.length; i++, j--) {
        sum1 += arr[i]
        sum2 += arr[j]
        if (sum1 === sum2) {
        }
    }
}

// console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
// console.log(balanceIndex([9,9])) // FALSE
// console.log(balanceIndex([4,2,2,6])) // TRUE
// console.log(balanceIndex([9,1,9])) // TRUE
// console.log(balanceIndex([1,8,1,2,3,4])) // TRUE