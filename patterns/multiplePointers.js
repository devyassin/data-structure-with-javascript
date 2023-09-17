"use strict";

function c() {
  console.log.apply(console, arguments);
}

// using the frequency counter pattern

const sumZero = (arr) => {
  const frequencyCounter = new Map();

  for (const val of arr) {
    if (!frequencyCounter.has(val)) {
      frequencyCounter.set(val, val);
    }
  }

  for (const val of arr) {
    if (frequencyCounter.has(-val)) {
      return [val, -val];
    }
  }
};

// using the multiple pointers pattern

const sumZeroTwo = (arr) => {
  // Sort the input array
  arr.sort((a, b) => a - b);

  // Initialize two pointers
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }

  // If no such pair is found
  return undefined;
};

// calculate unique values using frequency counter pattern

const countUniqueValues = (arr) => {
  const frequencyCounter = new Map();
  for (const value of arr) {
    frequencyCounter.set(value, (frequencyCounter.get(value) || 0) + 1);
  }

  return frequencyCounter.size;
};

// calculate unique values using multiple pointer pattern

const countUniqueValuesTwo = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  const uniqueValues = new Map();
  while (left < right) {
    if (!uniqueValues.has(arr[left])) {
      uniqueValues.set(arr[left], 1);
    }
    if (!uniqueValues.has(arr[right])) {
      uniqueValues.set(arr[right], 1);
    }
    left++;
    right--;
  }
  return uniqueValues.size;
};

c(countUniqueValuesTwo([-1, 2, 1, 2, 2, 3, 3, 3, 5, 6]));
