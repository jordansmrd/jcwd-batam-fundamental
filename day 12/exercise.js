// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = (arr) => {
    console.log(arr);
arr.sort();
console.log(arr);

let prev = 0
let temp2 = []
let count = 0
let show = 0
arr.map((val) => {

    if(prev != val) {
        temp2.splice(0,temp2.length)
    }
    //prev = 2
    //1 
    //temp = [2,2,2]

    temp2.push(val)

    //count = 4
    // show = 1

    if(count < temp2.length) {
        count = temp2.length
        show = prev
    }

    prev = val


})
console.log(temp2);


return show
}

let arr = [1,1,2,2,2,1,1,3,3,3,3,3,3]

console.log(majorityElement(arr))


// Create a function to convert roman numeral to integer.
// Example 1:
// Input: s = "III”
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const romanConverter = (roman) => {
let number = 0 ;
let prev = 0
roman = roman.toUpperCase().split("")
console.log(roman);
roman.forEach((val) => {
let current =0

if(val == "I") {
    current++ //1
}
else if(val == "V") {
    current+=5 //5

}
else if(val == "X") {
    current+=10 //10

}
else if(val == "L") {
    current+=50 //50

}
else if(val == "C") {
    current+=100 //100

}
else if(val == "D") {
    current+=500 //500
}
else if(val == "M") {
    current+=1000 //1000
}
//prev = 1 . current = 5 
// 1 - 1 *2 + 5
//number = 1 
if(current > prev) {
number = number - prev*2 + current
console.log(number);
}
else{
    number += current
}

prev = current

})

return number

}
//IV

console.log(romanConverter("IV")) 




// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown →
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]

function pascalTriangle(numRows) {
    let result = [];
    if (numRows == 0){ 
        //do nothing
    }
    else if (numRows == 1)
    {
        result.push([1]) 
    }
    else 
    {
        for (let i = 1; i <= numRows; i++) 
        {
            let arr = [];
            for (let j = 0; j < i; j++) 
            {
                //j = 2
                // 1 != 1 
                console.log(i-1);
               
                if (j === 0 || j == i - 1) 
                {
                    // console.log(j);
                    // console.log(i-1);
                    arr.push(1);
                    console.log(arr);

                }
                else {
                  
                    arr.push((result[i-2][j-1] + result[i-2][j]));
                }
            }
            console.log(arr);
        result.push(arr);
        }
    }
    console.log(result[2][1]);
    console.log(result[2][2]);
    return result 
}

console.log(pascalTriangle(4));

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.



function profit(arr) {
    let maxSoFar = 0;
    let maxEndingHere = 0;
    let minPrice = arr[0];
    console.log(arr);
       
    arr.forEach((val) => {
      maxEndingHere = Math.max(0, val - minPrice);
      console.log(maxEndingHere);

      minPrice = Math.min(minPrice, val);
      console.log(minPrice);

      maxSoFar = Math.max(maxEndingHere, maxSoFar);
      console.log(maxSoFar);
    })

    if (maxSoFar <= 0) return 0;
    return maxSoFar;
   
  }


console.log(profit([7,1,5,3,6,4]))
// console.log(profit([5,4,20,2,9]))

// profit([7,6,5,3,2,1])
