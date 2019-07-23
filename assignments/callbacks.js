// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(items.length);
}

getLength(items, (length) => {
  console.log(length);
});


/***********************     */
// last passes the last item of the array into the callback.
function last(arr, cb) {
  return cb(items[items.length -1]);
}

last(items, (last) => {
  console.log(last);
});

/***********************     */
// sumNums adds two numbers (x, y) and passes the result to the callback. 
function sumNums(x, y, cb) { 
  const add = x + y;
  return cb(add);
}

sumNums(40, 600, (add) => {
  console.log(add)
});


/***********************     */
// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  const multiply = x * y;
  console.log(multiply);
}

multiplyNums(20, 40, (multiply) => {
  console.log(multiply);
});

/***********************     */
// A function that checks if something is in an array (results in a boolean)

// contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

const nums = [1, 2, 3, 4, 5];

const contains = (item, list, cb) => {
  return cb(item.some((listItem) => list === listItem));
}   

contains(nums, nums.length, (cb) => {
  console.log(cb);
});



/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
// removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
const arr = ['😀', '😀', '😃', 1, 1, 3, 3];

const newArray = arr.filter((item, index) => arr.indexOf(item) !== index);

console.log(newArray);
