const bassist = 'Paul'

console.log(bassist[0])


let colors =[]

console.log(typeof(colors)) // teaser of what we are going to talk about in the future

let days = ['Monday', 'Tuesday', 'Wednesday']

console.log(days)

console.log(days.length) // this is because arrays in javascript are objects of a class called array

let kitchenSink = [true, undefined, 12, 9.99999, NaN, false, null]


// we can put multiple data of multiple data type in arrays
console.log(kitchenSink) 


console.log(days[0])
// this is how you can access the last element of the array
console.log(days[days.length - 1]) 

console.log(days[300]) // you get undefined! you do not get an error

console.log(days[0][1]) // im getting the first day of the arrat and then the second letter of that name

let firstName = "colt"

firstName[0] = "C" // you cannot do that here

colors = ["rad", "orange", "yellow"]
colors[0] = "red" // you can reassign

console.log(colors[0]) // it changed

colors[10] = "indigo" 
console.log(colors) // wow the array got elongated so that we can add this element
console.log(colors.length)

console.log(colors[9])

let movieLine = ["tom", "nancy"]

movieLine.push("pablo") // add element to the end of array

console.log(movieLine)

movieLine.push("harry", "hermoine") // you can add multiple
console.log(movieLine)


movieLine.pop() // removes an element from the end of the element
console.log(movieLine)

let person = movieLine.pop() // you can catch what you pop off the element
console.log(person) 

console.log([].pop()) // you will get undefined here

movieLine.push("Ahmed")

if(person = movieLine.pop()){
    console.log(person + " was removed.")
}


console.log(movieLine.shift()) // this removes from the first line

movieLine.push("jerry", "deniz", "kevin", "carly")
console.log(movieLine)

movieLine.unshift("VIP") // unshift add VIP to the beginning of the array
console.log(movieLine)

let cats = ["blue", 'kitty']
let dogs = ['rusty', 'wyatt']

let comboParty = cats.concat(dogs)
console.log(cats) // cats doesnt get updated
console.log(comboParty)

console.log(cats.includes('blue')) // includes returns a bool if a certain element is there

console.log(comboParty.indexOf("kitty")) // returns the index
console.log(comboParty.indexOf("doooog")) // returns -1 so it does not exist

console.log(comboParty.reverse())
console.log(comboParty) // it actually reverses it

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
console.log(colors.slice()) //with no arguments, returns whole array
console.log(colors.slice(3)) // returns from index 3 onwards
console.log(colors.slice(2,4)) // does not include 4

console.log(colors.slice(-3)) // negative means give me the last three elements of array

colors.splice(5,1) // first paramter is the index and the second index is how many you are deleting. we are deleating indigo in this case

console.log(colors)
colors.splice(1,0,"red-orange") // we are adding at index 1, deleting 0 items, adding red-orange
console.log(colors)

colors.splice(3,0,'yellow-green', 'forestgreen')
console.log(colors)

colors.splice(2,2,"DELETED")
console.log(colors)

let scores = [1,70,100,2500, -12, 0, 34]
console.log(scores.sort()) // as you can see, it is only sorting based on first digit of the number

// console.log(['hi', 'bye'] === ['hi', 'bye']) // this will return false because it is comparing their memory references and not element-wise
let nums = [1,2,3]
let numsCopy = nums // we are assigning memory references and not the actual list or array
nums.push(4)
console.log(numsCopy)

console.log(nums === numsCopy)

const num = [1,2,3] //as long as the reference to the array is the same, we are good
// so we can add or remove elements from the array but we cannot change its addres

num.push(4)
console.log(num)

// num = [1,2,3,4] // this is completely different; we are changing the memory reference to this array so we will get an array


const gameBoard = [
                    ['X', 'O', 'X'],
                    ['O', null, 'X'],
                    ['O', 'O', 'O']]

// this is how we can access this null element for example                    
console.log(gameBoard[1][1])
console.log(gameBoard.length)


