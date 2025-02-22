const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
app.use(cookieParser('thisismysecret')) // you need this to get the cookies from req parameter
// the string we provided is the thing that the cookie uses to sign and unsign the cookie we send
// to make sure the data has not been tampered with


app.get('/greet', (req, res) => {
    const {name = 'Anonymous'} = req.cookies
    //console.log(req.cookies)
    res.send(`Hey there ${name}`) 
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie chicks') // cookies are key value pair; so here we have name which is the key and stevie chicks is the value
    // cookies are saved values that stay there even if you go to other pages
    res.cookie('animal', 'cat')
    res.send('OK SENT YOU A COOKIE')
})

app.get('/signed', (req, res) => {
    res.cookie('fruit', 'grape', {signed : true}) // this signs the cookie that we are sending
    res.send("OK SIGNED YOUR FRUIT COOKIE")
})

app.get('/unsigned', (req, res) => {
    
    
    res.send(req.signedCookies) // retrieves your signed cookie and make sure it hasnt been tampered with
})

app.listen(4000 , () => {
    console.log("LISTENING ON PORT 4000")
})