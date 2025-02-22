// json is a format for storing data to sent over the intern
// to use it in javascript, it must be converted into javascript object to be used
// every language has a way for turning json into the language data so we can use it


// we use JSON.parse to turn json into js object
let rawData = {"fact":"Smuggling a cat out of ancient Egypt was punishable by death. Phoenician traders eventually succeeded in smuggling felines, which they sold to rich people in Athens and other important cities.","length":192}
rawData = JSON.stringify(rawData) // this is how you turn it into JSON format so you can send it over to someone else if you wanted because you cannot send js object
console.log(rawData)


let catFact = JSON.parse(rawData)
console.log(catFact)
console.log(catFact.fact)


//REMEMBER: QUERY STRING, HTTP STATUS CODES, POSTMAN