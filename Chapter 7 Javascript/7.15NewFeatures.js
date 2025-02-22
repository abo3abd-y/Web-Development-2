function rollDie (numSides = 6) { // default parameters
    return Math.floor(Math.random() * numSides) + 1
}
console.log(rollDie(20))
console.log(rollDie())

function greet(person, msg = "Hello!") {
    return `${msg}, ${person}`
}

console.log(greet('Raghad'))

// SPREAD
const nums = [13,4,5,21,3,3,1,2,7,6,4,2,53456]
console.log(...nums) // this will spread out the list and seperating them as different arguments
console.log(Math.max(nums))
console.log(Math.max(...nums))


console.log(...'hello') // this works on all different kinds of iterables
console.log('h', 'e', 'l', 'l', 'o')

const cats = ['Blue', 'Scout', 'Rocket']
const dogs = ['Rusty', 'Wyatt']

let allPets = [...cats, ...dogs] // now we can actually copy arrays here!!! so that they are two differnt arrays
console.log(allPets)

let spreadOut = [..."hello"]
console.log(spreadOut)

const feline = {legs : 4, family : 'Felidae'}
const canine = {isFurry : true, family : 'Caninae'}

const catDog = {...feline, ...canine} // copying projects
console.log(catDog) // as you can see the family is caninae because canine came second or the last


function sum () { // as you can see we have arguments which act exactly like array but it does not have its methods like push and pull and so on 
    console.log(arguments)
}

function improvedSum (...nums) { // now we are collecting all of the rest of  nums in one list or array
    return nums.reduce((total, el) => total + el)
}
console.log(improvedSum(1,2,3))

function raceResults(gold, silver, ...everyoneElse) { 
    console.log(`Gold goes to ${gold}`)
    console.log(`Silver goes to ${silver}`)
    console.log(`Everyone else is ${everyoneElse}`)
}
raceResults('Ahmed', 'Omar', 'Abdullah', 'Sarah') // as you can see here, if you want to provide every or the rest of argument, then you can list the other arguments which will be caught by ...



const scores = [438925,3298432,59082,293058,109385,860120,394859]
const [gold, silver, bronze, ...everyoneElse] = scores // as you can see, a faster way to assign variables. This is called destructuring
console.log(gold, silver, bronze)
console.log(everyoneElse)

const user = { // so we can do the same thing for objects
    email : 'harvey@gmail.com',
    password  : 'scot1348smith',
    firstName : 'Harvey',
    lastName : 'Milk', 
    born : 1930,
    died : 1978,
    city : 'San Francisco',
    state : 'California'
}

const {email,firstName, lastName, city, state } = user
console.log(email,firstName, lastName, city, state)

const {born: birthYear} = user // we can also rename the variable
console.log(birthYear)

const{nickName = 'N/A'} =  user // as you can see, user does not have an attribute called nickName, so give it a default value in case it does not exist


function fullName ({firstName, lastName = "Yassine"}) { // we can destruct on the way in
    return `${firstName}, ${lastName}`
}

console.log(fullName(user))