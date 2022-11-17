// Specifications :
// Create a program to calculate total salary based on employee type
// There are two types of employee : full-time & part-time
// Salary for full-time employee : 
// IDR 100.000 / hour
// IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// Salary for part-time employee : 
// IDR 50.000 / hour
// IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// Requirements :
// Create an Employee as a parent class
// Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// Create a method in that class to add working hour per day
// Create a method in that class to calculate total salary
// Use inheritance concept


//create class employee 
//properties 
// name 
// company 
// age


//create class fulltimeEmployee extends  
//property
// workingTime = [7,8,9] 
// workingTime = [{day_1 : 7} , {day_2 : 8} ]


// method fulltimeEmployee => addworkinghour ( hour number)
// method fulltimeEmployee => calculate salary 

//create class parttimeEmployee extends employee
// method parttimeEmployee => addworkinghour ( hour number)
// method parttimeEmployee => calculate salary 


// method addworkinghour(hour)
// parameternya adalah number 
// workingtime.push(hour)

//method calculate salary 
// call workingTime 
// loop workingTime => agar dapat value hour per day 
// if (value> 6) 
// var after6 = value - 6 
// salary = (after6 * 75k) + (6 * 100k)




class Employee {
    constructor(name,company) {
        this.name = name, 
        this.company = company
    }
}

class FulltimeEmployee extends Employee {
    #arrWorkingHour = [] //private 
    constructor(name,company) {
        super(name,company)

        this.salary = {
            beforeSix : 100000,
            afterSix : 75000
        }
    }

    addWorkingHour(hour) {
        if(typeof hour != "number"  || hour > 24  || hour < 0)
        {
        throw new Error("invalid input")
        }

        let newDay = {
            ["Day_"+ Number(this.#arrWorkingHour.length+1) ] : hour
            //{ Day_1 : 7 } 
        }
        this.#arrWorkingHour.push(newDay)
    }
    
    showWorkingHour() {
        return this.#arrWorkingHour 
     }

     showTotalSalary() {
        let totalSalary = 0

        this.#arrWorkingHour.map((val) => {
            // { Day_1 : 7} , {Day_2 : 8}
            // key = Day_1
            //val[key] = val["Day_1"] sama saja dengan val.Day_1 => 7

            for(let key in val) 
            {
                if(val[key] <= 6 )
                {
                   totalSalary += val[key] * this.salary.beforeSix            
                }
                else
                {
                   totalSalary += Number((6 * this.salary.beforeSix) + ((val[key] - 6) * this.salary.afterSix ))
                    //6 * 100k = 600k 
                    //7-6 = 1 . 1 * 75k = 75k 
                    //8-6 = 2. 2* 75k =  150 + 600 = 750
                    // totalsalary = 675k + 750k  => 1st day & 2nd day 

                }

            }
   
        })

         return `Fulltime Employee salary is  Rp.${Number(totalSalary).toLocaleString()}`
        }
}

class ParttimeEmployee extends Employee {
    #arrWorkingHour = []
    constructor(name,company) {
        super(name,company)
        this.salary = {
            beforeSix : 50000,
            afterSix : 30000
        }
    }

    addWorkingHour(hour) {
        if(typeof hour != "number"  || hour > 24  || hour < 0)
        {
        throw new Error("invalid input")
        }
        let newDay = {
            ["Day_"+ this.#arrWorkingHour.length+1 ] : hour
        }

        this.#arrWorkingHour.push(newDay)
    }
    
    showWorkingHour() {
        return this.#arrWorkingHour 
     }

     showTotalSalary() {
        let totalSalary = 0

        this.#arrWorkingHour.map((val) => {

            for(let key in val) 
            {
                if(val[key] <= 6 )
                {
                   totalSalary += val[key] * this.salary.beforeSix            
                }
                else
                {
                   totalSalary += Number((6 * this.salary.beforeSix) + ((val[key] - 6) * this.salary.afterSix ))
                }
            }
   
        })

         return `Fulltime Employee salary is  Rp.${Number(totalSalary).toLocaleString()}`
        }
}

let fulltime = new FulltimeEmployee("jordan", "purwadhika")
let parttime = new ParttimeEmployee("jordan", "neurosoft")

fulltime.addWorkingHour(7)
fulltime.addWorkingHour(7)
fulltime.addWorkingHour(8)
fulltime.addWorkingHour(24)


console.log(fulltime.showWorkingHour());
console.log(fulltime.showTotalSalary());
console.log(fulltime);




// Specifications :
// Create a shooting game between two player
// Each player has three properties : name, health and power
// Each player will take turns to shooting
// Before shooting, players get a chance to get random items (health +10 or power +10)
// The game will continue until one of the players has health < 0

// Requirements : 
// Create ShootingGame & Player class
// ShootingGame class : 
// constructor(player1, player2) → player objects as a parameter
// getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
// start() → start shooting games

// Player class :
// Property → name, health (default 100), power (default 10)
// hit(power) →  subtract player health
// useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
// ShootingGame start() function flow :
// In every turn :
// Show each player status before shooting
// Get random item for each player before shooting
// Show each player status after shooting
// Show winner name


// ShootingGame class : 
// constructor(player1, player2) → player objects as a parameter
// done getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
// start() → start shooting games


// Player class :
// Property → name, health (default 100), power (default 10)
// done hit(power) →  subtract player health
// done useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// done showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)


class Player {
constructor(name) {
    this.name = name
    this.health = 100
    this.power = 10
} 
hit (power){
    //120 
    // health = 100 - 120 
    // health = -20
    // health = 0
this.health -= power


this.health < 0 ? this.health = 0 : this.health
}
useItem(item){
    // { power : 10 }
    // object.keys(item)[0] = power 
    // power == "health" ? 
    //this.power += 10 
    // 10 = 10 + 10 
    // this.power = 20


    // console.log(item);
    if(Object.keys(item)[0] == "health") {
        this.health += Number(item.health);
    }
    else{
        this.power += Number(item.power);
    }
}
showStatus(){
    console.log( `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`)
}
}

class ShootingGame {
    constructor(player1,player2){
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem() {
        // 1 - 10 
        // random number <= 5 --> health --> randomnumber % 2 ==0 ? health : 10 else 0 
        // random number > 5 --> power -->
        let randomNumber = Number((Math.random()*10) + 1)
        if ( randomNumber <= 5) {
            return randomNumber >2 ? { health : 10 } : { health : 0}
        }   
        else
        {
            return randomNumber >8 ? { power : 10 } : { power : 0}
        }
    }

    start() {
        let round = 1;
        let winner = ""

        while(this.player1.health > 0 && this.player2.health > 0  )
        {
            let randomNumber = (Math.random()*2) + 1
            console.log(`Round ${round} Start!!`);
            this.player1.showStatus()
            this.player2.showStatus();
            let itemPlayer1 = this.getRandomItem() // { power : 10}
            let itemPlayer2 = this.getRandomItem() // { health : 10}
            this.player1.useItem(itemPlayer1)// power : 20
            this.player2.useItem(itemPlayer2) // health : 110
            console.log(`${this.player1.name} gained item ${Object.keys(itemPlayer1)[0]} +${itemPlayer1[Object.keys(itemPlayer1)[0]]} => ${this.player1[Object.keys(itemPlayer1)[0]]}`);
            console.log(`${this.player2.name} gained item ${Object.keys(itemPlayer2)[0]} +${itemPlayer2[Object.keys(itemPlayer2)[0]]} => ${this.player2[Object.keys(itemPlayer2)[0]]}`);

            if(randomNumber == 1 ) {
                this.player2.hit(this.player1.power) //power player 1 = 20 
                                                     // maka player 2 health = 100 -20 = 80
                                                    // maka player 1 health = 100 -20 = 80
                if(this.player2.health > 0) {
                    this.player1.hit(this.player2.power)
                }
            }
            else{
                this.player1.hit(this.player2.power)
                if(this.player1.health > 0) {
                    this.player2.hit(this.player1.power)
                }            
            }
            this.player1.showStatus()
            this.player2.showStatus();
            console.log(`Round ${round} End!!`);
            round++;
            winner = this.player1.health > this.player2.health ? this.player1.name : this.player2.name 
        }

        console.log(`The Winner is ${winner}`);
    }
}


const player1 = new Player("player1")
const player2 = new Player("player2")
const shootingGame = new ShootingGame(player1,player2)
shootingGame.start()


// console.log(shootingGame.player1.hit(10));

// console.log(player1);


