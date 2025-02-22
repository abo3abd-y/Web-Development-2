const express = require('express')
const app = express()
const path = require('path')
const mongoose= require('mongoose')
const campground = require('./models/campground')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')

mongoose.connect('mongodb://localhost:27017/yelp-camp') // db name is yelp-camp


const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', ()=> {
    console.log('database connected')
})

app.engine('ejs', ejsMate) // we are using the ejsMate and not the default ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/campgrounds/new', (req, res) => { // as you can see, order matters here because before when i put this after id, it was treating id as new
    res.render('campgrounds/new')
})

app.get('/campgrounds', async(req, res) => {
    const campgrounds = await campground.find()
    res.render('campgrounds/index', {campgrounds})
})

app.get('/campgrounds/:id', async(req, res) => {
    const campg = await campground.findById(req.params.id)
    res.render('campgrounds/show', {c : campg})
})

app.post('/campgrounds', async (req, res) => {
    const campg = new campground(req.body.campground)
    await campg.save()
    res.redirect(`/campgrounds/${campg._id}`)
})

app.get('/campgrounds/:id/edit', async (req, res) => {
    const campg = await campground.findById(req.params.id)
    res.render('campgrounds/edit', {c : campg})
})

app.put('/campgrounds/:id', async(req, res) => {
    const {id} = req.params
    const campg = await campground.findByIdAndUpdate(id, {...req.body.campground})
    res.redirect(`/campgrounds/${campg._id}`)
})

app.delete('/campgrounds/:id', async (req, res) => {
    const {id} = req.params
    await campground.findByIdAndDelete(id)
    res.redirect('/campgrounds')
})








app.listen(4000, () => {
    console.log('Serving on port 4000')
})