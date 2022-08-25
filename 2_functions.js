/*
2. Programs in functions 
*/

// a. Print Odd numbers in an array

const arr=[1,2,3,4,5,6,7,8,9,10];
const isOdd = arr.filter(number => 
    {
    return number % 2 != 0 ;
});
console.log("a.Print odd numbers in array: ");
console.log(isOdd);
console.log("----------------------");

//b. convert all the strings to title caps in a string array
const str = "convert all the strings to title caps in a string array";

const converttitleCase = str.split(' ')
            .map(str1 => str1[0].toUpperCase() + str1.substring(1).toLowerCase())
            .join(' ');

console.log(converttitleCase);
console.log("----------------------");

//c.sum of all numbers in an array

const sumofnumbers = [1,2,3,4,5].reduce((a, b) => a + b, 0);
console.log("c. Sum of Numbers: " + sumofnumbers);

console.log("----------------------");

//d. Return all the prime numbers in an array

var d_Array = [1,4,8,23,45,56,72,69];
const PrimeNoArray = d_Array.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num;
  });
console.log("d. Prime Numbers in an Array: " + PrimeNoArray);
console.log("----------------------");

//e. Return all the polindroms numbers in an array
//const e_array = ['Maheswari', 1344, 12321, 'did', 'cannot', 'level', 'masam'];

const findPalindrome = (words) => words.filter((word) => word.split('').reverse().join("") === word);

console.log("e. Return Polindroms in an array:" + findPalindrome(['Maheswari', 'did', 'cannot', 'level', 'masam']));
console.log("----------------------");
