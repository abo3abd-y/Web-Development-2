const add = (x,y) => x + y

const PI = 3.141519
const square = x => x * x


// module.exports = "hello" // as you can see, the only thing that can be exported out of htis file is this string hello

const math = {
    add : add,
    PI : PI,
    square : square
}
// a way of exporting functions is as follows
// module.exports.add = add
// module.exports.PI = PI
// module.exports.square = square


// you could do it this way where you put everything in one object
// module.exports.math = math

// Faster way. you can just use exports straight out without needing module

exports.square = square
exports.PI = PI
exports.add = add




