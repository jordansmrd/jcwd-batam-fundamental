//array 
let arr = [];
let arr2 = new Array()

arr = ["hello", "this" , "is" , "purwadhika"]
arr2 = new Array("hello", "this" , "is" , "purwadhika")

console.log(arr[4]);

console.log(arr.length)

let bukusejarah = {
    nama_buku : "Buku Sejarah",
    price : 20000
}

const bukuIPA = {
    nama_buku : "Buku IPA",
    price : 30000,
    banyakHalaman : 500
}

let arrBooks = []
arrBooks.push(bukuIPA)
arrBooks.push(bukusejarah)


console.log(arrBooks);

for (let index = 0; index < arrBooks.length; index++) {
    console.log(arrBooks[index].nama_buku);    
}

bukuIPA.nama_buku = "Matematika"

bukuIPA.banyakHalaman = 300

console.log(bukuIPA.banyakHalaman);


console.log(bukusejarah.price);



let scores = [1,2,3,4,5]
let obj1 = {
    product: "buku ipa", 
    harga : 13000,
    stock: 10
}
let obj2 = {
    product: "buku ips", 
    harga : 11000,
    stock: 15
}

let arrObj = [ obj1, obj2]

console.log(arrObj);

//method array 
arr = ["hello", "this" , "is" , "purwadhika"]

console.log(arr);
console.log(arr.toString());

console.log(arr.join(" "));

console.log(arr.pop());
console.log(arr);

console.log(arr.shift());
console.log(arr);


console.log(arr.unshift("first"));
console.log(arr);


console.log(arr.length);

let exArr = ["new", "old"]
arr.push(exArr)
const newArr = arr.concat(exArr)
console.log(arr);

console.log(arr.splice(0,1)); //start from 1st index, end on 2nd index
console.log(arr);

console.log(arr.slice(0,2)); //start from 1st index, end on 1st value

arr = [ "this", "hello", "thankyou", "hello", 1, 4 , "1", "10", 20, "1A" , "10", "1a" , "Hello", "$", "!"]
arrNumber = [1,2,10,3,20]
console.log(arrNumber);
arrNumber.sort()
console.log(arrNumber);
console.log(arr.indexOf("hello"));

console.log(arr.lastIndexOf("hello"));
console.log(arr);
arr.sort()
console.log(arr);

console.log(arr.reverse());

//looping an array 

//value, index
const arr1 = ["welcome", "to" , "purwadhika", "purwadhika"]
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);    
}

let tempArr1 = arr1.forEach((val,idx) => {
    console.log(val);
    console.log(arr1[idx]);
})

console.log(tempArr1);

let tempArr2 = arr1.map((val,idx) => {
    //code block
    console.log(val);
    console.log(arr1[idx]);

    // if( val == "purwadhika"){
    //     return val;

    // }

    return "a"

})
console.log(tempArr2);


arr1.map((val,index)=> {
console.log(val + " " + index);

})

const arrTemp3 = arr1.filter((val,index)=> {
    console.log(val + " " + index);
   
    return val == "purwadhika"
})

//filtering object
const filterBooks = arrBooks.find((val) => {
    return val.nama_buku.toLowerCase() == "matematika" 
})
console.log(filterBooks);

console.log(arrTemp3);    
 
const temp4 =  arr1.find((val,index)=> {
        console.log(val + " " + index);
        return val == "purwadhika"
        })

 console.log(temp4);       


 let fruits = ["apple", "mango", "orange"]

 for (let fruit of fruits) {
    console.log(fruit);    
 }

console.log( fruits.map((val) => val ))
 
 let myName = ""
 function callMyName(name) {
    console.log(name);
 }

 function callMyName2(name) {
    return name;
 }
myName = callMyName2("jordan")
console.log(myName);

console.log(callMyName2("jordan"));


//function

function test() {

    return "hello";
}

function test2() {
    console.log("hello");

}

console.log(test());
console.log(test2());


//rest param

function myFunc(a,b,...c)
{
    console.log(a);
    console.log(b);
    console.log(c);
}

myFunc("str1", "str2", "str3" , "str4")

//nested param

function msg(name) {

    function sayHello() {
        return "hello"
    }

    
    function welcome() {
        return "welcome to purwadhika"
    }

    return sayHello() + " " + name + " " + welcome()
}
console.log( msg("jordan"))

//closure

function greetings(name) {
    const defaultMsg = "Hello " 

    return function () {
        return defaultMsg + name
    }
}
const jordan = greetings("jordan")
console.log( (greetings("david"))() );

// console.log((greetings("David"))());


//currying 
// function multiplier(factor, number) {
//     return number * factor
// }

// console.log(multiplier(2,2));

function multiplier(factor) {
    return function (number) {
        return number * factor

    }
}

console.log(  (multiplier(5))(3) );

//recursive 
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if(nextNumber > 0) {
        countDown(nextNumber);
    }
}

countDown(3)


//function expression
let square1 = function(number) {
    return number * number
}

//arrow function
let square2 = (number) => {
return number * number
}

let exArrF = (This,That) => {
  return  This + That
}

let mul = (number1,number2) =>  number1*number2 ; 



let mul2 = (number1,number2) => { 
    
    number1*number2 
}; 



console.log(mul(5,2));

console.log(exArrF("hehe","b"));

console.log(square1(2));
console.log(square2(3));



console.log(isFinite());
console.log(isNaN("f"));
console.log(parseFloat("3.2"));
console.log(parseInt("3.2"));





