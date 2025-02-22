// https://swapi.py4e.com/api/people/1/

// we are gonna start with XML which nobody uses to understand where internet came from 
// also XML does not support promise, so nesting callbacks is a thing
const req = new XMLHttpRequest() // create a new XML

req.onload = function() { // this will run when success
    console.log("IT LOADED")
    // console.log(this)
    console.log(this.responseText)
    const data = JSON.parse(this.responseText) // parse it
    console.log(data)
    console.log(data.name, data.height)
}

req.onerror = function () { // this will run when failure
    console.log("ERROR")
    console.log(this)
}

req.open("GET", "https://swapi.py4e.com/api/people/1/") // open with get request and the url
req.send() // send