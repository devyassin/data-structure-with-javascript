"use strict";

function c() {
  console.log.apply(console, arguments);
}

/*Write a function called binarySearch which accepts a sorted 
array and a value and returns the index at which the value exists. Otherwise, return -1.*/

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

// now with the recursive way
const binarySearchRecur = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  const helper = (target, start, end) => {
    // base case
    if (start > end) return -1;

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return helper(target, mid + 1, end);
    if (arr[mid] > target) return helper(target, start, mid - 1);
  };

  return helper(target, start, end);
};

// remember the time complexity is O(log(n)) example if we have 32 elements log(32)=5 because pow(2,5) is 32

// search string naive implementation
const searchString = (longerString, targetString) => {
  let counter = 0;
  for (let i = 0; i <= longerString.length - targetString.length; i++) {
    counter = 0;

    if (longerString[i] === targetString[0]) {
      for (let j = 0; j < targetString.length; j++) {
        if (longerString[i + j] !== targetString[j]) break;
        counter++;
      }
      if (counter === targetString.length) break;
    }
  }

  if (counter === targetString.length) return true;
  else return false;
};

//link of theory demonstration https://www.youtube.com/watch?v=mAqsI9Jw1RI
//KMP substring search  : time complexity O(m+n) with m length of longString and n length of targetString

const buildPrefixTable = (targetString) => {
  const table = [0];
  let i = 1; // the index of the pointer
  let lengthSuffix = 0; // the length of the repeated suffix prefix pair

  while (i < targetString.length) {
    // if the character at index i matches the character at index lengthSuffix
    if (targetString[i] === targetString[lengthSuffix]) {
      lengthSuffix++;
      table[i] = lengthSuffix;
      i++;
    }
    // if they didn't match and lengthSuffix>0
    else if (lengthSuffix > 0) {
      lengthSuffix = table[lengthSuffix - 1];
    } else {
      table[i] = 0;
      i++;
    }
  }

  return table;
};

const searchStringKmp = (string, subString) => {
  if (subString === "") return false;

  const prefixTable = buildPrefixTable(subString);

  let i = 0;
  let j = 0;
  while (i < string.length && j < subString.length) {
    if (string[i] === subString[j]) {
      i++;
      j++;
    } else if (j > 0) {
      j = prefixTable[j - 1];
    } else {
      i++;
    }
  }

  return j === subString.length ? true : false;
};

c(searchStringKmp("yassine lamouadden", "yassine lamouadden"));

/* As a web developer, you may consider using the Knuth-Morris-Pratt (KMP) algorithm for substring searching in scenarios where you need to perform efficient and fast substring search operations on strings. Here are some situations where using the KMP algorithm or other efficient substring search algorithms might be beneficial:

Large Texts: If you're dealing with large text data, such as searching for keywords or phrases in lengthy articles or documents, using a more efficient algorithm like KMP can significantly improve search performance compared to simple linear search methods.

Search Engines: If you're building a search engine or search functionality for a website, efficient substring search algorithms like KMP can help improve the speed of search queries, especially when dealing with a large corpus of documents.

Auto-Completion: Implementing auto-completion or suggestions in search bars or input fields can benefit from faster substring searching. KMP can help provide real-time suggestions as users type.

Text Editors: If you're developing a web-based text editor or code editor, efficient substring search algorithms can be essential for features like "Find" or "Find and Replace."

Data Processing: In web applications that involve text processing or data mining, substring searching can be a common operation. Using an efficient algorithm like KMP can speed up data processing tasks.

Pattern Matching: When dealing with pattern matching in strings, such as detecting specific patterns or regular expressions, the KMP algorithm can be useful in reducing the time complexity of the matching process. */
