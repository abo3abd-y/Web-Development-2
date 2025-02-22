const express = require('express')
const router = express.Router()

router.use((req, res, next) => { // this middleware is only for this FILE!!
    if (req.query.isAdmin) {
        next()
    }
    res.send("SORRY NOT ADMIN")
})


router.get('/topsecret', (req, res) => {
    res.send("This is top secret")
})
router.get('/deleteeverything', (req, res) => {
    res.send("Deleting everything")
})


module.exports = router