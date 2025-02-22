// https://swapi.py4e.com/api/people/1/

// axios is even a better way of using fetch which uses fetch behind the scnenes
axios.get("https://swapi.py4e.com/api/people/1/") // this will return a promise
.then(res => {
    console.log(res) // it has a data field ALREADY parsed
})
.catch(e => {
    console.log("error", e)
})


// Using ASNYC: as you can see much easier than before
const getStarWarsPerson = async (id) => {
    try{
        const res = await axios.get(`https://swapi.py4e.com/api/people/${id}/`)
        console.log(res.data)
    } catch(e) {
        console.log("error", e)
    }
}

getStarWarsPerson(5)

const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const addNewJoke = async() => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('LI') // as you can see, we are adding the jokes in li
    newLI.append(jokeText)
    jokes.append(newLI)
}
const getDadJoke = async () => {
    try {
        const config = {headers : {Accept : 'application/json'}} // you need this header as per the insutrctions on this url's page if you want the json version
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        // console.log(res)
        // console.log(res.data.joke)

        return res.data.joke

    }catch(e) {
        return "No jokes available. SORRY :("
    }
    

}
// getDadJoke()

button.addEventListener('click', addNewJoke)