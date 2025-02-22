function collectEggs() {
    let totalEggs = 6
    console.log(`total eggs collected is ${totalEggs}`)
}
collectEggs()
// console.log(totalEggs) // this will return an error because variables in functions are local to the functions and not recognizable outside its scope

let radius = 8
if(radius > 0) {
    const PI = 3.14159
    let msg = 'HIII!'
    var ok = 13 // you can access this variable outside this scope because it was defined with var
}
console.log(radius)
// console.log(PI) //error
console.log(ok)

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Wonder Woman']
    function cryForHelp() {
        for (let hero of heroes){
            console.log(`PLEASE HELP US ${hero}`)
        }
    }
    cryForHelp()
}
bankRobbery() // so inner function has access variables located in the outer function

const add = function(x,y) { // this is called a function expression and we are storing the function in a variable
    return x + y
}

console.log(add(10,5))

// higher order functions: they accept other functions as paramters, or return a function as a return value

function callTwice(func) {
    func()
    func()    
}
function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie) // as you can see, we are done with this, thats higher order functions

// now lets demonstrate a function that returns a function

function makeMysteryFunc() {
    const rand = Math.random()
    if (rand > 0.5) {
        return function() {
            console.log("Congrats, I am a good function!")
        }
    }else{
        return function() {
            console.log("You have been nifected by a computer virus")
        }
    }
}
const mystery = makeMysteryFunc() // you need to capture the return value like you would if the return value is a number
mystery()




// function isBetween(num) {
//     return num >= 50 && num <= 100
// }

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max
    }    
}

const returnFunc = makeBetweenFunc(25,50)
console.log(returnFunc(30))
console.log(returnFunc(100))

const isAdult = makeBetweenFunc(75,80)(76) // you could do this as well
console.log(isAdult)


const myMath = { // we are gonna create methods
    PI: 3.14159,
    square: function(num) {
        return num * num
    },
    cube : function(num) {
        return num**3
    }

}
// const myMath = { // this is a shortcut so we do not need to use this part :
//     PI: 3.14159,
//     square(num) {
//         return num * num
//     },
//     cube(num) {
//         return num**3
//     }

// }
console.log(myMath.square(3)) // here we used methods
console.log(myMath.cube(3))


const cat = {
    name: 'Blue Steele',
    color : 'grey',
    breed : 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOW MEOW MEOW`) // this is the this keyword which is pretty cool
    }
}
cat.meow()

const meow2 = cat.meow
meow2() // different output? this is because meow2 does not have an attribute called name. in fact it is part of an object called the window object which is the default



// covering try and catch stuff
try {
    hello.toUpperCase()
}catch {
    // if an error was produced, run this block of code
    console.log("ERRORRRR!!!")
}

function yell(msg) {
    try{
        console.log(msg.toUpperCase().repeat(3))

    }catch (e) {
        // console.log(e)
        console.log("Please pass a string next time.")
    }
}
yell('wassup')
yell(123)

