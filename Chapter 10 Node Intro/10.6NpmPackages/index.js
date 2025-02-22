var jokes = require('give-me-a-joke');
// require the npm package. Npm is basically a way you can get code other people uploaded using require
// console.dir(jokes)
var colors = require('colors');
jokes.getRandomDadJoke (joke => {
    console.log(joke.rainbow) // the rainbow part is from colors
});


// requiring colors npm package 