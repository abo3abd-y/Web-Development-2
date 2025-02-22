const express = require('express')
const app = express()
const user = require('./models/user')
const mongoose = require('mongoose')
const db = mongoose.connection
const bcrypt = require('bcrypt')
const session = require('express-session')

mongoose.connect('mongodb://localhost:27017/authDemo')
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', ()=> {
    console.log('database connected')
})

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.urlencoded({urlencoded:true}))
app.use(session({secret: 'notagoodsecret'}))


const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next()
        

}


app.get('/', (req, res) => {
    res.send("THIS IS THE HOME PAGE ")
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const {username, password} = req.body
    const newUser = new user({
        username,
        password
    })
    await newUser.save()
    req.session.user_id = newUser._id
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const foundUser = await user.findAndValidate(username, password)
    if(foundUser) {
        req.session.user_id = foundUser._id
        res.redirect('/secret')
    }else {
        res.redirect('/login')
    }

})

app.get('/secret', requireLogin, (req, res) => {
    if(!req.session.user_id){
        return res.redirect('/login')
    }
    res.render('secret')
})

app.post('/logout', (req, res) => {
    req.session.user_id = null
    //req.session.destroy() // this will destroy or remove everything
    res.redirect('/login')
})


app.listen(4000, () => {
    console.log("LISTENING ON PORT 4000")
})