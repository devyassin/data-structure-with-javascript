"use strict";

function c() {
  console.log.apply(console, arguments);
}

const maxSubArraySum = (arr, num) => {
  if (arr.length < num) return null;

  let currentSum = 0;
  for (let i = 0; i < num; i++) {
    currentSum += arr[i];
  }

  let maxSum = currentSum;

  for (let i = num; i < arr.length; i++) {
    currentSum = currentSum - arr[i - num] + arr[i];
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};

/* This function should return the minimal length of a contiguous 
subarray of which the sum is greater than or equal to the integer passed to the function */

const minSubArrayLen = (arr, num) => {
  if (num < 0) return 0;
  for (const val of arr) {
    if (val < 0) return 0;
  }

  let minLength = Infinity;
  let tempSum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    tempSum += arr[right];
    while (tempSum >= num) {
      tempSum -= arr[left];
      minLength = Math.min(minLength, right - left + 1);
      left++;
    }
  }

  return minLength;
};

// accepts a string and returns the length of the longest substring with all distinct characters.

// c(findLongestSubstring("rithmschool"));
