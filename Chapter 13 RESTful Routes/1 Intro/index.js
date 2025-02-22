const express = require('express')
const app = express()

app.use(express.urlencoded({extended : true}))
// this tells express to parse the request body as url encoded data 
// remember app.use is used to be called on all kinds of http request, all url, all whatever
app.use(express.json()) // turn it into json
app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})

// diff btw post and get
// get is used to retrive info; if you want to provide more data, it will in the query string
// post is used to send info; if you want to send data, it will be in the form of json and other forms but NOT query string
app.post('/tacos', (req, res)=> {
    // console.log(req.body)
    const {meat, qty} = req.body
    res.send(`OK, here are your ${qty} and ${meat} tacos`)
})

app.listen(4000, ()=> {
    console.log('LISTENING ON PORT 4000')
})