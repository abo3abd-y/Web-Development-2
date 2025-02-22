const express = require('express')
const app = express()
const shelterRoutes = require('./routes/shelters')
const dogsRoutes = require('./routes/dogs')
const adminRoutes = require('./routes/admin')


app.use('/shelters', shelterRoutes) // routers is a way to organize routers of the same name that you do not have to repeat over and over
app.use('/dogs',dogsRoutes )
app.use('/admin', adminRoutes)


app.listen(4000, () => {
    console.log('LISTENING ON PORT 4000')
})