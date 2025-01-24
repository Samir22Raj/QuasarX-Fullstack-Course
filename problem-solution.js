// // Print "Hello, World!" to the console.
// console.log("Hello World");

// let num1 = 50;
// let num2 = 12;
// // Declare two variables and print their sum.
// console.log(num1 + num2);

// // Write a program to swap two numbers.
// console.log("num1 = "+num1+", num2 = "+num2);
// let num3 = num1;
// num1 = num2;
// num2 = num3;
// console.log("num1 = "+num1+", num2 = "+num2);

// // Check if a number is even or odd.
// if(num1 % 2 === 0){
//   console.log("The given number is even");
// } else {
//   console.log("The given number is odd");
// }

// // Find the largest of two numbers.
// if(num1 > num2){
//   console.log(num1 + " is the larger number.");
// } else {
//   console.log(num2 + " is the larger number.");
// }

// // Print numbers from 1 to 10 using a loop.
// for(let i = 1; i <= 10; i++){
//   console.log(i);
// }

// // Write a program to calculate the factorial of a number.
// let Fac = 1;
// for(let i = 1; i < num1; i++){
//   Fac = Fac * i;
// }
// console.log("The factorial of the number "+ num1 + " is "+ Fac);

// let s = "Javascript";
// // Reverse a given string.
// // s = "mom";
// let rev = s.split('').reverse().join('');
// console.log("Reverse of "+ s +" is "+ rev);

// // Count the number of vowels in a string.
// let vCount = 0;
// let low = s.toLowerCase();
// let arr = low.split('');
// for(let char in arr){
//   let val = arr[char];
//   if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u"){
//     vCount++;
//   }
// }
// console.log("The number of vowels in " + s +" is " + vCount);

// // Check if a string is a palindrome.
// if (s == rev){
//   console.log("The stings " + s + " is palindrome.");
// } else {
//   console.log("The stings " + s + " is not palindrome.");
// }

// // Convert Celsius to Fahrenheit.
// let degCel = parseInt(prompt("Enter celcius value to convert to fahrenheit: "));
// let degFah = (degCel * 1.8) + 32;
// console.log(`${degCel} degree Celcius = ${degFah} degree Fahrenheit`);

// // Convert kilometers to miles.
// let km =  parseInt(prompt("Enter Kilometers to convert into Miles: "));
// let miles = km*1.6;
// console.log(`${km} km = ${miles} miles`);

// // Generate a random number between 1 and 100.
// console.log("Random number between 1 an 100: "+Math.floor(Math.random()*100));

// let arr1 = [ 1,5,19,6,34,84,56,73];
// // Write a program to calculate the sum of numbers in an array.
// let arraySum = 0;
// for(let i=0; i<arr1.length; i++){
//   arraySum += arr1[i];
// }
// console.log(`Sum of array ${arr1} = ${arraySum}`);

// // Find the largest number in an array.
// let largestNum = arr1[0];
// for(let i=1; i<arr1.length; i++){
//   if(largestNum < arr1[i]){
//     largestNum = arr1[i];
//   }
// }
// console.log(`The largest number in ${arr1} is ${largestNum}`);

// // Write a program to sort an array in ascending order.
// let arrAsc = arr1.sort(function(a, b){return a - b});
// console.log(`${arrAsc}`);

// // Calculate the area of a circle (radius given as input).
// const PI = 3.14;
// let radius = parseInt(prompt("Enter the radius of the circle: "));
// let areaOfCircle = PI*radius**2;
// console.log(`The area of circle of raduis ${radius} is ${areaOfCircle}.`);

// // Write a program to print the multiplication table of a number.
// let number = parseInt(prompt("Enter a number for multiplication table: "));
// let equals;
// for(let i=1; i<=10;i++){
//   equals = number * i;
//   console.log(`${number} x ${i} = ${equals}`);
// }

// // Find the smallest number in an array.
// let smallestNum = arr1[0];
// for(let i=1; i<arr1.length; i++){
//   if(smallestNum > arr1[i]){
//     smallestNum = arr1[i];
//   }
// }
// console.log(`The smallest number in ${arr1} is ${smallestNum}`);

// Remove duplicates from an array.
// let arr2 = [5, 98, 32, 56, 5, 28, 90, 56];
// let arr3 = arr2;
// let dup = [];
// for(let i=0; i<arr2.length; i++){
//   for(let j=0; j<i; j++){
//     if(arr2[j] === arr2[i]){
//       dup.push(arr2[j]);
//       arr3 = arr3.toSpliced(j, 1);
//       console.log(arr3);
//     }
//   }
// }
// console.log(`The original aray is ${arr2}.`);
// console.log(`The array with duplicates removed is ${arr3}`);
// console.log(`The duplicates are ${dup}`);

// Check if an array contains a specific element.

// Write a program to calculate the power of a number (e.g., 
// 𝑎
// 𝑏
// a 
// b
//  ).
// Find the number of digits in a given number.
// Write a program to reverse the digits of a number.
// Write a program to find the greatest common divisor (GCD) of two numbers.
// Check if a number is a prime number.
// Write a program to find the sum of digits of a number.
// Write a program to count the number of words in a sentence.
// Convert a string to uppercase without using toUpperCase().
// Write a program to find the length of a string.