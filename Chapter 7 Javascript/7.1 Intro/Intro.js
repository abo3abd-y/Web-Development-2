// you can run this file using node <filename>.js

console.log("hello")

// alert("hello")

// the above only works on web console and web stuff

let year = 1985

// the is how you create a variable

console.log("the year is " + year)

year = 2120

// you can change the value of those variables

console.log("Now, the year is " + year)

year += 5

// shorted way of incrementing

console.log("Now, the year is " + year)

year -= 5

console.log("Now, the year is " + year)

year --

console.log("Now, the year is " + year)

year ++

console.log("Now, the year is " + year)

// there is big differnece between i++ and ++i where the latter updates then uses new val and first is different

let result = year ++

console.log("Now, the result is " + result)
// prints result then updates

result = ++ year

console.log("Now, the result is " + result)
// updates then print results

const doNotChange = 5

// when you assign 5 here, you cannot reassign it again ever and you will get an error

console.log("The const val is " + doNotChange)

// doNotChange = 1
// error above here

var oldVariable = 10

// old way of declaring variables in js. nobody use this anymore

console.log("Using var " + oldVariable)

oldVariable = 2

// you can change var as you can see

console.log("Using var " + oldVariable)

// as you can see here, there is no point of using var when you can use let and cosnt

let boolVal = true

// bool val here

console.log("Using boolVal " + boolVal)


boolVal = false

console.log("Using boolVal " + boolVal)

boolVal = "wazzup"

console.log("Using boolVal " + boolVal)

// as you can see, it is like python where a variable can change data types which is crazy


