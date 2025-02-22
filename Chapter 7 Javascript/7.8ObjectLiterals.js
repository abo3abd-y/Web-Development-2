const person = { // objects are kind of like dictionaries; order does not matter like arrays
    firstName : 'Mick',
    lastName: 'Jagger'
}
console.log(person)


const kitchenSink = {
    favNum:323282,
    isFunny: true,
    colors: ['red', 'orange']
}
console.log(kitchenSink)


// this is how you can access individual elements; do not forget ""
console.log(person["firstName"])
console.log(person["hello"]) // undefined

console.log(person.lastName) // another way to access elements

const years = {
    1999: 'Good',
    2020: 'Bad'
}
console.log(years["1999"])
console.log(years[1999]) // works?
// console.log(years.1999) // does not 
// this is because the keys behind the scenes are converted into strings

let birthyear = 2020
console.log(years.birthyear) // does not exist
console.log(years[birthyear])

const midterms = {
    danielle : 96, 
    thomas: 78
}
console.log(midterms)
midterms.thomas = 79 // this is how you change the elements inside the object

console.log(midterms)

midterms.danielle = 'A'
midterms["thomas"] = "C+"

console.log(midterms)
midterms.ezra = 'B+' // you can create new properties here
midterms['Antonio'] = 'A-' // same as here
console.log(midterms)

const comments = [
    {
        username: 'Tammy',
        text: 'lololol',
        votes: 9
    },
    {
        username: 'FishBoi',
        text: 'glub glub',
        votes:12387
    }
]
console.log(comments[1].text) // this is how you access an element in an object in an array

