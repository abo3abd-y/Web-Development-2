let maximum = NaN
while(!(maximum = parseInt(prompt("Enter the maximum number!"))));

const targetNum = Math.floor(Math.random() * maximum) + 1
console.log(targetNum)
let attempts = 1

let guess = parseInt(prompt("enter your first guess!"))
while(guess !== targetNum) {
   
    attempts ++
    if(guess > targetNum) {
        guess = parseInt(prompt("Too high! Enter a new guess"))
    }else {
        guess = parseInt(prompt("Too low! Enter a new guess"))
    }
}
console.log(`You got it! It took you ${attempts} to guess the number.`)
