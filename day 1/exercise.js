//rectangle
const Length = 10;
const Width = 20;

//circle
const radius = 30;

//triangle
const a = 20
const b = 50

//1 Write a code to find area of rectangle.

let Result = Width * Length
console.log("rectangle area is " + Result + " cm");

//2. Write a code to find perimeter of rectangle.

Result = 2 * (Width + Length)
console.log("rectangle perimeter is " + Result + " cm");

//3. Write a code to find diameter, circumference and area of a circle.

Result = 2 * radius
console.log("circle diameter is " + Result + " cm");

Result = (2 * Math.PI * radius)
console.log("circle circumference is " + Result + " cm");

Result = Math.PI * Math.pow(radius,2)
console.log("circle area is " + Result + " cm");

// 4. Write a code to find angles of triangle if two angles are given.
Result = 180 - a - b
console.log("angle of the triangle is " + Result );

//5 Write a code to get difference between dates in days.

let date1 = new Date("11/01/2022");
let date2 = new Date("11/08/2022");

let diffTime = date2.getTime() - date1.getTime()
console.log(diffTime)
console.log(date2-date1);
let diffDays = diffTime / (1000 * 60 * 60 * 24)
//mili sec to sec => 1000 
// sec to min => 60 
// min to hour => 60 
// hour to day => 24


console.log(`the difference between ${date2} and ${date1} is ${diffDays} days`);


//6. Write a code to convert days to years, months and days.
let totalDays = 400
years = Math.floor(totalDays / 365)
months = Math.floor(totalDays % 365 / 30)
days =  totalDays % 365 % 30


console.log(`${totalDays} days is  ${years} Year(s), ${months} Month(s) ${days} Day(s)`);

