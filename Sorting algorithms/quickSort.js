"use strict";

function c() {
  console.log.apply(console, arguments);
}

// nice videos : https://www.youtube.com/watch?v=XE4VP_8Y0BU&t=0s  and  https://www.youtube.com/watch?v=P6XGSKO2RzI
// average and best case  time complixity : O(nlog)
// worst case time complixity : O(n*n)

/* this is my first attempt it work but this implementation may 
not be the most efficient for large datasets, as it creates new arrays at each recursive call */
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
