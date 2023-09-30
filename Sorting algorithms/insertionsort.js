"use strict";

function c() {
  console.log.apply(console, arguments);
}

// insertion sort implementation / the time complexity is O(n*n)
// this algorithm work good if the data is comming in
// demonstration video : https://www.youtube.com/watch?v=8mJ-OhcfpYg

const selectInsertArr = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
  return arr;
};

c(selectInsertArr([5, 6, 2, 80, 10, 0, 20, -1, 4, 1, 8]));
