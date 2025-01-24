//WAP to make a simple calculator using js
let newCalc = 0;
do{
  let num1 = parseInt(prompt("Enter the 1st number: "));
  let num2 = parseInt(prompt("Enter the 2nd number: "));
  let opt = prompt("Enter operation (add, sub, mul, div, mod):");
  check(opt, num1, num2);
  let again = prompt("Want to do another calculation?? Enter Y/N");
  if(again === "Y" || again ==='y'){
    newCalc = true;
  } else{
    newCalc = false;
  }
}while(newCalc);

function check(opt, num1, num2){
  if(opt === "add"){
    console.log(`${num1}+${num2} = `+add(num1, num2));
  }else if(opt === "sub"){
    console.log(`${num1}-${num2} = `+sub(num1, num2));
  }else if(opt === "mul"){
    console.log(`${num1}*${num2} = `+mul(num1, num2));
  }else if(opt === "div"){
    console.log(`${num1}/${num2} = `+div(num1, num2));
  }else if(opt === "mod"){
    console.log(`${num1}%${num2} = `+mod(num1, num2));
  }else{
    opt = prompt("Operation does not match. Please enter one of the operations provided (add, sub, mul, div, mod):");
    check(opt, num1, num2);
  }
}

function add(n1,n2){
  return n1+n2;
}

function sub(n1,n2){
  return n1-n2;
}

function mul(n1,n2){
  return n1*n2;
}

function div(n1,n2){
  return n1/n2;
}

function mod(n1,n2){
  return n1%n2;
}