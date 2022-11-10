// Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output : 
// 9 x 1
// 9 x 2
// …
// 9 x 10

let number = 9 

for (let index = 1; index <= 10; index++) {
    console.log(`${number} x ${index} = ${number * index }`);
}


// Write a code to check whether a string is a palindrome or not.
let str = "race car"
let Reverse = str.replace(/ /g ,"").toLowerCase().split("").reverse().join("");
console.log(str.replace(/ /g ,"").toLocaleLowerCase().split("").reverse().join(""));
console.log(Reverse == str.replace(/ /g ,"").toLocaleLowerCase());


// Write a code to convert centimeter to kilometer.
let cm = 100000
let km = cm /100000;
console.log(`${cm} cm is ${km} km `);

// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
number = 10000000000;
console.log(number.toLocaleString().replace(/,/g,"."));
let strNumber = number.toLocaleString().replace(/,/g,".") + ",00"
console.log(`Rp. ${strNumber}`);

// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”
str = "Hello world"

console.log(str.replace(/e/g, ""))

// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World”
str = "  hello world  " 
let arrStr = str.trim().split(" ");
console.log(arrStr);
let res = ""
// console.log(str.trim().split(" "))
for (let i = 0; i < arrStr.length; i++) {
    console.log( arrStr[i]);
    console.log( arrStr[i].substring(1));

    console.log( arrStr[i].charAt(0).toUpperCase());
  res +=  arrStr[i].charAt(0).toUpperCase() + arrStr[i].substring(1) + " "
}
// res = res.trim()
console.log(res);

// Write a code to reverse a string.
str = "gudang"
let reverse = str.split("").reverse().join("")
console.log(`${str} reverse to ${reverse}`);
