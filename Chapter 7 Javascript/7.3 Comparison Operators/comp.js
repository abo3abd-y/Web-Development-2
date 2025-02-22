console.log("equality 1 > 3: " + (1 > 3))

console.log("equality 1 < 3: " + (1 < 3))

console.log("equality -1 >= -1: " + (-1 >= -1))

console.log("equality -1 >= -2: " + (1 >= -2))


console.log("equality 1 == '1': " + (1 == '1'))

// this will be true! it iwll convert char to integer and then compare, when using === it cares about type AND val


console.log("equality 1 === '1': " + (1 === '1'))

console.log("equality 1 != '1': " + (1 != '1'))
// cares about val and not type

console.log("equality 1 !=='1': " + (1 !== '1'))

//cares about type AND val

// console.error("buugaa")

// consoles are objects

// let userinput = prompt("Enter your age: ")

// this only runs in the broswer

// you have to realize that when you use console.log, it logs whatever you put in here in the browser terminal

let age = 12

if(age > 6) {
    console.log("age is bigger than 6")
}else {
    console.log("age is less than or equal to 6 :(")
}


let random = Math.floor(Math.random() * 5) + 1

if(random === 3) {
    console.log("You won the lottery")
}else{
    console.log("You didn't win the lottery")
}

if(random === 5){
    console.log("You won the lottery")

}else if(random === 4) {
    console.log("You WERE SO CLOSE TO win the lottery")

}else {
    console.log("You didn't win the lottery")

}



