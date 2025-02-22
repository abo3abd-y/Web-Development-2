const math = require('./10.3ModuleExports') // this is how you import stuff from other files
console.log(math) // empty object?

// as you can see, it works fine
console.log(math.PI)
console.log(math.square(9))


// console.log(math.math.PI)
// console.log(math.math.square(9))
