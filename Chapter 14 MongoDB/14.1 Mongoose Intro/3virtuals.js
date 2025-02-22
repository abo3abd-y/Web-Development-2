const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/shopApp') 
.then(() => {
    console.log("Connection OPEN")
}).catch(err => {
    console.log("OH NO ERROR")
    console.log(err)
})

const personSchema = new mongoose.Schema({
    first : String,
    last : String
})

personSchema.virtual('fullName').get(function () { // what is this? exists for each  object or person oppsoite of statis and it acts like you are adding more attributes to this such as full name. however, it does not actually do that, it only exits on mongoose and does not acutally add this to the db
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function () { // this is a middleware which means that this is supposed to run before save is executed
    this.first = 'YO' // so we are updating the first and last before save is called
    this.last = 'MAMA'
    console.log('ABOUT TO SAVE')
})
personSchema.post('save', async function () { // this is suppposed to run after save is executed
    console.log('ABOUT TO SAVE')
})

const Person = mongoose.model('Person', personSchema)