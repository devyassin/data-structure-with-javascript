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

// hard problems recursion
//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// first attempt
const reverse = (str) => {
  const strArray = str.split("");
  const result = [];
  let counter = 1;
  const helper = () => {
    if (strArray.length === result.length) return;
    result.push(strArray[strArray.length - counter]);
    counter++;
    helper();
  };
  helper();
  return result.join("");
};

// second attempt

const reverseTwo = (str) => {
  // base case
  if (str === "") return "";
  return reverse(str.substr(1)) + str[0];
};

/*Write a recursive function called isPalindrome which returns true if the string passed to 
it is a palindrome (reads the same forward and backward). Otherwise it returns false.*/

// first attempt
const isPalindrome = (str) => {
  let counter = 1;
  const helper = (helperInput) => {
    if (str.length === counter) return true;
    if (helperInput !== str[counter - 1]) return false;
    counter++;
    return helper(str[str.length - counter]);
  };

  return helper(str[str.length - 1]);
};

// second attempt

const isPalindromeTwo = (str) => {
  // base case
  if (str.length === 0) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindromeTwo(str.slice(1, -1));
};

/* Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false */

const someRecursive = (arr, callback) => {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
};

/*Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened. */

// the normal way and we can also use the flat method
const flatten = (arrOfArr) => {
  return arrOfArr
    .join("")
    .split(",")
    .map((value) => parseInt(value));
};

// the recursive way for junior developers

const flattenJun = (arr) => {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    //we check if the value is an array
    if (Array.isArray(arr[i])) {
      let flatten = flattenJun(arr[i]);
      newArray = newArray.concat(flatten);
    } else {
      // if the value is a number
      newArray.push(arr[i]);
    }
  }

  return newArray;
};

// the recursive way for sunior developers

const flattenSen = (arr) => {
  let newArray = [];
  arr.forEach((el) =>
    Array.isArray(el)
      ? (newArray = newArray.concat(flattenSen(el)))
      : newArray.push(el)
  );
  return newArray;
};

c(flattenSen([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
