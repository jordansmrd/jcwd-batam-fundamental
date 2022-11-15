// Create a function to calculate array of student data

// The object has this following properties :
// Name → String
// Email → String
// Age → Number
// Score → Number

// Parameters : array of student

// Return values :
// Object with this following properties :
// Score
//  Highest
//  Lowest
//  Average

// Age
//  Highest
//  Lowest
//  Average

const arrStudent = []
const objStudent1 = {
    name : "Budi", 
    age : 17,
    Email: "budi@mail.com",
    score: 80
}
const objStudent2 = {
    name : "Udin", 
    age : 15,
    Email: "Udin@mail.com",
    score: 75
}
const objStudent3 = {
    name : "Sule", 
    age : 18,
    Email: "Sule@mail.com",
    score: 85
}

const score = {highest : 0, lowest : 0, average : 0}
const age = {highest : 0, lowest : 0, average : 0}

arrStudent.push(objStudent1,objStudent2,objStudent3)
console.log(arrStudent);

const funcScoreAvg = (arr = []) => {
let sumScore = 0;
let sumAge = 0;

arr.map((val,idx)=> {
if(!idx) {
    for(let key in score) {
        score[key] = val.score //highest = 80, lowest = 80, avg = 80
        age[key] = val.age //age = 17, lowest = 17, avg = 17
    }
} 
else
{
   score.lowest = score.lowest > val.score? val.score : score.lowest; // 75
   age.lowest = age.lowest > val.age? val.age : age.lowest; //15
   score.highest = score.highest < val.score? val.score : score.highest; // 80 => 85
   age.highest = age.highest < val.age? val.age : age.highest; //17 => 18
}
sumScore += val.score // 80 + 75 + 85
sumAge += val.age //17 + 15 + 18
})

score.average = (sumScore/arr.length).toFixed(2)
age.average = (sumAge/arr.length).toFixed(0)
}

funcScoreAvg(arrStudent)

console.log(score);
console.log(age);


// Create a program to create transaction

// Product Class
// Properties
//  Name
//  Price

// Transaction Class
// Properties
//  Total
//  Product
//     All product data
//     Qty

//     Add to cart method → Add product to transaction
// Show total method → Show total current transaction
// Checkout method → Finalize transaction, return transaction data


class Product {
    constructor(name,price) {
        this.Name = name;
        this.Price = price;
    }
}

class TransactionItem extends Product {
    // constructor(product,qty) {
    //     super(product.Name,product.Price)
    constructor({Name,Price},qty) {
        super(Name,Price);
        this.Qty = qty;
    }
}

class Transaction {
    constructor() {
        this.Total = 0
        this.Products = []
    }

    addtoTranscation(objItem) {
        if(!objItem instanceof TransactionItem || typeof(objItem) != "object") {
            throw new Error("invalid input")
        }
        this.Products.push(objItem)
        this.Total += (objItem.Qty * objItem.Price)
    }

    showTotalTransaction() {
        let text = ""
        this.Products.map((val,index)=> {
        text+= Number(index+1) + ". " + val.Name + " Qty " + val.Qty + " Price Rp." + val.Price.toLocaleString() + "\n" 
        })
        text += "Total Price Rp." + this.Total.toLocaleString()

        return text
    }
    checkOut(payment) {
        if(isNaN(payment)) {
            throw new Error ("invalid input")
        }
        let text = ""
        if(payment >= this.Total) {
          text = "Pembelian berhasil, kembalian anda adalah Rp." + Number(payment - this.Total).toLocaleString()
          this.Products.splice(0,this.Products.length)
        }
        else
        {
            text  = "Uang Anda Kurang"
        }

        return text;
    }
}
//add products
let product1 = new Product("Playstation 5", 9500000)
console.log(product1);

let product2 = new Product("XBOX ONE S", 9000000)
let product3 = new Product("Playstation Wallet Rp.500.000", 500000)
let product4 = new Product("VR For Playstation", 3500000)

//transactions
let trans1 = new TransactionItem(product1,3)
let trans2 = new TransactionItem(product2,4)


console.log(trans1);
console.log(trans2);

let trans = new Transaction()
console.log(trans);

//add transaction item
// trans.addtoTranscation("abc")
trans.addtoTranscation(trans1)
trans.addtoTranscation(trans2)
trans.addtoTranscation("")


console.log(trans);



console.log(trans.Products);
console.log(trans.showTotalTransaction());
console.log(trans.checkOut(70000000));












