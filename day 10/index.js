//psuedocode 
// store palindrome in variable
// create array of alphabet
// split palindrome letters into array
// filter palindrome array
//     allow  letter if letter is an alphabet 
// join palindrome array

// create variable reverse of splitted palindrome 
// Reverse the array of reverse and then join them 
// create variable isPalindrome set value to false
// if the variable reverse equals to variable palindrome 
// if both variable are equal then set isPalindrome to true


let palindrome = "kakak! kakak 213213231@#@##@#"

const arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("")

palindrome = palindrome.split("")
palindrome = palindrome.filter((letter) => arrAlpha.includes(letter))
palindrome = palindrome.join("")
reverse = palindrome.split("").reverse().join("")
let isPalindrome = false
if(palindrome == reverse ) isPalindrome = true
console.log(palindrome);
console.log(reverse);


console.log(isPalindrome);

//check duplicate 
//brute force

function checkDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j]) return true            
        }
    }

    return false
}

console.log(checkDuplicate([1,2,3,1]));


//optimize with extra memory 
function checkDuplicate2(arr) {
    const uniqueData = new Set()
    for (let i = 0; i < arr.length; i++) {
       if(uniqueData.has(arr[i])) return true
       else uniqueData.add(arr[i])
    }
    return false
}

console.log(checkDuplicate2([1,2,3,1]));


//optimize without extra memory

function checkDuplicate3(arr) {
    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) return true
    }
    return false
}

console.log(checkDuplicate3([1,2,3,1]));




//linear search
function search(arr,x) {
    let i;
    for (i= 0;i < arr.length ; i++) {       
        if(arr[i] == x) {
        return i
        }
    }

    return -1;
}

console.log(search([2,20,10,3],20));


//binary search

function binarySearch2(arr, val) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === val) {
        return mid;
      }
  
      if (val < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }

  let arr3 = [2,20,1,3,5,6,30,25].sort()
  console.log(arr3);
console.log(binarySearch2(arr3,25));



//bubble sort 

function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr.length -i - 1);
        for (let j = 0; j < arr.length - i - 1; j++) {
           if (arr[j+1] < arr[j]) {
            console.log(arr[j+1]);
            console.log(arr[j]);

            console.log([arr[j],arr[j+1]]  );
            console.log([arr[j+1],arr[j]]);
           
            [arr[j+1],arr[j]] = [arr[j],arr[j+1]]  
           }  
        }
    }
    return arr;
}


console.log([5,3,8,4,6].sort());

console.log(bubbleSort([5,3,8,4,6]));


//selection sort 
function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

let arr2 = [29,72,98,13,87,66,52,51,36]
console.log(selectionSort(arr2));