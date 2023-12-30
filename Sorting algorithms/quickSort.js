"use strict";

function c() {
  console.log.apply(console, arguments);
}

// nice videos : https://www.youtube.com/watch?v=XE4VP_8Y0BU&t=0s  and  https://www.youtube.com/watch?v=P6XGSKO2RzI
// average and best case  time complixity : O(nlog) for example if we have an array of 16 elements we gonna decomposit it 4 times
// worst case time complixity : O(n*n) : example if an array is already sorted 

/* this is my first attempt it work but this implementation may 
not be the most efficient for large datasets, as it creates new arrays at each recursive call */
/**
 * Sorts an array using the quicksort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let leftPivotArr = [];
  let rightPivotArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      leftPivotArr.push(arr[i]);
    } else {
      rightPivotArr.push(arr[i]);
    }
  }

  return [...quickSort(leftPivotArr), pivot, ...quickSort(rightPivotArr)];
};

c(quickSort([7, 8, 7, 4, 10, 3, 5]));
// Test case 1: Empty array
c(quickSort([])); // []

// Test case 2: Array with one element
c(quickSort([5])); // [5]

// Test case 3: Array with multiple elements
c(quickSort([4, 2, 7, 1, 9])); // [1, 2, 4, 7, 9]

// Test case 4: Array with duplicate elements
c(quickSort([3, 6, 2, 1, 6, 4, 2])); // [1, 2, 2, 3, 4, 6, 6]

// Test case 5: Array with negative numbers
c(quickSort([-5, -2, -7, -1, -9])); // [-9, -7, -5, -2, -1]
