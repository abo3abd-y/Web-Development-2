const express = require('express')
const app = express()
const morgan = require('morgan')
const appError = require('./AppError')

morgan('tiny')

app.use(morgan('tiny')) 

app.use('/dogs', (req, res, next) => { 
    console.log('I LOVE DOGSSSS')
    next()
})

const verify = (req, res, next) => { 
        const {password} = req.query
        if(password === 'chickennugget') {
            next()
        }
        //res.send('SORRY YOU NEED A PASSWORD')
        throw new appError('Password Required', 401)
        //res.status(401)
        // throw new Error('password required') // as you can see, we can send back an error ! express sends back a default error of 500 status code and we can define our own
}


app.get('/', (req, res) => {
    console.log(`REQUEST TIME: ${req.requestTime}`)
    res.send('HOME PAGE')
})

app.get('/error', (req, res) => {
    chikcen.fly() // this is error 
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF')
})

app.get('/secret', verify, (req, res) => { 
    res.send('THIS IS MY SECRET')
})

app.get('/admin', (req, res) => {
    throw new appError('You are not admin!', 403)
})

app.use((req, res) => { 

    res.status(404).send('NOT FOUND') // set status to 404
})

// app.use((err, req, res, next) => { // defalut error is not here anymore because this is subsitutes it. this will run whenever an error happens
//     console.log('*************************************')
//     console.log('*****************Error********************')
//     console.log('*************************************')
//     // console.log(err) // this will print the default error
//     // next() // this will cause the next middleware to be called in. this will cause the next non-error-handling middleware
//     next(err) // this will cause the next error-handilg middle ware which is the default
// })

app.use((err, req, res, next) => { // defalut error is not here anymore because this is subsitutes it. this will run whenever an error happens
    const {status = 500, message = 'Somethign went wrong'} = err // 500 is the default if there is no status on the error we are getting
    res.status(status).send(message)
})

app.listen(4000, () => {
    console.log('LISTENING ON PORT 4000')
})