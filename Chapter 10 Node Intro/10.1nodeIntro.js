for(let i = 0; i < 10; i ++) {
    console.log('Hello From First Script')
}

// you can run this js file using node nameOfFile.js


console.log('HELLO FROM ARGS FILE')
console.log(process.argv) // this will gives us the arguments of given when running the file

const args = process.argv.slice(2) // we start at index 2 and onwards
for(let arg of args) {
    console.log(`Hi there, ${arg}`)
}





