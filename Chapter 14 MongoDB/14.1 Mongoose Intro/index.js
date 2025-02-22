const mongoose = require('mongoose')
// remember when i installed mongodb, it is technicallyt a server, so we need to connect mongoose with that server
mongoose.connect('mongodb://127.0.0.1:27017/movies') // this how you can connect
.then(() => {
    console.log("Connection OPEN")
}).catch(err => {
    console.log("OH NO ERROR")
    console.log(err)
})

const movieSchema = new mongoose.Schema({ // as you can see, you need to create a schema that maps Mongodb data types into JS datattypes
    title : String,
    year : Number,
    score : Number,
    rating: String
  });

const Movie =  mongoose.model('Movie', movieSchema) // next, we need to create a model, where the string has to be capitalized and singular, and then the schema and this will return a class that will have LOTS and LOTS of methods which we will use
// const amadues = new Movie({title : 'Amadeus', year : 1986, score : 9.2, rating : 'R'}) // this still does do anything or insert anything to the db, but creates an instance

// Movie.insertMany([ // this inserts many stuff at the same time, which we won't do in the real world because in the real world you need to insert one user at a time and stuff like that, and this emthod does not require save and this is supposed to return A PROMISE
//     {title : 'Amelie', year : 2001, score : 8.3, rating : 'R'},
//     {title : 'Alien', year : 1979, score : 8.1, rating : 'R'},
//     {title : 'The Iron Giant', year : 1999, score : 7.5, rating : 'PG'},
//     {title : 'Stand By Me', year : 1986, score : 8.6, rating : 'R'},
//     {title : 'Moonrise Kingdom', year : 2012, score : 7.3, rating : 'PG-13'}
// ]).then(data => {
//     console.log('IT WORKED')
//     console.log(data)
// })

