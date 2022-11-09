// condition 

let lokasi = "jakarta" 
let student = "Randy"

// jika lokasi adalah batam dan student adalah randy maka jalankan console.log nya
// && AND menjadikan kedua/lebih kondisi harus terpenuhi
// || OR menjadikan salah satu kondisi harus terpenuhi
if(lokasi == "batam" && student == "Randy") {
    if(student == "Randy") {
        console.log("welcome to purwadhika batam randy");
    }
    else
    {
        console.log("welcome to purwadhika batam");
    }
}
// jika lokasi adalah jakarta atau student adalah budi maka jalankan console.lognya 
else if(lokasi == "jakarta" || student == "budi" ) {
    console.log("welcome to purwadhika jakarta");
}
else{
    console.log("let's join purwadhika ");
}





// falsy
let empStr = ""
let numberZero = 0
let Null = null
let Undefined = undefined
let nan = NaN
let boolFalse = false

// truthy
let blank = " "
let empArr = []
let empObj = {}
let numberOne = 1 
let stringOne = "1"
let stringZero = "0"
let stringFalse = "false"
let stringTrue = "true"
let boolTrue = true

if(!numberZero)
{
    console.log("true");
}
else
{
    console.log("false");
}

let kondisi = "else if"
//if
kondisi == "if" ? console.log("this is if") : 
//else if 1
( kondisi == "else if" ? console.log("this is else if") :
//else if 2
( kondisi == "else if 2 " ? console.log("this is else if 2 ") : 
//else
console.log("this is else")
));

//ternary operator 
console.log( blank === " " ? 
"blank is true"  //true statement
: 
"blank is false" //else statement 
);


//switch case
let day = ""
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
console.log(day);


//For Loop Statement
// 1. first statement is executed once before the task 
// 2. second statement is condition for the looping
// 3. third statement is executed after the condition

//step by step for loop 
//declare let i = 0
// check condition in second statement i < 3
// 

for (let i = 0; i < 3; i++) {
    console.log("this is for loop");
}

//While Loop Statement
let condition = true
while(condition) {
    console.log("this is while loop")
    condition = false
}

//do while loop statement
let number = 100
do {
console.log("this is do while");
number++;
} while(number < 105)

//break
let value = 1; 

while (true) {
    if(value > 5) break;

    value++;
    console.log("hello this is break");
}

//continue
value = 0
while (true) {
    value++;

    if(value == 2){
        continue;
    }

    
    if(value > 5) {
        break;
    }

    console.log(value);
}




