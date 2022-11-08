let text = "   hello world  "
          //012345678910
          //1234567891011
            // h = index 0  
// index => penomoran/urutan start from 0

console.log(text.slice(2,5))
console.log(text.substring(1,5));
console.log(text.substr(1,3));
console.log(text.replace("e","k"));
console.log(text.toLocaleLowerCase())
console.log(text.toLocaleUpperCase())
console.log(text.concat("abc"))
console.log(text.trim())
console.log(text.length)



const world = "world"
const hello = "hello"

const hello_world = hello +  " " + world + 
"\nenter"
const hello_world2 = `${hello} ${world} 
enter` 
console.log(hello_world);
console.log(hello_world2);

let angka = 10
let angka2 = "a"
let hasil = angka * angka2 //102
console.log(hasil);
console.log(angka);
console.log(typeof(angka));
angka =  angka.toString()
console.log(typeof(angka));

let bool = "false";
console.log(Boolean(bool));



let date = new Date;

console.log(date);


console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds()); 
console.log(date.getTime());


console.log(date.getDay());
console.log(Date.now());
console.log(Date.parse("January 21, 1996")); //month-name date, year

const d = new Date();
d.setDate(15);
d.setFullYear(2);


console.log(d);
console.log(d);

let counter = 3
counter++; //counter = counter + 1
counter--; // counter = counter - 1

counter+=2;

console.log(counter);

console.log(counter++); //postfix
console.log(counter);
console.log(++counter); //prefix
console.log(counter);

// comparison 
// == => equally ( value )
// === => equally (value and data type)
// != => not equally (value) 
// !== => not equally(value and data type)


// 1 == "1" => true
// 1 === "1" => false 