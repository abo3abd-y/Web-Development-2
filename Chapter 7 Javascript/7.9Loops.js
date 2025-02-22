for(let i = 1; i<=10; i++) { // this is how you use for loops
    console.log(i)
}

console.log("********************************")

let i = 1
for(;i<=5;){ // short way to do this here
    console.log(i++)
}

console.log("********************************")


for(let i = 0; i <= 20; i+= 2){ // printing only event numbers
    console.log(i)
}

console.log("********************************")

for(let i = 100; i>= 0; i -= 10) { // you can also decrement
    console.log(i)
}

console.log("********************************")

const animals = ["cats", "dogs", "lions", "elephants", "eagles", "donkeys"]
//iterating over a loop
for(let i = 0; i < animals.length; i ++) {
    console.log(i, animals[i])
}

console.log("********************************")

for(let i = animals.length - 1; i >= 0; i --) { // going backwards
    console.log(i, animals[i])
}
//nested loops
console.log("********************************")
for (let i = 1; i<= 10; i ++) {
    console.log(`i is : ${i}`)
    for(let j = 1; j < 4; j ++) {
        console.log(`   j is: ${j}`)
    }
}

console.log("********************************")
// while loops
let count = 0
while(count < 10) {
    console.log(count ++)
    // count ++
}

// while loops are used when we do not know how many times we are running
// maybe user input? game loop ?

console.log("********************************")
const secret = "BabyHippo"
let guess = "BabyHippo"
while(guess != secret) {
    // guess =prompt("Enter again")
    guess = "this is another guess"
}
console.log("congrats you got it currently")

console.log("********************************")
let input = "stop copying me"

while(true) {
    console.log(input)
    if(input === "stop copying me") {
        break
    }
}
console.log("ok you win")


// ************ COME HERE AFTER GOING THOUGH THE GUESSING GAME FILE *********************


console.log("********************************")



const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']

// this is the for of loop 
for(let subreddit of subreddits) {
    console.log(subreddit)
}

console.log("********************************")

// we can use this structure of for loop in iterable objects
for(let char of "hello world"){
    console.log(char)
}

console.log("********************************")

const testScores = {
    keenan : 80,
    damon : 67,
    kim : 89,
    shawn : 91,
    marlon : 72,
    dwayne: 77,
    nadia: 83,
    elvira : 97,
    diedre : 81,
    vonnie : 60
}

// objects ARE NOT iterable because they do not have order like arrays or strings
for(let person in testScores) { // very old fashion, not a lot of use these days
    console.log(`${person} : ${testScores[person]}`)
}

// do Object. and find out

console.log("********************************")
let total = 0
for(let score of Object.values(testScores)) { // gives us values
    total += score
}
console.log(`Average is: ${total/Object.values(testScores).length}`)

