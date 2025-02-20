// Create an array of five numbers and use a for...of loop to print each number. 
let arr = [5, 98, 54, 125, 435];
for(el of arr){
  console.log(el);
}

// Create an array of five strings and use a for...of loop to print each string in uppercase. 
let arr2 = ['Hello', 'apple', 'car', 'SamSung', 'Solo Leveling Manga'];
for(word of arr2){
  console.log(word.toUpperCase());
}

// Given an array [2, 4, 6, 8, 10], use a for...of loop to find the sum of all elements. 
arr = [2, 4, 6, 8, 10];
sumOfarr = 0;
for(el of arr){
  sumOfarr += el;
}
console.log(`Sum of all elements of array ${arr} = ${sumOfarr}`);

// Create an array of numbers and use a for...of loop to find the maximum number. 
arr = [60, 48, 97, 15, 67];
let greatestNum = arr[0];
for(el of arr){
  if(el > greatestNum){
    greatestNum = el;
  }
}
console.log(`Largest Number in the array ${arr} is ${greatestNum}`);

// Given an array of names, use a for...of loop to count how many names start with the letter "A". 
let names = ['John', 'Nikki', 'Abhi', 'Asim', 'Samir', 'Anushka'];
let numA = 0;
for(el of names){
  if(el[0]==='A'){
    numA++;
  }
}
console.log(`There are ${numA} names that start with 'A' in the array ${names}`);

// Write a function that takes an array of numbers and returns a new array with each number squared using a for...of loop. 
function square(arr){
  let squareArr = [];
  for(el of arr){
    squareArr.push(el**2);
  }
  return squareArr;
}

console.log(`The square of ${arr} is ${square(arr)}`);

// Given an array of words, return a new array containing only words with more than 4 letters using a for...of loop. 
function moreThanFour(words){
  let largerWords = [];
  for(word of words){
    if(word.length > 4){
      largerWords.push(word);
    }
  }
  return largerWords;
}

console.log(`The words with more than 4 letters in ${arr2} are ${moreThanFour(arr2)}`);

// Use a for...of loop to reverse the elements of an array without using.reverse(). 
function reverseArray(arr){
  for(el of arr){
    revArr.unshift(el);
  }
  return revArr;
}

let revArr = [];
console.log(`The reverse of ${arr} is ${reverseArray(arr)}`);

// Given an array of objects representing students {name: "John", score: 85}, use a for...of loop to find the average score. 
let students = [{name: "Samir",score: 85},{name: "Arjun",score: 32},{name: "Preeti", score: 71}];
let totalScore = 0;
let count = 0;
for(el of students){
  totalScore += el.score;
  count++;
}
let avgScore = totalScore/count;
console.log(`The average score of students is ${avgScore}.`);

// Given an array [1, 2, 3, 4, 5], use a for...of loop and the.push() method to create a new array with each element multiplied by 2.
arr = [1,2,3,4,5];
let sqrArr = [];
for(el of arr){
  sqrArr.push(el*2);
}
console.log(`The array ${arr} with all elements mutiplied by 2 is ${sqrArr}`);