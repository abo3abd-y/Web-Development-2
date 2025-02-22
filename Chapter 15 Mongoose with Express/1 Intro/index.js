const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const Product = require('./models/product')
mongoose.connect('mongodb://127.0.0.1:27017/farmStand') 
.then(() => {
    console.log("Mongo Connection OPEN")
}).catch(err => {
    console.log("OH NO Mongo Connection Error")
    console.log(err)
})


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true})) // again, this is used to process the post data so we can use it
app.use(methodOverride('_method')) // remember this

const categories = [
    'fruit',
    'vegetable',
    'dairy'
]

app.get('/products', async (req, res) => { // as you can see, we are using async functions to await the stuff we are getting from the database
    const {category} = req.query
    if(category) {
        const products = await Product.find({category : category})
        res.render('products/index', {products, category})
    }else {
        const products = await Product.find({})
        res.render('products/index', {products, category : 'All'})

    }
    
   
})

app.get('/products/new', (req, res) => {
    res.render('products/new', {categories})
})

app.post('/products', async(req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params
    const product =  await Product.findById(id)
    console.log(product)
    res.render('products/show', {product})
})

app.get('/products/:id/edit',async (req, res) => {
    const {id} = req.params
    const product = await Product.findById(id)
    res.render('products/edit', {product , categories})
})

app.put('/products/:id', async (req, res) => {
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators : true, new : true}) // as you can see, we are not really verifying any thing in the form to be lazy. runvalidators runs the validators so it can check
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id)
    res.redirect('/products')
})



app.listen(4000, () => {
    console.log('LISTENING ON PORT 4000')
})