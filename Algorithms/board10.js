
// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPLICATES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE RETURN THE SAME ARRAY

function removeDupe(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1)
                j = j - 1
            }
        }
    }
    return arr
}

// [3,2,1,4,3,3]

// function removeDupe(arr) {
//     return arr.filter((e) => {
//         if (arr.indexOf(e) === arr.lastIndexOf(e)) {
//             return e;
//         } else {
//             while (arr.indexOf(e) !== arr.lastIndexOf(e)) {
//                 arr.splice(arr.lastIndexOf(e), 1);
//             }
//             return e;
//         }
//     })
// }

console.log(removeDupe([6,6,6,6]));
