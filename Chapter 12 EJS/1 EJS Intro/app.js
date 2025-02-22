const express = require('express')
const app = express()
const path = require('path')
// note that nodemon is a tool you can use instead of node so that it automatically restrats the server when you make an edit here
app.set('view engine', 'ejs') // app set is something you can you use to set a property to something else
// this will also require ejs behind the scenes
app.set('views', path.join(__dirname, '/views')) // what this does is that it joins this file with /views so that you can run this file anywhere you want even if you are outside the dirname becuase it autmatically seaerches for views in the current directory YOU are in.
// also express assume that our templetaes and views locate on a folder called view, so we have to create that


// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public'))) // as you can see, this is better than above bececause even if you are not in this directory, you can run this code with this public folder with it 
// app.use(express.static('js')) // you can also, provide multiple folders if you like or put them all in one folder
// app.use(express.static('cs'))
// remember, app.use send whatever you put to whatever kind of request you get, whether get, post, any params, whatever, it will send this
// folder called public and whatever inside of public


app.get('/', (req, res) => {
    // res.send('hello')
    res.render('home') // why we do not provide views? because it automaitlly knows it is there and it assumes it is there
    // render is when we send a page back
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    console.log(num)
    res.render('random', {rand : num}) // as you can see, we are sending a data to the rand file to be used
    // data should be sent as objects
})

app.get('/r/:subreddit', (req, res) => { // sending data again
    const {subreddit} = req.params
    res.render('subreddit', {subreddit})
})


app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', {cats})
})



app.listen(4000, () => {
    console.log('Listening on port 4000')
})