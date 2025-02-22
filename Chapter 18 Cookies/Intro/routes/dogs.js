const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("All dogs")
})
router.get('/:id', (req, res) => {
    res.send("Viewing one id")
})
router.get('/:id/edit', (req, res) => {
    res.send("Editing one dog")
})


module.exports = router