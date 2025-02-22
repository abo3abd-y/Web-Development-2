const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, 'Username cannot be blank']
    },
    password : {
        type : String,
        required : [true, 'Password cannot be blank']
    }
})

userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({username})
    const isValid = await bcrypt.compare(password, foundUser.password)
    return isValid? foundUser : false
    
}

userSchema.pre('save', async function(next) { // middle ware to encrypt the password
    if(!this.isModified('password')) return next() // this runs so that if you change your username, we do not change your password as well
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

module.exports = mongoose.model('User', userSchema)