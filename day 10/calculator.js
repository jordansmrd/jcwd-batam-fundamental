class Calculator {
    #input = ""
    #history = []
    #res = 0

    get values(){
        return this.#input
    }

    set values(values){
        //5 x 10 + 3=53
        //array history = ["5 x 10 + 3=53"]
        this.#input = values
        this.#history.push(this.#input + "="+ this.#calculate())
    }

    #calculate(){
        //"5 x 10 + 3"
        //5 X 10 + 3 => [5,X10,+3] => 5X10+3 => [5,X,10,+,3]
        // map looping. return setiap isi loopingan 
        // [5,*,10,+,3] => 5*10+3
        // res = 53
        //return 53



        let cal = this.#input.split(" ").join("").split("")
        cal = cal.map((v) => {
            if(v.toLowerCase() == "x") 
            return "*"
            else if(v == ":")
            return "/"
            else 
            return v
        }).join("")
        // console.log(this.#input);
        this.#res = eval(cal)
        return this.#res
    }
    
    showRes(){
        //53
        return this.#res
    }

    showHistory(){
        //["5 x 10 + 3=53"]
        return this.#history
    }
}

let calculator = new Calculator()
calculator.values = "5x10+3"
calculator.values = "3+4x10"
calculator.values = "3+4x10"
calculator.values = "3+4x10"
calculator.values = "5x5x5"


// console.log(calculator.showHistory());
console.log(calculator.showRes());
console.log(calculator.values);

// x dan : 
// melambangkan perkalian dan pembagian
//  x = * 
//  : = /

// calculator.values = "5x6x8"
// calculator.values = "5+6x8:4"
// calculator.values = "10*3:20+34"
// console.log(calculator.values);
// console.log(calculator.showHistory())
// console.log(calculator.showRes())
