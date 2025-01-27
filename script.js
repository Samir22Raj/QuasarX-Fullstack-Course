// //Jan 17
// //fibonaci series 
// let a = 0;
// let b =1;
// let fib = 0;
// for (let i=0; i<20; i++){
//   console.log(fib);
//   a = b;
//   b = fib;
//   fib = a + b;
// }

// //WAP to find mid number among 3 numbers based on value
// let n1 = 20;
// let n2 = 82;
// let n3 = 63;

// if ((n1 > n2 && n1 < n3) || (n1 > n3 && n1 < n2)) {
//   console.log(n1 + " is the middle number");
// } else if ((n2 > n1 && n2 < n3) || (n2 > n3 && n2 < n1)) {
//   console.log(n2 + " is the middle number");
// } else {
//   console.log(n3 + " is the middle number");
// }

// //Jan 18
// //WAP to reverse a interger: i.e. reverse 9703 to 3079 
// let orgnum = 9703;
// let dub = orgnum;
// let revnum = 0;
// let lastDig;
// while(dub){
//   lastDig = dub % 10;
//   revnum = revnum*10 + lastDig;
//   dub = Math.floor(dub / 10);
//   console.log(lastDig);
//   console.log(dub);
// }
// console.log("The reverse of " + orgnum + " is " + revnum);

// // //print the sum of first n even numbers 
// let evenNum = 5;
// let sumOfEven = 0;
// let i = 1;
// let count = 0;
// while(count < evenNum){
//   if(i%2==0){
//     sumOfEven += i;
//     count++;
//   }
//   i++;
// }
// console.log("Sum of first " + evenNum + " even numbers is " + sumOfEven);

// //Random number generator game
// let random = Math.floor(Math.random()*100);
// let useTry = 0;
// let guessed = parseInt(prompt("Enter a number between 0 to 99: "));
// do{
//   useTry++;
//   if (guessed < random){
//       console.log("You guessed lower number, go higher");
//       guessed = parseInt(prompt("Enter a number between 0 to 99: "));
//     } else if(guessed > random){
//       console.log("You guessed higher number, go lower");
//       guessed = parseInt(prompt("Enter a number between 0 to 99: "));
//     }
// }while(guessed != random);
// console.log("Congratulations, you guessed correct number " + guessed + " in "+useTry+ " turns");

// //Jan 20
// //Find the sum of first 10 even numbers 
// a = 2;
// let sum = 0;
// for(let i = 0; i<10; i++){
//   sum = sum + a;
//   a = a + 2;
// }
// console.log("Sum of first 10 even numbers is " + sum);

// //Print the sum of first 5 prime numner 
// let sumP = 0;
// b = 2;
// let n = 0;
// while(n<5){
//   let fac = 0
//   for(let i = 1; i <= b; i++){
//     if(b % i == 0){
//       fac++;
//     }
//   }
//   if(fac == 2){
//     sumP = sumP + b;
//     n++;
//     console.log(b);
//   }
//   b++;
// }
// console.log("Sum of first 5 prime numbers is "+ sumP);

// //Check if number is even or odd using function
// let type;
// function checkOddEven(a){
//   if(a % 2 == 0){
//     type = "even";
//   }
//   else{
//     type = "odd";
//   }
//   return `The number ${a} is a ${type} number`;
// }

// function checkPrimeComposite(a){
//   let fac = 0
//   for(let i = 1; i <= a; i++){
//     if(a % i == 0){
//       fac++;
//     }
//   }
//   if(fac == 2){
//     type = "prime";
//   } else{
//     type = "composite"
//   }
//   return `The number ${a} is a ${type} number`;
// }

// let checkNum = parseInt(prompt("Enter a number: "));
// let call = prompt("Enter 'P' to check for Prime/Composite or Enter 'O' to check for Odd/Even for "+ checkNum);
// let result;
// while(true){
//   if(call.toUpperCase() === "P"){
//     alert(checkPrimeComposite(checkNum));
//     break;
//   } else if(call.toUpperCase() === "O"){
//     alert(checkOddEven(checkNum));
//     break;
//   } else {
//     let call = prompt("Enter 'P' to check for Prime/Composite or Enter 'O' to check for Odd/Even for "+ checkNum);
//   }
// }

//Jan 26
