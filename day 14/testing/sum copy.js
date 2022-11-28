function sum2(a,b) {
    return a+b
}

function average2(numbers){
    let sum = 0
    numbers.map((val) => 
    sum+=val)
    sum = sum/numbers.length
    return sum
}

module.exports = {sum2, average2}