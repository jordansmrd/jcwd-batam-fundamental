// //sync async

// //sync 
// console.log(1);
// console.log(2);
// console.log(3);

// //async
// console.log(1);
// setTimeout(() => console.log(2), 3000);
// console.log(3);



const tryPromise = new Promise((resolve, reject) => {
    let isError = false
    if(isError) reject("Error")
    else resolve("Success")
})

// tryPromise
// .then((res) => console.log(res))
// .catch((err) => console.log(err))
// .finally(()=> console.log("finally done"))

const asyncAwait = () => {
    console.log("satu");
 tryPromise
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally(()=> console.log("finally done"))
console.log("dua");

}

asyncAwait()

// const tryAndCatch = async () =>{
//     try {
//         let result = await tryPromise
//         console.log(result);
//     }
//     catch (error) {
//     console.log(error);
//     }
// }

// tryAndCatch()


// const tryThrow = () => {
//     try{
//     let isFalse = true;
//     if(isFalse) {
//         throw "there is an error"
//     }
//     console.log("Success");
//     // console.log("Success2");

//     }
//     catch (err) {
//     console.log(err);
//     }
// }

// tryThrow()

// // console.log("hello");


// const tryThrow2 = () => {
  
//     let isFalse = true;
//     if(isFalse) {
//         throw "there is an error"
//     }
//     console.log("Success");
   
//     console.log(err);

// }

// // tryThrow2()


// //json

// const json = '{ "student" :' +
//  '[ { "name" : "jordan", "age" : 26} , ' +
// '{ "name" : "edbert", "age" : 27}] }'

// const jsonObj = JSON.parse(json)
// console.log(json);
// console.log(jsonObj.student[0].name);


// const json2 = { student : [ { name : "jordan", age : 26} , { name : "edbert", age : 27}] }

// console.log(json2.toString());



// console.log(JSON.stringify(json2));


// const { myFunction, name2 } = require('./data')
//  console.log(name2);
//  myFunction()

// const dataset = require('./data.json')

// console.log(dataset);