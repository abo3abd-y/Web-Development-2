const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function print(element){
    console.log(element)
}
numbers.forEach(print) // for each basically passes each element by itself one by one to the function given
console.log("*******************************")
numbers.forEach(function (el) { // you could do it this way 
    console.log(el)
})

console.log("*********")

const movies = [
    {
        title: "ok1",
        score:75
    },
    {
        title: 'ok2',
        score:24
    },
    {
        title: 'ok3',
        score:19
    }
]

movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}`)
})

const doubles = numbers.map(function (num) { // map is same thing as for each but expects return. it's gonna call this function on every element of this array and perform operation 
    return num * 2
})
console.log(doubles)


console.log("*****************")

const titles = movies.map(function(movie) {
    return movie.title.toUpperCase()
})
console.log(titles)

// ************ FOREACH AND MAP ARE USED FOR ARRAYS *****************


// *********** NOW ARRAY FUNCTIONS **************************
// const add = function (x,y) {
//     return x + y
// }

const add = (x,y) => { // this only works when storing variables
    return x + y
}

const square = (x) => {
    return x ** 2
}
// const square = x => { // you can remove the paranthesis around paramters if there is only one paramter
//     return x ** 2
// }

console.log(square(2))

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }
// console.log(rollDie())

const rollDie = () => (Math.floor(Math.random() * 6) + 1) // this is the implicit return and this ONLY works when you only have the return keyword as the whole body of code int eh function
console.log(rollDie())

const multiply = (x,y) => x * y // you can even do it this way with no paranthesis
console.log(multiply(4,4))

const squared = numbers.map(num => num * num)
console.log(squared)

new_movies = movies.map(movie => `${movie.title} - ${movie.score/10}`)
console.log(new_movies)


// ********** SET TIME OUT ******************
setTimeout(() => { // runs the function after a certain number of time
    console.log("hello")
},3000) // 3000 milliseconds
console.log("GoodBYE") // as you can see, it ran goodbye first and then hello

const id = setInterval(() => { // same as settimeout but it runs the function every sets of seconds
    console.log(Math.random())
}, 2000)
clearInterval(id) // this will stop the setinterval from running in the first place


let less10 = numbers.filter(n => {
    return n<10
}) // filter function returns a list and it ONLY must return true or false

console.log(less10)

let even = numbers.filter( n => n % 2 == 0)
console.log(even)

// remember filter expects a function that is supposed to return a boolean

// remember, the list that we are filtering out does not change

const exams = [80,98,92,78,77,90,89,84,81,77]
console.log(exams.every(score => score >= 75)) // every again gets every element as input but will return true if every element passes the test function or return true. so the function given must return a boolean just like filter

console.log(exams.some(score => score > 90))
// the above should return true if at least one element returns true from the fucntion


const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

console.log(prices.reduce((total, price) => {
    return total + price
})) // reduce basically takes a function of two arguments: accumulator, currVal where accumulator is the thing that gets saved after each time a function gets called and returns a value and the current value are the elements that we are iterating through


console.log(prices.reduce((min, price) => { // as you can see here, we return the min value of the list
    if(price < min) {
        return price
    }
    return min
}))

const evens = [2,4,6,8]
console.log(evens.reduce((sum,num) => sum + num , 100)) 
// as you can see above, we can add another paramter which can be the initial value of accumulator

const person = {
    firstName : 'Viggo',
    lastName : 'Mortensen',
    fullName : function () {
        return `${this.firstName} ${this.lastName}`
    },
    // shoutName : function () { // you will get an error here because this will refer to the window object
    //     setTimeout(function() {
    //         console.log(this.fullName())
    //     }, 3000)
    // },
    shoutName : function () { // you will get an error here because this will refer to the window object
        setTimeout(() => { // this works because this will mean that it will take from the outer object and in this case the function where it explicitly defined using the function keyword
            console.log(this.fullName())
        }, 3000)
    }
}
// console.log(person.fullName())
console.log(person.shoutName())

// the keyword this differs when it is used inside the function defined this way () => 