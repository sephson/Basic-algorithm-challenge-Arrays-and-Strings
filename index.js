// //check if input arrays arrays are have common elements
// function findCommonElements(arr1, arr2, arr3) {
//   console.log(
//     arr1
//       .filter((value) => arr2.indexOf(value) !== -1)
//       .filter((value) => arr3.indexOf(value !== -1))
//   );
// }

// findCommonElements([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]);

// for (i = 0; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

let name = "oluwatoyin";
let otherNames = "disu";
let otherNames2 = "toyin";
const nameLength = name.length;

// console.log(name.slice(5));

const firstLetter = name[0];
const capFirst = firstLetter.toUpperCase();

// console.log(`${capFirst}${name.slice(1)}`);

// console.log(name[nameLength - 1]);
// console.log(name.indexOf("totin"));

// if (browserType.indexOf("mozilla") === -1) {
//   // do stuff with the string if the 'mozilla'
//   // substring is NOT contained within it
// }

// if (browserType.indexOf("mozilla") !== -1) {
//   // do stuff with the string if the 'mozilla'
//   // substring IS contained within it
// }

//function that outputs first letter as capON

// function capitaliseFirst(name) {
//   const firstLtr = name[0];
//   console.log(`${firstLtr.toUpperCase()}${name.slice(1)}`);
// }

// capitaliseFirst("sleeping");

// let greetings = [
//   "Happy Birthday!",
//   "Merry Christmas my love",
//   "A happy Christmas to all the family",
//   "You're all I want for Christmas",
//   "Get well soon",
// ];

// for (let i = 0; i < greetings.length; i++) {
//   if (greetings[i].indexOf("Christmas") === -1) {
//     console.log(greetings[i]);
//   }
//   } else {
//     console.log("ERRO");
//   }
// }

//fixing capitalisation

// function capitaliseInitials(str) {
//   const restOfTheWord = str.slice(1);
//   const initials = str[0];

//   const capInit = initials.toUpperCase();
//   const lowerCap = restOfTheWord.toLowerCase();

//   console.log(capInit + lowerCap);
// }

// capitaliseInitials("transGenDER");

// function reverseStr(str) {
//   let splitStr = str.split("");
//   let revStr = splitStr.reverse();
//   let newWord = revStr.join("");
//   console.log(newWord);
// }

// reverseStr("toyin");

//palindrome check

// function palindromeChecker(word) {
//   //reverse word
//   const splitWord = word.split("");
//   const revWord = splitWord.reverse();
//   const newWord = revWord.join("");

//   if (word === newWord) {
//     console.log("This is a palindrome");
//   } else {
//     console.log("This is not a palindrome ");
//   }
// }

// palindromeChecker("I let the cats out");

// function loopReverse(str) {
//   for (var i = str.length - 1; i >= 0; i--) {
//     var reverseStr = str[i];
//     console.log(reverseStr.split("").join(""));
//   }
// }

// loopReverse("Toyin");

// factorial(5);

// n = 12223345;

// const arr = Array.from(String(n), Number);
// console.log(typeof arr[0], arr);

// function factorialize(num) {
//   if (num === 0 || num === 1) return 1;
//   for (var i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   console.log(num);
// }
// factorialize(5);

// function factorial(num) {
//   if (num === 1 || num === 0) {
//     console.log(1);
//   } else {
//     for (let i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//   }

//   console.log(num);
// }

// factorial(5);

// num      var i = num - 1       num *= i         i--       i >= 1?
// 1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes
// 2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
// 3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes
// 4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no
// 5th iteration: 120               0                120
// End of the FOR loop

// reversing string with for loop
// let word = "";
// function reverseString(str) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     word = word + str[i];
//   }
//   console.log(word);
// }

// reverseString("Phone");

//find the longest word in a sentence
// let longest = 0;
// function longestWord(str) {
//   var splitStr = str.split(" ");

//   for (let i = 0; i < splitStr.length; i++) {
//     if (splitStr[i].length > longest) {
//       longest = splitStr[i].length;
//     }
//   }
//   console.log(longest);
// }

// longestWord("I love to dance");
// var ourArray = [];
// var i = 5;
// while (i >= 0) {
//   console.log(ourArray.push(i));

//   i--;
// }

// var arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// let longestWord = 0;

// function longest(str) {
//   let splitStr = str.split(" ");
//   for (i = 0; i < splitStr.length; i++) {
//     if (splitStr[i].length > longestWord) {
//       longestWord = splitStr[i].length;
//     }
//   }
//   console.log(longestWord);
// }

// longest("The ratio of Seventeen is new");
// let initLongest = 0;
// function longestArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > initLongest) {
//       initLongest = arr[i].length;
//     }
//   }

//   console.log(initLongest);
// }

// longestArr([
//   [1, 3, 4],
//   [2, 7, 10, 3],
//   [9, 6],
//   [2, 7, 10, 3, 6, 7],
// ]);

// const synonyms = ["fantastic", "wonderful", "great"];
// const greetings = [];

// //iterate through the synonyms array using a for loop, pushing a greeting string with the format.
// //have a [synonym] day into the greetings array.
// //use for loop to iterate through the grreetings

// for (let i = 0; i < synonyms.length; i++) {
//   greetings.push(`have a ${synonyms[i]} day`);
// }
// console.log(greetings);

// for (let i = 0; i < greetings.length; i++) {
//   console.log(greetings[i]);
// }

// let numbers = [1, 2, 3, 5, 6, 7, 8];

// numbers.splice(2, 3, "noise", "goal");

// console.log(numbers);

//fibonacci

// function fibonacciSeries(result, len) {
//   let num1 = result[0];
//   let num2 = result[1];
//   let nextNumber;
//   let i = 2;

//   while (i < len) {
//     nextNumber = num1 + num2;
//     num1 = num2;
//     num2 = nextNumber;
//     result.push(nextNumber);
//     i++;
//   }
//   console.log(result);
// }

// fibonacciSeries([0, 1], 10);
// let newW = "";
// function rStr(str) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     newW += str[i];
//   }
//   console.log(newW);
// }

// rStr("toyin");

// let output = [];
// function fibonacci(numOfTerms) {
//   if (numOfTerms === 1) {
//     output = [0];
//   } else if (numOfTerms === 2) {
//     output = [0, 1];
//   } else {
//     output = [0, 1];
//     for (let i = 2; i < numOfTerms; i++) {
//       output.push(output[output.length - 1] + output[output.length - 2]);
//     }
//   }
//   console.log(output);
// }

// fibonacci(6);

// let num = 1;
// function factorial(n) {
//   for (let i = 1; i <= n; i++) {
//     num = num * i;
//   }
//   console.log(num);
// }

// factorial(5);

// function fac(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num * fac(num - 1);
// }
// console.log(fac(5));

// function stringMatch(){

// }
// stringMatch()

// using reduce()
// function sumOfBiggerArrays(arr1, arr2) {
//   const reducer = (acc, curr) => acc + curr;

//   let arr1Sum = arr1.reduce(reducer);
//   let arr2Sum = arr2.reduce(reducer);

//   if (arr1Sum > arr2Sum) {
//     console.log(arr1Sum);
//   } else {
//     console.log(arr2Sum);
//   }
// }
// sumOfBiggerArrays([1, 2, 3], [4, 5, 7]);

// using loop
// let num1 = 0;
// let num2 = 0;
// function sumOfBiggerArrays(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     num1 += arr1[i];
//   }
//   for (let j = 0; j < arr2.length; j++) {
//     num2 += arr2[j];
//   }
//   if (num1 > num2) {
//     console.log(num1);
//   } else {
//     console.log(num2);
//   }
// }
// sumOfBiggerArrays([1, 2, 3], [2, 3, 4]);

// let newArr = [];
// function threeAndFiveMultiples(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 === 0 || arr[i] % 3 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
// }

// threeAndFiveMultiples([1, 2, 3, 5, 6, 7, 8, 9, 10]);

// using filter

// function threeAndFiveMultiples(arr) {
//   let newArr = [];
//   arr.filter((value) => {
//     if (value % 5 === 0 || value % 3 === 0) {
//       newArr.push(value);
//     }
//   });
//   console.log(newArr);
// }

// threeAndFiveMultiples([1, 2, 3, 5, 6, 7, 8, 9, 10]);

// function numberOfOccurrence(arr) {
//   count = {};

//   for (var i = 0; i < arr.length; i++) {
//     if (count.hasOwnProperty(arr[i])) {
//       count[arr[i]]++;
//     } else {
//       count[arr[i]] = 1;
//     }
//   }
//   console.log(count);
// }

// numberOfOccurrence(["toyin", "toyin", "disu", "disu", 20, 20, 20, 20]);

// function freqArray(arr, elem) {
//   var xxx = 0;
//   for (var i = 0; i < arr.length; i++) {
//     var num = arr[i];
//     if (num === elem) {
//       xxx++;
//     }
//   }
//   console.log(`${elem} occurs in the array ${xxx} times`);
// }

// freqArray([1, 2, 4, 5, 7, 9, 1, 4, 5, 7, 8, 91, 1, 6, 7, 1, 1, 2, 1, 3], 2);

// function higestValue(arr) {
//   var high = 0;

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] >= high) {
//       high = arr[i];
//     }
//   }

//   console.log(high);
// }

// higestValue(
//   [1, 2, 4, 5, 7, 9, 90, 99, 1, 4, 5, 7, 8, 91, 1, 6, 7, 1, 1, 2, 100, 1, 3],
//   2
// );

//check if input arrays arrays are have common elements
// function findCommonElements(arr1, arr2) {
//   console.log(arr1.filter((value) => arr2.indexOf(value) !== -1));
// }
// findCommonElements([1, 2, 4], [4, 1, 5]);

// function buildSubstrings(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length + 1; j++) {
//       var xxx = str.slice(i, j);
//       console.log(xxx);
//     }
//   }
// }

// buildSubstrings("toyin");

// function increment(arr, value) {
//   for (var i = 0; i < arr.length; i++) {
//     arr[i].val += value;
//   }
//   console.log(arr);
// }

// increment(
//   [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 }, { val: 6 }],
//   19
// );

// function missingNum(arr) {
//   var givenArr = [1, 2, 3, 4, 5, 6, 7];

//   for( var i=0; i<given.length; i++ ){

//   }

// missingNum([1, 2, 3]);

//check if input arrays arrays are have common elements
// function findCommonElements(arr1) {
//   var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   var arr3 = [];
//   arr1.filter((value) => {
//     if (arr2.indexOf(value) === -1) {
//       console.log(arr3.push(arr2));
//     }
//   });
// }

// findCommonElements([1, 2, 4]);
