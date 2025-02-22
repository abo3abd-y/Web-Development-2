const express = require('express')
const app = express()
const session = require('express-session')



app.use(session({ // session is like cookies but now the data is being stored and you can store a bunch of things in one session which is much more flexible than cookies
    secret: 'thisisnotagoodsecret',
    resave : false,
    saveUninitialized : false // these two just to remove the deprication warnings

}))

// we send a session id to the browser which uses that to store user information
// After it finishes colleciting user information, it sends the session id back to the server
// the server then unpacks that id with the secret and uses that information to its own use



app.get('/viewcount', (req, res) => {
    if(req.session.count) {
        req.session.count += 1
    }else {
        req.session.count = 1
    }

    res.send(`You have viewed this page ${req.session.count} times.`)
})

app.get('/register', (req, res) => {
    const {username = 'Unknown'} = req.query
    req.session.username = username
    res.redirect('/greet')

})

app.get('/greet', (req, res) => {
    const {username} = req.session
    res.send(`Welcome back, ${username}`)
})
app.listen(4000, () => {
    console.log("LISTENING ON PORT 4000")
})