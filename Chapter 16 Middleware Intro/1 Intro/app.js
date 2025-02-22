const express = require('express')
const app = express()
const morgan = require('morgan')

morgan('tiny')

// app.use(() => { // remember this uses on every single incoming request. so this is sort of a middleware
//     console.log('hello')
// })
app.use(morgan('tiny')) // on every request, use morgan which of course returns a function

app.use((req, res, next) => { // this is the first middleware
    console.log('hello, this is my first middle ware')
    // next() // this just means run the second middleware or the second response
    return next() // alot of people just return next() so they ensure nothing runs next
    // console.log('this is after next()') // this code will be printed onlh after the next middleware is run
})


app.use((req, res, next) => {
    // console.log(req.method.toUpperCase(), req.path)
    // req.method ='GET' // as you can see, if you are making any NON-get request, this will turn it into GET before the request happens
    req.requestTime = Date.now() // we are creating our own thing inside req so that you can use it later on down as you can see 
    next()
})

app.use('/dogs', (req, res, next) => { // as you can see, this only runs for incoming requests from /dogs ONLY
    console.log('I LOVE DOGSSSS')
    next()
})

// app.use((req, res, next) => { // but we only want this run on the secret path
//     const {password} = req.query
//     if(password === 'chickennugget') {
//         next()
//     }
//     res.send('SORRY YOU NEED A PASSWORD')
// })

const verify = (req, res, next) => { // but we only want this run on the secret path
        const {password} = req.query
        if(password === 'chickennugget') {
            next()
        }
        res.send('SORRY YOU NEED A PASSWORD')
}


app.get('/', (req, res) => {
    console.log(`REQUEST TIME: ${req.requestTime}`)
    res.send('HOME PAGE')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF')
})

app.get('/secret', verify, (req, res) => { // as you can see, we provided our middle ware function here before the route call back funciton
    res.send('THIS IS MY SECRET')
})

app.use((req, res) => { // as you can see, this is at the end, so everything bedfore with known routes will run properly and if the secififed route does not exist, then this will run 

    res.status(404).send('NOT FOUND') // set status to 404
})

app.listen(4000, () => {
    console.log('LISTENING ON PORT 4000')
})