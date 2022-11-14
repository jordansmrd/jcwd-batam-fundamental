

// Write a function to get the lowest, highest and average value in the array (with and without sort function).
const arrNumber = [10,9,7,20,13,15,20]

//output adalah value paling kecil
let l = 0;
let h = 0;
let s = 0;

// totalnilai / banyak angka


// for (let i = 0; i < arrNumber.length; ii++) {
    
// }

arrNumber.forEach((val,idx) => {
    if(idx == 0){
        l = val //10
        h = val//10
    }
    //13 
    if(l > val) {
        l = val // 7
    }
    else {
        h = val
    }

    // s = s + val;
    s+= val;


} )

console.log("nilai lowest adalah " + l);
console.log("nilai highest adalah " + h);
console.log("nilai avg adalah " + (s/arrNumber.length));



const funcLHA = (arr) => {
    let lowest = Math.min(...arr)
    let highest = Math.max(...arr)

    let sum = 0
    arr.map((val) => sum+= val)

    let avg = sum/arr.length


    return console.log(`lowest is ${lowest}, highest is ${highest}, and avg is ${avg.toFixed(2)}`);

}
funcLHA(arrNumber)

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
let arrStr = ["Toyota", "Ford", "Ferrari", "Porsche", "BMW", "Nissan"]
//str =  Toyota , Ford , Ferrari , Porsche , BMW and Nissan

const arrToStr = (arr) => {
    let str = ""
    arr.map((val,idx) => idx == arrStr.length-1? str+=  " and " + val : ( idx == 0? str+=  val : str+=  " , " + val)  )
  return console.log(str);
}

arrToStr(arrStr)

// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

const strToArr = (str) => {
    let arr = str.split(" ")
    return console.log(arr);
}

strToArr("Hello World")


// Write a function to calculate each element in the same position from two arrays of integer. 
//Assume both arrays are of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

let arr1 = [5,2,3]
let arr2 = [5,5,5]
const sum2Arrays = (arr1, arr2) => {
let newArr = []
arr1.forEach((val,index)=> {
let newVal = val + arr2[index]
newArr.push(newVal)
})
return newArr
}

console.log(sum2Arrays(arr1,arr2));

// Write a function that adds an element to the end of an array.
//  However, the element should only be added if it is not already in the array.

let arrElements = ["this", 1 , 2 ,"that"]
const addValArray = (arr,newVal) => {
let cek = arr.find((val) => val == newVal )
return cek?  "cant add! the same value is already in the array" : (arr.push(newVal) ) 
}

console.log(addValArray(arrElements,"this1"));
console.log(arrElements);



// Write a function to remove all odd numbers in an array 
// and return a new array that contains even numbers only

let arrNumber2 = [10,20,11,2,3,4,5]
const removeOdds = (arr) => {
return arr.filter((val) => val%2 == 0 ? val : null )
} 

console.log(removeOdds(arrNumber2))

//write html code with prompt and alert about parking system
//the first pop up will be a prompt to ask the user's vehicle
//the 2nd one is to ask the user about their plate number
//ask the user how long the vehicle is parked in hour and min . example = "12hour 53min"
//in the end the user need to pay the parking bill 
//car : first hour will be Rp.5000, the rest is Rp.4000
//motorcycle : first hour will be Rp.3000, the rest is Rp.2000
//prompt the vehicle type, plate number, duration , and total bill 
//if the user's money less than the bill, the payment prompt won't be gone
//show the alert after they successfully paid the bill. 

let strDuration = "3hour 53min"

const hour = strDuration.toLowerCase().replace("", " ").trim("").split(/[hourmin]/).join("").split(" ")
console.log(hour);
console.log(hour[0]);
console.log(hour[1]);




// Write a recursive function to get the lowest, highest, median and average value in the array (with and without sort function).
//without using Math function min/max and looping

arrNumber 
console.log(arrNumber.length);
let lowest = 0;
let highest = 0;
let avg = 0;
let sum = 0

const funcLHA2 = (idx) => {
    let length = arrNumber.length; //7
    !idx? idx = 0 : idx;
    lowest = idx== 0 ? arrNumber[idx] : (lowest< arrNumber[idx]? lowest : arrNumber[idx]) 
    // 1st index = 10
    // 2nd index = 9. 10 < 9 ? 9
    // 3rd index = 7 . 9 < 7 ? 7
    // 4th index = 20 . 7 < 20 ? 7 
    // 5th index = 13. 7 < 13? 7
    // 6th index = 15. 7 < 15? 7
    // 7th index = 20. 7 < 20? 7

    highest = idx== 0 ? arrNumber[idx] : (highest> arrNumber[idx]? highest : arrNumber[idx]) 
    // 1st index = 10 
    // 2nd index = 9. 10 > 9 ? 10
    // 3rd index = 7 . 10 > 7 ? 10
    // 4th index = 20 . 10 > 20 ? 20 
    // 5th index = 13. 20 > 13? 20
    // 6th index = 15. 20 > 15? 20
    // 7th index = 20. 20 >  20? 20



    //sum = 10 + 9 + 7 + 20 + 13 + 15 + 20

    // 1,2,3,4,5,6
    // 4 
    //3 dan 4 . 3+4/2

    sum += arrNumber[idx]
    idx++; //8
    //length 7  
    if(idx+1 <= length){
    funcLHA2(idx)
    }
    else
    {
        let med = length%2 == 0 ?  (arrNumber[(length/2)-1] + arrNumber[(length/2)]) /2 : arrNumber[Math.floor(length/2)]
        avg = (sum/length).toFixed(2)
        return  console.log( `lowest is ${lowest}, highest is ${highest}, avg is ${avg}, med is ${med}`)
    }
}

funcLHA2();

