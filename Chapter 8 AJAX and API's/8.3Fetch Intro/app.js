// https://swapi.py4e.com/api/people/1/


// THUS, we have fetch which is an alternative to XML and a better way of getting and sending request
fetch("https://swapi.py4e.com/api/people/1/")
.then(res => {
    console.log("RESOLVED")
    console.log(res) // sometimes this sends back resolved stuff without having things (incomplete body) on it that we need. it resolved things as quickly as it can 
    return res.json() //res.json send back a promise. different than JSON.parse()
})
.then(data => console.log("JSON DONE", data)) // we take the previous promise and print out data
.then(() => {
    return fetch("https://swapi.py4e.com/api/people/2/")
})
.then(res => {
    console.log("RESOLVED")
    console.log(res) // sometimes this sends back resolved stuff without having things (incomplete body) on it that we need. it resolved things as quickly as it can 
    return res.json() //res.json send back a promise. different than JSON.parse()
})
.then(data => console.log("JSON DONE", data)) // we take the previous promise and print out data
.catch(e => {
    console.log("ERROR", e)
})


// ASNYC

// ASYNC is much cleaner to use and easier to use than the above syntax
const loadStarWarsPeople = async () => {
    try{
        const response= await fetch("https://swapi.py4e.com/api/people/10/") // we await the promise sent back hoping to be resolved before we go any further
        const data = await response.json() // we await teh json promise sent back
        console.log("ASYNC DONE")
        console.log(data)
    
    }catch(e) { // remember to use try catch so that in case a rejected promise gets sent back or en error occurs, we catch the error so we manage our code
        console.log(e)
    }
}

loadStarWarsPeople()