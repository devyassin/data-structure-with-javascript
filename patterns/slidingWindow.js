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

c(maxSubArraySum([4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15], 3));
