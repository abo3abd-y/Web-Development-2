const multiply = (x,y) => x * y
const square = x => multiply(x,x)
const isRightTriangle = (a,b,c) => {
    square(a) + square(b) === square(c)
}

// call stack

console.log('Sending request to server')
setTimeout(() => {
    console.log('here is your data from the server')
}, 3000); // waits three seconds then runs this code

console.log('i am at the end of the file!') // it runs this code while waiting for this code

// this is because the browser is doing all of this work; this is when javascript cannot do this kind of work so it hands otu this work to the browser as special web apis so that they can deal with it and when the browser is done with the work
// they send the function to call stack for the javascript after they are done with their task
// remember javascript does one thing at a time, so this should explain how the second statement get printed before the first one