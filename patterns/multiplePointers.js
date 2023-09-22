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

//accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in

const areThereDuplicates = (...args) => {
  const sortedArgs = args.sort();
  let currentPointer = 0;
  let nextPointer = 1;

  while (nextPointer < sortedArgs.length) {
    if (sortedArgs[currentPointer] === sortedArgs[nextPointer]) {
      return true;
    }
    currentPointer++;
    nextPointer++;
  }
  return false;
};

//fast solution
const areThereDuplicatesTwo = (...args) => {
  return new Set(args).size !== args.length;
};

//Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.

const averagePair = (arr, num) => {
  const sortedArr = arr.sort();
  let right = sortedArr.length - 1;
  let left = 0;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === num) {
      return true;
    } else if (avg < num) {
      left++;
    } else if (avg > num) {
      right--;
    }
  }
  return false;
};

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
// -1,2,4,5,1,0,7
c(isSubsequence("hello", "hel hel world"));
