if(true && true) { // && is AND
    console.log("TRUE")
}else {
    console.log("FALSE")
}


if('a' === 'a' || 5 < 10){ // || is OR
    console.log("One of the statements above is true.")
}else {
    console.log("None of the statements above is true.")
}

const number = 0

if(!number) { // here ! is the NOT operator
    console.log("The number is definitely zero which is correct.")
}else {
    console.log("The number is non-zero.")
}

const age = 90

if((age >= 0 && age < 5) || age >= 65){
    console.log("FREE")
}else if(age >= 5 && age < 10){
    console.log("$10")
}else if(age >= 10 && age < 65){
    console.log("$20")
}else {
    console.log("Invalid Age. Try again.")
}

// To make it short, we have the following operators in javascript: &&, ||, and !


// ! is going to negate a value so that if you have a postiive value it will make it false and if you have a false it will flip it to true which is crazy to think about




let firstName = "abdullah"

firstName = ''

if(!firstName) {
    console.log("You have not provided a first name. DO it again because this is invalid")
}

