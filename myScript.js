// function countTrue(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === true) {
//         count++;
//       }
//     }
//     return count;
//   } //Create a function which returns the number of true values there are in an array
//   console.log(countTrue([true, false, false, true, false])); // Output: 2
// console.log(countTrue([false, false, false, false])); // Output: 0
// console.log(countTrue([])); // Output: 0

//   Write a function redundant that takes in a string str and returns a function that returns str.
// function redundant(str) {
//     return function() {
//       return str;
//     };
//   }

//   const f1 = redundant("apple");
// console.log(f1());

// const f2 = redundant("pear");
// console.log(f2());
// const f3 = redundant("");
// console.log(f3());

// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// function sevenBoom(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const digits = String(arr[i]).split("");
//     if (digits.includes("7")) {
//       return "Boom!";
//     }
//   }
//   return "there is no 7 in the array";
// }
// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
// console.log(sevenBoom([8, 6, 33, 100]));
// console.log(sevenBoom([2, 55, 60, 97, 86]));


// Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.
// function canConcatenate(smallerArrays, targetArray) {
//   const flattened = smallerArrays.flat();
//   flattened.sort();
//   targetArray.sort();

//   if (flattened.length !== targetArray.length) {
//     return false;
//   }

//   for (let i = 0; i < flattened.length; i++) {
//     if (flattened[i] !== targetArray[i]) {
//       return false;
//     }
//   }

//   return true;
// } 
// console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7])); 
// console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1])); 
// console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7])); 
// console.log(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7])); 
