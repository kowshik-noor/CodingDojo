// this was my attempt at making a quicksort algo (which doesn't work)
/* // a prototype function to swap values in our array given two indices
Array.prototype.swap = function(a, b) {
    // set up a temporary variable for our first value
    let temp = this[a];
    // the value of our first index will be the value of our second index
    this[a] = this[b];
    // the value of our second index will be the temp variable
    this[b] = temp;
}

function partition(arr, low, high) {
    // our pivot will be the value of the lowest index of the array
    let pivot = arr[low];
    // our left side will be the lowest index of the array
    let left = low;

    // traverse through the array
    for(let i = low + 1; i <= high; i++) {
        // if we find a value that is lower than out pivot, we place it on the left side by swaping it with 'left'
        if (arr[i] < pivot) {
            arr.swap(i, left)
            left++
            console.log(arr)
        } else if (arr[i] === pivot) {
            // this will run after we misplaced the pivot in the wrong index
            arr.swap(left, i)
            // return the index of our pivot point
            return left;
        }
    }
}

function quicksort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivotPoint = partition(arr, low, high);
        // sort out the left of the array
        quicksort(arr, low, pivotPoint - 1)
        // sort out the right of the array
        quicksort(arr, pivotPoint + 1, high)
    }
} */

// I copied and pasted code from guru99.com just to see how it's supposed to work.
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left = 0, right = items.length - 1) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

let list = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9]
quickSort(list)
console.log(list)