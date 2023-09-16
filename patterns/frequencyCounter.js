"use strict";

function c() {
  console.log.apply(console, arguments);
}

// this is the naive solution with time complexity O(n^2)
const sameOne = (arr1, arr2) => {
  for (const value of arr1) {
    const correctValue = arr2.indexOf(value * value);
    if (correctValue === -1) return false;
    arr2.splice(correctValue, 1);
  }
  return true;
};

// better solution with time complexity O(n) using Frequency Counter Pattern

const sameTwo = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = new Map();
  const frequencyCounter2 = new Map();

  for (const valueArr1 of arr1) {
    frequencyCounter1.set(
      valueArr1,
      (frequencyCounter1.get(valueArr1) || 0) + 1
    );
  }

  for (const valueArr2 of arr2) {
    frequencyCounter2.set(
      valueArr2,
      (frequencyCounter2.get(valueArr2) || 0) + 1
    );
  }

  for (const valueArr1 of arr1) {
    if (
      !frequencyCounter2.has(valueArr1 * valueArr1) ||
      frequencyCounter1.get(valueArr1) !==
        frequencyCounter2.get(valueArr1 * valueArr1)
    ) {
      return false;
    }
  }

  return true;
};

c(sameTwo([1, 2, 5, 3, 3], [1, 9, 25, 9, 4]));
// c(same([1, 2, 3, 3], [1, 9, 9, 4]));
