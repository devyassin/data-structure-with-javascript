"use strict";

function c() {
  console.log.apply(console, arguments);
}

/*Write a function called binarySearch which accepts a sorted 
array and a value and returns the index at which the value exists. Otherwise, return -1.*/

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

// now with the recursive way
const binarySearchRecur = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  const helper = (target, start, end) => {
    // base case
    if (start > end) return -1;

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return helper(target, mid + 1, end);
    if (arr[mid] > target) return helper(target, start, mid - 1);
  };

  return helper(target, start, end);
};

// remember the time complexity is O(log(n)) example if we have 32 elements log(32)=5 because pow(2,5) is 32
c(binarySearchRecur([1, 2, 3, 4, 5], 3));
