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

class Employee {
    constructor(name,company) {
        this.name = name, 
        this.company = company
    }
}

class FulltimeEmployee extends Employee {
    #arrWorkingHour = []
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

fulltime.addWorkingHour(24)
fulltime.addWorkingHour(24)
fulltime.addWorkingHour(7)

parttime.addWorkingHour(8)
console.log(parttime);


console.log(parttime.showTotalSalary());
console.log(fulltime.showTotalSalary());

console.log(fulltime.showWorkingHour())

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

class Player {
constructor(name) {
    this.name = name
    this.health = 100
    this.power = 10
} 
hit (power){
this.health -= power
this.health <0 ? this.health = 0 : this.health
}

useItem(item){
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
        let randomNumber = Number((Math.random()*10) + 1)
        if ( randomNumber <= 5) {
            return randomNumber > 5 ? { health : 10 } : { health : 0}
        }   
        else
        {
            return randomNumber > 5 ? { power : 10 } : { power : 0}
        }
    }

    start() {
        let round = 1;
        let winner = ""

        while(this.player1.health > 0 && this.player2.health > 0  )
        {
            let randomNumber = (Math.random()*10) + 1
            console.log(`Round ${round} Start!!`);
            this.player1.showStatus()
            this.player2.showStatus();
            let itemPlayer1 = this.getRandomItem()
            let itemPlayer2 = this.getRandomItem()
            this.player1.useItem(itemPlayer1)
            this.player2.useItem(itemPlayer2)
            console.log(`${this.player1.name} gained item ${Object.keys(itemPlayer1)[0]} +${itemPlayer1[Object.keys(itemPlayer1)[0]]} => ${this.player1[Object.keys(itemPlayer1)[0]]}`);
            console.log(`${this.player2.name} gained item ${Object.keys(itemPlayer2)[0]} +${itemPlayer2[Object.keys(itemPlayer2)[0]]} => ${this.player2[Object.keys(itemPlayer2)[0]]}`);

            if(randomNumber == 1 ) {
                this.player2.hit(this.player1.power)
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


