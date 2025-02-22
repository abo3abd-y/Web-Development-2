
// express is an npm package (framework) that other people wrote that you can import
const express = require("express")
const app = express() // execute the function of express and save the return value which is an object
// console.dir(app) // so app is an express application that we just created


// app.use(() => { // this will run whenever a user tries to visit ANY page, so it will console log this
//     console.log('WE GOT A NEW REQUEST')
// })
// app.use expects a function as an input
// but this peice of code is not really responsing, the browser is still spinning and spinning...

// app.use((req, res) => { // this function has access to objects called req and res. req is incoming request, res is the outgoing res
//     // express takes in req which is simply just data and turns it into object
//     // console.dir(req)
//     // res.send('HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE') // res.send will send back an HTTP request which is what express is doing behind the scenes
//     // res.send({color: 'red'}) // we can also send a js object back. so res.send is super versatile. it iwll send this as a json file back to the requester
//     res.send('<h1> This is my webpage </h1>')
// })

// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.get('/', (req, res) => { // this is the home page
    res.send('This is the home page')
})

app.get('/r/:subreddit', (req, res) => { // now, if you have lots of paths following a patterns like after /r, then you use :
    // console.log(req.params) // req of coursr has paramters that comes from the url that you can use
    const {subreddit} = req.params
    // res.send('THIS IS A SUBREDDIT')
    res.send(`<h1> Welcome to the ${subreddit} subreddit.`)
})
app.get('/r/:subreddit/comments/:postId', (req, res) => { // in here, we are also having this generic postID from teh comments section
    const {subreddit, postId} = req.params
    res.send(`<h1> Viewing the post ID: ${postId} from the ${subreddit} subreddit.`)

})

app.post('/cats', (req, res) => { // this is a post request, which is entirely different than the get request
    res.send('POST REQUSET TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST')
})
app.get('/cats', (req, res) => { // so, how do we deal with certain requests for certain directories?  there is this app.get which will have you provide the exact path, then a call back function same as above
    console.log("CAT REQUEST!!")
    res.send('MEOW!!!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})

app.get('/search', (req, res) => {
    // console.log(req.query) // remmeber query? it is th eadditional information user sends in the link using the ? and &
    const {freaky} = req.query // if you have the variable equal to freaky, then it will print it out bellow
    // res.send('hello')
    res.send(`<h1> Search results for: ${freaky}`)

})

app.get('*', (req, res) => { // this is the default for all other paths using the star thing
    res.send('I DONT KNOW that route or path')
})


app.listen(4000, () => { // this listens on a port for incoming requeasts and expects a second paramter of a callback funciton
    console.log('LISTENING ON PORT 4000')
})