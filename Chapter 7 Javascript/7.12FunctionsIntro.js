function sing() { // this is how you define a function with no paramters
    console.log("DO")
    console.log("RE")
    console.log("MI")
}

sing()

console.log("************")


function greet(firstName, lastName) { // this is how you provide paramters to function
    console.log(`firstName is: ${firstName}, lastName: ${lastName}`)
}

greet('Elvis', 'Clooney')
console.log("**************")
greet() // you get undefined when you do not provide a parameter
console.log("**************")

function repeat(str, num) {
    let result = ''
    for(let i = 0; i < num; i ++){
        result += str
    }
    console.log(result)
}
repeat("hi", 3)
console.log("**************")
repeat("$", 10)

console.log("**************")


function add(x,y) { // here is a function with a return statement
    if(typeof(x) !== 'number' || typeof(y) !== 'number'){
        return false
    }
    return x + y
}

let sum = add(10,3)
console.log(`The sum is ${sum}`)
