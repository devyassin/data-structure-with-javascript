"use strict";

function c() {
  console.log.apply(console, arguments);
}

// spliting and merging
// time complexity O(nlog(n)) . the log(n) is when we split exaple if we have an array of 8 elements we gonna need 3 steps . pow(2,3)=8
// using more space
// demonstration video https://www.youtube.com/watch?v=3j0SWDX4AtU
const merge = (leftArr, rightArr) => {
  const sortedArr = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    } 
  }

  return [...sortedArr, ...leftArr, ...rightArr];
};

const mergeSort = (arr) => {
  // deviding the array  
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};
c(mergeSort([5, 6, 2, 80, 10, 0, 20, -1, 4, 1, 8]));
