// Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02  03
// 04  05  06
// 07  08  09  10

// Parameters : height → triangle height

let res = "";
let height = 4
let counter = 1;
for (let i = 1; i <= height; i++) {
  for (let j = 1; j <= i; j++) {
    if (counter <= 9) {
      res += `0${counter} `;
      counter++;
    } else {
      res += `${counter} `;
      counter++;
    }
  }
  res += "\n";
}
console.log(res);


// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping

let fizzBuzz = 15;

for (let i = 1; i <= fizzBuzz; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}



// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”

let berat = 58;
let tinggi = 1.62;
let result = berat / tinggi ** 2;

let notif = `Massa ${berat} kg & tinggi ${tinggi} m \n`;

if (result < 18.5) {
  notif += `BMI = ${result}, BERAT BADAN ANDA KURANG!`;
} else if (result >= 18.5 && result <= 24.9) {
  notif += `BMI = ${result}, BERAT BADAN ANDA IDEAL!`;
} else if (result >= 25.0 && result <= 29.9) {
  notif += `BMI = ${res}, BERAT BADAN ANDA BERLEBIH!`;
} else if (result >= 30.0 && result <= 39.9) {
  notif += `BMI = ${result}, BERAT BADAN ANDA SANGAT BERLEBIH!`;
} else {
  notif += `BMI = ${result}, BERAT BADAN ANDA OBESITAS!`;
}

console.log(notif);



// Write a function to remove all odd numbers in an array and return a new
//  array that contains even numbers only

arrNumber = [1,2,3,4,5,6,7,8,9,10,11,12]

console.log(arrNumber.filter((val)=> val%2 ==0  ));



// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

let str = "Hello World"
let arrStr = str.split(" ")
console.log(arrStr);
