// Create a function to convert Excel sheet column title to its corresponding column number.
// Example : 
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// …
// Example : 
// Input : AB
// Output : 28

function funcExcelSheet(values) {
    
    values = values.toUpperCase();
      let out = 0
      for (let i = 0; i < values.length; i++) {
        out += (values.charCodeAt(pos) - 64) * Math.pow(26, values.length - i - 1);
      }
      return out;
  }

console.log(funcExcelSheet("ABC"))
// console.log(Math.pow(26,2));


// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Example 1:
// Input: nums = [2,2,1,3]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

functionSingleOne = (arr) => {
let temp = []
let prev = 0;
arr.sort()
//1,2,2
arr.map((val,idx) => {
if(!idx) {
prev = val;
temp.push(val)
console.log(prev);
console.log(temp);

}
else {
    console.log(prev);
if(prev == val) {
    console.log(val);

   if(temp.includes(val))
   {
    temp.pop()
   }
}
else
{
    temp.push(val)
    console.log(temp);
}
}
prev = val
})

console.log(temp);

return temp
}

console.log(functionSingleOne([3,1,1,4,2,2]))



// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

funcAnagram = (s,t) => {
console.log(s);
console.log(t);

s = s.split("").sort()
t = t.split("").sort()
console.log(s);
console.log(t);
let isAnagram = true
if(s.length != t.length)
{
    isAnagram = false
}
else {
    for (let i = 0; i < s.length; i++) {
        if(t[i] != s[i]) {
            isAnagram = false
            break;
        } 
    }
}


    return isAnagram
}

console.log(funcAnagram("obor","boro"));



// You are climbing a staircase. 
//It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

funCount = (number) => {
let temp1=1,temp2=1,temp3=0;   
text = `${number} number(s) of fibonnaci :  ${temp1}, ${temp2}`;
for(let i=2;i<number+1;++i)   
{    
 temp3=temp1+temp2;    
 text += `, ${temp3}`
 temp1=temp2;    
 temp2=temp3;    
}  
console.log(text);  

console.log(temp2);  
}

funCount(4)
// (1,1) (2)
// (1,1,1) (2,1) (1,2)
// (1,1,1,1) (2,1,1) (1,2,1) (1,1,2) (2,2)
