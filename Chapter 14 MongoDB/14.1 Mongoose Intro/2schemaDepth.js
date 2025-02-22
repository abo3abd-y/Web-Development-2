const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/shopApp') 
.then(() => {
    console.log("Connection OPEN")
}).catch(err => {
    console.log("OH NO ERROR")
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name : { // the short way of doing this assumes that we only want the type to be whatever like String, but this is the long way
        type : String,
        required : true, // this basically says that when you add a new thing, name must be included otherwise an error will be produced
        maxLength : 20 // max is 20, otherwise error
    },
    price : {
        type : Number,
        min : [0, 'Price Must be positive ya dododo!'], // so we provide a minimum of 0 and if it is violated, it prints the next message 'Price Must be posituve, ya dododo'
        required : true
    },
    onSale : {
        type : Boolean,
        default : false // so if you do not provide this, default is false
    },
    categories : { // this should be an array only consisting of strings
        type : [String],
        default : []
    },
    qty : {
        online : {
            type : Number,
            default : 0
        },
        inStore : {
            type : Number,
            default : 0
        }
    },
    size : {
        type : String,
        enum : ['S', 'M', 'L'] // you can only use these values, other wise, you will get an error
    }
})

productSchema.methods.greet = function () { // as you can see, we are creating a method that all new Products can use (or instances of Product)
    console.log('HELLOOOOOOOO!!!! HI !!!! HOWDY!!!')
    console.log(`Hello ${this.name}`)
}

productSchema.methods.toggleOnSale = function() { // as you can see, we added another function so that instances of functions have access to this
    this.onSale = !this.onSale // toggle onSale
    return this.save() // save it to the database and return it. REMEMBER save() does not return a promise but returns a thenable object
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat) // now we can add new categories
    return this.save()
} 

productSchema.statics.fireSale = function () {
    return this.updateMany({}, {onSale : true, price : 0})
}

const Product = mongoose.model('Product', productSchema)



Product.fireSale().then(res => console.log(res)) // we use the static thing for all stuff under it and not just the individual parts

const findProduct = async () => {
    const foundProduct = await Product.findOne({name : 'Mountain Bike'})
    // foundProduct.greet();
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
    await foundProduct.addCategory('OutDoors')
    console.log(foundProduct)

}
// findProduct()


// const bike = new Product({name : 'Cycling Jersey', price : 28.5, categories :['Cycling'], size : 'M'})
// bike.save() // save basically actually saves this data into the db
// .then(data => {
//     console.log('IT WORKED')
//     console.log(data)
// })
// .catch(err => {
//     console.log('OH NO ERROR')
//     console.log(err)
// })

// Product.findOneAndUpdate({name : 'Tire Pump'}, {price : 50}, {new : true, runValidators : true}) // new true means that it will return the newly modofied thing that we changed
// .then(data => {
//     console.log('IT WORKED')
//     console.log(data)
// })
// .catch(err => {
//     console.log('OH NO ERROR')
//     console.log(err)
// }) 

// run validators : basically it enforces the contraints that we defined above because it avoids them on default and w ehave to tell them that hey you need to know about them