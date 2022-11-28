function sum(a,b) {
    return a+b
}

function average(numbers){
    let sum = 0
    numbers.map((val) => 
    sum+=val)
    sum = sum/numbers.length
    return sum
}

const myMap = new Map();

myMap.set("halo", "01")
myMap.set("halo2", "02")


console.log(myMap);

module.exports = {sum, average}


