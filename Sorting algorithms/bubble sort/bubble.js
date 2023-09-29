"use strict";

function c() {
  console.log.apply(console, arguments);
}

// bubble sort implementation

const bubbleSortArr = (arr) => {
  let temp = 0;

  while (temp < arr.length - 1) {
    for (let i = 0; i < arr.length - temp - 1; i++) {
      if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    temp++;
  }
  return arr;
};

// now bubble sorting with recursion

const bubbleSortArrRecursive = (arr, n) => {
  // base condition
  if (n === 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }

  return bubbleSortArrRecursive(arr, n - 1);
};

c(bubbleSortArrRecursive([5, 6, 2, 10, 4, 1, 8],7));
