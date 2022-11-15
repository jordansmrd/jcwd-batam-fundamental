//object 
let car = {
    brand : "BMW", 
    model : "440i",
    price : 1200000000
}

//creating an object 
let user = {}

let user2 = new Object();

// properties & methods
user = {
    name : "jordan", 
    greet : () => {
        console.log("hello!");
    },
    greet2 () {
        console.log("hello hello!");
    }
}

let person = {
    name : "frengky" ,
    age : 24
}

//change value
person.name = "jordan"
console.log(person);


delete person.age;
console.log(person);

//accessing value with dot 
console.log(person.name);

//accessing value with square bracket
console.log(person["name"]);

person.car = car;

console.log(person);

//accessing nested object
console.log(person.car.model);

console.log(person.car.year);

console.log(person.car?.year);

//accessing obj properties name with keys
console.log(Object.keys(person));

for(let key in person) {
    console.log(key);

    console.log(person[key]);
}

console.log(Object.keys(person).length);

//getter setter 
let newUser = {
    firstName : "John",
    lastName : "Mayer",

    
get fullName() { 
    return `${this.firstName}`
},

set fullName(values) {
    const spliitedValues = values.split(" ");
    this.firstName = spliitedValues[0]
    this.lastName = spliitedValues[1]

}
}

newUser.fullName = "Jordan S"
console.log(newUser);


//destructuring assignment

let a,b;
//array
[a,b] = [10,20]
console.log(a);
console.log(b);

//obj
let rectangle = { width : 10, height : 20 }
let {width} = rectangle

console.log(width);

//combine array with ...
const data1 = [1,2,3]
const data2 = [4,5,6]
const finalData = [data1,data2]
const finalData2 = [...data1,data2]
const finalData3 = [...data1,...data2]


console.log(finalData);
console.log(finalData2);
console.log(finalData3);

const obj1 = { name: "jordan" }
const obj2 = { age : 26}

const objFinal = {...obj1,...obj2}
console.log(objFinal);

//this
person2 = {
    firstName : "Jordan",
    LastName : "S",
    greet() {
        console.log(`welcome ${this.firstName}`);
    }
}

person2.greet()


//assign 
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);

//create
person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();

  console.log(me);

//entries
  const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

//freeze

const obj = {
    prop: 42
  };

  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);

//   Object.is()

const obj3 = {
    prop: 42
  };
  const obj4 = {
    prop: 42
  };
console.log(Object.is(3,3));
console.log(Object.is(3,"3"));
console.log(Object.is(obj3, obj4));
console.log(Object.is(obj3.prop, obj4.prop));



//class

class cUser {
name = "jordan";
greeting() {
    console.log("Hello World");
}
}

const cUser2 = class {
    greeting() {
        console.log("Hello World");
    } 
}

const User = new cUser();
User.greeting();
console.log(User.name);


class User2 { 
  name;
  #email;

  constructor(name,email) {
    this.name = name;
    this.#email = email
  }

  getEmail() {
    return this.#email;
  }
}


const u2 = new User2("Jordan", "jordan@mail.com");

console.log(u2);

console.log(u2.name);
console.log(u2.email);
console.log(u2.getEmail());

console.log(u2.getEmail());

const randomNum = Math.ceil(Math.random() * 100); 
console.log(randomNum);
class DB {
  static #connection = "";

  static #initializeConnection() {
    const randomNum = Math.ceil(Math.random() * 100); 
    this.#connection = `New Database Connection ${randomNum}`
  }

   static getConnection() {
    if(!this.#connection){
      this.#initializeConnection()
    }
       
    return this.#connection
  }
}

console.log(DB.getConnection())

//encapsulation

class Employee {
  constructor(){
    this.employeeName;
  }

  getEmployeeName(){
    return this.employeeName
  }

  setEmployeeName(newName){
    this.employeeName = newName;
  }
}

const e1 = new Employee();
e1.employeeName = "jordan"
console.log(e1);

e1.setEmployeeName("also jordan")
console.log(e1);  


class Employee2 {
  constructor(){
    this.employeeName;
  }

  getEmployeeName(){
    return this.employeeName
  }

  setEmployeeName(newName){
    if(typeof newName != "string" ) {
      throw new Error("value is not string")
    }
    this.employeeName = newName;
  }
}

const e3 = new Employee2()
e3.employeeName = 1;
console.log(e3.employeeName);

e3.setEmployeeName("jordan")
console.log(e3.employeeName);



//inheritance

class Product {
  constructor(){
    this.productName
    this.price
  }

  getProductName(){
    return this.productName
  }

  getPrice(){
    return this.price
  }

  setProductName(productName){
    this.productName = productName
  }

  setPrice(price){
    this.price = price
  }
}

class Book {
  constructor(){
    this.productName;
    this.price;
    this.author
  }
}

class Book2 extends Product {
  constructor(){
    super();
    this.author;
  }

  getAuthor(){
    return this.author
  }

  setAuthor(authorName){
    this.author = authorName
  }
}

const book = new Book2();
book.author = "J.K Rowling"
book.productName = "this is book"
book.price = 3000
console.log(book);

console.log(book instanceof Book2);
console.log(book instanceof Product);
console.log(book instanceof Book);

let code = Math.round(Math.random() * 1000).toString().padStart(6,"0")
console.log(code);

//class super

class User3 {
name;
#code;

constructor (codePrefix = ""){
const randomNumber = Math.round(Math.random() * 1000)
this.#code = `${codePrefix}${randomNumber.toString().padStart(6,"0")}`
}

getCode(){
return this.#code;
}
}

class Student extends User3{
constructor(){
  super("STD");
}
}

class Employee3 extends User3 {
  constructor(){
    super("EMP")
  }
}

const student = new Student();

console.log(student.getCode());

const employ = new Employee3();

console.log(employ.getCode());
