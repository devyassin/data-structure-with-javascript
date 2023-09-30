"use strict";

function c() {
  console.log.apply(console, arguments);
}

// select sort implementation

const selectSortArr = (arr) => {
  let temp = 0;
  while (temp < arr.length - 1) {
    let currentMin = arr[temp];
    for (let i = temp; i < arr.length; i++) {
      if (currentMin > arr[i]) currentMin = arr[i];
    }

    const indexofMin = arr.indexOf(currentMin);
    [arr[temp], arr[indexofMin]] = [arr[indexofMin], arr[temp]];
    temp++;
  }
  return arr;
};

c(selectSortArr([5, 6, 2, 10, 0, 20, -1, 4, 1, 8]));
