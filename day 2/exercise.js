// Write a code to convert celsius to fahrenheit.
let celsius = 20;
let fahrenheit =  (celsius * 9/5) + 32 
console.log(`${celsius}°C is ${fahrenheit}°F `);

// Write a code to check whether the number is odd or even
let number = 5;
console.log( number % 2 == 0 ? `${number} is even` : `${number} is odd`)
// Write a code to check whether the number is prime number or not
let prime = true;
  if (number == 0 || number == 1)
    prime = false;

  for (let i = 2; i <= number / 2; ++i) {
    if (number % i == 0) {
      prime = false;
      break;
    }
  }
prime ? console.log( number +  " is a prime number." ) 
:
console.log( number + " is not a prime number." );

// Write a code to find the sum of the numbers 1 to N.
// Example : 5 → 1 + 2 + 3 + 4 + 5 = 15

let sum = 0;
let text = `${number} → `
for (let i = 1; i <= number; i++) {
    i == 1 ? text += ` ${i}` :
    text += ` + ${i}`
sum+= i;
}
console.log( text + " = " + sum);

// Write a code to find factorial of a number.
let factorial = 1;    
text = `${number} → `;
   for(let i=1;i<=number;i++){  
    i==1 ? text += ` ${i}` : text += ` x ${i}`  
    factorial=factorial * i;    
 }    
 console.log(`Factorial of ${text} = ${factorial}`);    

// Write a code to print the first N fibonacci numbers.
let temp1=0,temp2=1,temp3=0;   
number = 10;     
text = `${number} number(s) of fibonnaci :  ${temp1}, ${temp2}`;
for(let i=2;i<number;++i)   
{    
 temp3=temp1+temp2;    
 text += `, ${temp3}`
 temp1=temp2;    
 temp2=temp3;    
}  

console.log(text);  



text = ""
number = 15
for (let i = 1; i <= number; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    text += ` FuzzBuzz ` 
  } else if (i % 5 === 0) {
    text += ` Fuzz ` 
  } else if (i % 3 === 0) {
    text += ` Buzz ` 

  } else {
    text += `${i} ` 
    // console.log(i);
  }
}

console.log(text);

let berat = 72;
let tinggi = 1.74;
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

