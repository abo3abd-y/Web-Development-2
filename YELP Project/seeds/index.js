// this file basically populates db with initial data in case we need that

const mongoose= require('mongoose')
const campground = require('../models/campground')
const cities = require('./cities')
const {places, descriptors} = require('./seedHelpers')

mongoose.connect('mongodb://localhost:27017/yelp-camp') // db name is yelp-camp


const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', ()=> {
    console.log('database connected')
})

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]

const seedDB = async () => {
    await campground.deleteMany({})
    for(let i = 0; i< 50; i++){
        const random1000 = Math.floor(Math.random() * 1000)
        const price= Math.floor(Math.random() * 20) + 10
        const camp = new campground({
            location : `${cities[random1000].city}, ${cities[random1000].state}`,
            title : `${sample(descriptors)} ${sample(places)}`,
            image:`https://picsum.photos/400?random=${Math.random()}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet molestiae voluptatibus beatae unde est tenetur animi dolorem, repudiandae laborum eligendi mollitia perspiciatis nihil ipsum totam consectetur accusantium porro voluptate!',
            price : price
        })
        await camp.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})