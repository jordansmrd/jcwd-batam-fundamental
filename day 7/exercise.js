// Create a function to check if two objects are equal 
let obj1 = { name : "jordan", age : 25} // 2keys / 2 props // name dan age
let obj2 = { name : "jordan2", age: 25}// 2 keys / 2 props // name dan age

// { }
//declare 2 objects
//create a function with 2 params
// kondisi dimana panjang keys object 1 == object 2 


const checkObj = (obj1,obj2) => {

if(Object.keys(obj1).length == Object.keys(obj2).length){
    for( let key in obj1)
    {
        // console.log(key);
        console.log(obj1[key]);
        console.log(obj2[key]);
        
        // console.log(obj1["name"]);
        // console.log(obj1.name);

       if(obj1[key] != obj2[key] ) {
        throw new Error("Objects are not Equal")
       }
    }
    console.log("Objects are Equal");
}
else {
    throw new Error("Objects are not Equal")
}

}

// checkObj(obj1,obj2)

// Create a function to get the intersection of two objects
// Example
// Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// Output: { a: 1 }

//create a function with 2 params (objects)
//declare variable mergeObj = {}

const intersectionObj = (obj1,obj2) => {
    let mergeObj = {};

        for( let key in obj1)
        {
            // console.log(key)
            // console.log(obj1[key])
            // console.log(obj2[key])
            
           if(obj1[key] == obj2[key] ) {
            mergeObj[key] = obj1[key]
            console.log(mergeObj[key]);
           }
        }  
        
        return mergeObj
    }
    
// let obj1 = { name : "jordan", age : 25} // 2keys / 2 props // name dan age
// let obj2 = { name : "jordan", age: 25}// 2 keys / 2 props // name dan age
    
    
console.log(intersectionObj(obj1,obj2))


// Create a function to merge two array of student data and remove duplicate data
// Student data : name & email
// Example : 
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
// { name: ‘Student 2’, email : ‘student2@mail.com’  }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]
// Result : 
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
// { name: ‘Student 2’, email : ‘student2@mail.com’  },
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]

const Array1 = [
{ name: "Student 1", email : "student1@mail.com"  }, 
{ name: "Student 2", email : "student2@mail.com"  },]


const Array2 = [
    { name: "Student 1", email : "student1@mail.com"  }, 
    { name: "Student 3", email : "student3@mail.com"  },]



const mergeArr = (arr1,arr2) => {
    let arr = [...arr1]
    console.log(arr);
    
    //looping array2 => bandingkan value mergeArray dengan value array2
        arr2.map((v) => {
    //gunakan method find.         
          !arr.find((val) => {
            //value dari mergeArray dibandingkan dengan value dari array2
              return val.name == v.name && val.email == v.email
            // apabila sama valuenya maka push value dari array2 ke mergeArray
            //apabila tidak sama maka null saja (tidak melakukan apa apa)  
            }) ?  arr.push(v) : null
            // console.log(check);        
        })
return arr
}

console.log(mergeArr(Array1, Array2));

// Create a function that can accept input as an array of objects and switch all values into property and property into value
// Example : 
// Input : [{ name: ‘David’, age: 20 }]
// Output : [{ David: ‘name’, 20: ‘age’}]


const arrObj = [{
    name: "david" , age: 20
},
{
    name: "john" , age: 23
}]

//create a function with 1 param (array)
//looping terhadap arraynya => supaya dapat mengakses value arraynya
//create newObj sebagai temporary obj yang menampung isi dari value yang dilooping array

// 1st loop . val = {name: "david" , age: 20}




const swtichKeyObj = (arr) => {
    arr.map((val,index) => {
        let newObj = {}
        for(let key in val) { 
            newObj =  {...newObj ,... {[val[key]] : key}} //isi object ditambah properties 
            
            console.log( { [val[key]] : key });

            arr[index] = newObj
        }
    })
    return arr
}

const obj = {  name : "jordan", 20 : "age",}
console.log(obj);

console.log(swtichKeyObj(arrObj));

// Create a function to find a factorial number using recursion
// let counter = 1  
// let text = ""

//input 5 
//output  1 x2 x3x 4x 5 = 120

//num = 5
//counter = 1 // 2 => 3 => 4 => 5 => 6
//factorial = 1 //1 => 2 => 6 => 24 => 120
//text = 5  → 1 x 2 x 3 x 4 x 5 = 120

const funcFactorial = (num,counter = 1,factorial =1, text = "") => {
    counter==1 ? text += `${num} →  ${counter}` : text += ` x ${counter}`
    factorial *= counter;  
    counter++;
    
    if(counter <= num) {
        return funcFactorial(num,counter,factorial,text)         
    }
    else
    {
        return `Factorial of ${text} = ${factorial}`  
    }

}

console.log( funcFactorial(5))



