let username = "abdullah"

// strings

console.log("My name is " + username)

console.log(typeof(username))

console.log("the zero index " + username[0])


console.log("the zero index " + username[99])

// no error here! just undefined

console.log("the length of string is " + username.length)

username[0] = "b"

// as you can see, this does not work!! and does not change anything so you have to replace the whole thing again

console.log("the string is " + username)

username += 1
// as you can see, js will treat this as string

console.log("the string is " + username)

username = username.toUpperCase()

// these are called attributes

console.log("the string is " + username)

username = username.toLowerCase()

console.log("the string is " + username)

username = "         " + username + "       "

console.log("the string is " + username)

username = username.trim()

// removes space from left and right

console.log("the string is " + username)


username = "      a     " + username

console.log("the string is " + username)


username = username.trim()

console.log("the string is " + username)

username = "abdullah"

console.log("the index is at "  + username.indexOf("abdul"))

// returns index of first occurnace


console.log("the index is at "  + username.indexOf("z"))
// returns -1 if the thing does not exist

username = "the quick brown fox is not getting over this!!!!"

console.log("the index is at "  + username.slice(5))

// if you provide one arg, it returns string after the given index

console.log("the index is at "  + username.slice(5, 11))

console.log("the index is at "  + username.slice(-1))
console.log("the index is at "  + username.slice(-2))

console.log("the index is at " + username.replace("brown", "yellow"))

// replace one thing with another 

console.log("repeat is the following "  + username.repeat(10))

// repeat the string multiple times

let product = "apple"

let qnty = 6

let price = 1.99

console.log(`You bought ${qnty} ${product}s at a price of $${price} which means total is $${qnty * price}. `)
// kind of like python but you gotta use this as you may have noticed `` and use ${} format

console.log(Math.floor(3.99999))
// Math is object

console.log(Math.ceil(3.01))

console.log(Math.floor(Math.random() * 5) + 1) 