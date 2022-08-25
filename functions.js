/*
Programs in functions 
*/

// a. Print Odd numbers in an array

const arr=[1,2,3,4,5,6,7,8,9,10];

function isOdd(arr)
{
    console.log("a.Print odd numbers in array");
    arr.forEach(number => {
        if(number % 2 !== 0)
        {
            console.log(number);
        }
    });
}

isOdd(arr);
console.log("----------------------");

//Output: 1 3 5 7 9

//b. convert all the strings to title caps in a string array
function converttitleCase(Str)
{
    Str = Str.toLowerCase().split(" ");

    for(var i=0; i< Str.length; i++)
    {
        Str[i] = Str[i].charAt(0).toUpperCase() + Str[i].slice(1);
    
    }
    return Str.join(' ');   
    
}

console.log(converttitleCase("convert all the strings to title caps in a string array"));
console.log("----------------------");
//c.sum of all numbers in an array
function sumofnumbers(sumarr)
{
    var sum = 0; 
    for (var i=0; i< sumarr.length; i++)
    {
        sum += sumarr[i];
        
    }
    return sum;
}
console.log("c. Sum of Numbers: " + sumofnumbers([1,2,3,4,5]));
console.log("----------------------");

//d. Return all the prime numbers in an array

var d_Array = [1,4,8,23,45,56,72,69];
var primenumber = [];

function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var i = 0; i < d_Array.length; i++) {
  if (isPrime(d_Array[i])) {
    primenumber.push(d_Array[i])
  }
}

console.log("d. Prime Numbers in an Array: " + primenumber);
console.log("----------------------");

//e. Return all the polindroms numbers in an array
const e_array = ['Maheswari', 1344, 12321, 'did', 'cannot', 'level', 'masam'];

function isPalindrome(el)
{
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = e_array => {
   return e_array.filter(el => isPalindrome(el));
  
};
console.log("e.Return Polindroms in an array:"+findPalindrome(e_array));
console.log("----------------------");

//f. Return median of two sorted arrays of the same size
function FindMedian(f_array1,f_array2)
{
    var i=0;
    var j=0;
    var count;
    var m1=-1, m2=-1;
    var n = f_array1.length;

    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = f_array2[0];
            break;
        }
  
        else if (j == n)
        {
            m1 = m2;
            m2 = f_array1[0];
            break;
        }

        if (f_array1[i] <= f_array2[j])
        {
            m1 = m2;             
            m2 = f_array1[i];
            i++;
        }
        else
        {
            m1 = m2;             
            m2 = f_array2[j];
            j++;
        }
    }
  
    return (m1 + m2)/2;
}

var f_array1 = [1,2,9];
var f_array2 = [3,4,7];

var l1 = f_array1.length;
var l2 = f_array2.length;

if(l1 = l2)
console.log("e. Median of two sorted array is: " + FindMedian(f_array1,f_array2));

//g. Remove duplicates from an array
function remove_dups(g_array)
{
    return g_array.filter((item,index) => g_array.indexOf(item) === index);
}


var g_array = ['z','abc','bc','1','1','2','abc','2','2'];
console.log(remove_dups(g_array));

//h. Rotate an array by k times
var h_array = [4,6,9,1,2,3];
var k = 3;

console.log(rotateKtimes(h_array,k));

function rotateKtimes(g_array,k)
{
    var shiftarray = g_array.splice(g_array.length-k);
    for(var i=0; i< shiftarray.length;i++)
    {
        g_array.splice(i,0,shiftarray[i]);
    }
    return g_array;
}