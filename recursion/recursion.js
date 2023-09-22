"use strict";

function c() {
  console.log.apply(console, arguments);
}

const countDown = (num) => {
  if (num < 0) return;
  c(num);

  countDown(num - 1);
};

const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

const factoriel = (num) => {
  if (num === 1) return 1;
  return num * factoriel(num - 1);
};

// helper method recursion pattern

const collectOddValues = (arr) => {
  let result = [];

  // the recursive function
  const helper = (helperInput) => {
    // base case
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

    helper(helperInput.slice(1));
  };

  helper(arr); // we call the function
  return result;
};

const power = (num, puissance) => {
  if (puissance === 0) return 1;
  return num * power(num, puissance - 1);
};

const productOfArray = (arr) => {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};

// hard way
const fib = (num) => {
  let counter = 1;
  let result = [0, 1];
  // the recursive function
  const helper = (helperInput) => {
    // base case
    if (counter === num) return helperInput;
    result.push(helperInput);
    counter++;
    return 0 + helper(result[counter - 1] + result[counter]);
  };

  helper(1); // we call the function
  return result[result.length - 1];
};

// easy way

const fibTwo = (num) => {
  if (num <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

c(fib(28));
