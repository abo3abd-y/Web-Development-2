// REST is basucally a protocol that people follow when it comes to receving and sernding data to the client and from teh client

const express = require('express')
const app = express()
const path = require('path')
const {v4 : uuidv4} = require('uuid') // this is npm package that returns a random loing id string
const methodOverride = require('method-override')

app.use(express.urlencoded({extended : true}))
app.use(methodOverride('_method')) // this is used so that we can use patch in the form in html since html only allows get and post. the reason why it's _methid and not method is because form already has a method tag
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

let comments = [
    {
        username: 'Todd',
        comment : 'lol that is so funny',
        id : uuidv4()
    },
    {
        username: 'John',
        comment : 'I think that would be terrible',
        id : uuidv4()
    },
    {
        username: 'Mike',
        comment : 'That looks delicious',
        id : uuidv4()
    },
    {
        username: 'Timothee',
        comment : 'wow, that is awesome',
        id : uuidv4()
    },
    {
        username: 'Ahmed',
        comment : 'There is something weird about this.',
        id : uuidv4()
    },
    {
        username: 'Muhammed',
        comment : 'Wow, there is something peculiar about this thang.',
        id : uuidv4()
    },
    {
        username: 'Shuab',
        comment : 'Lol',
        id : uuidv4()
    },
]

app.get('/comments', (req, res)=>{
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
}) 

app.post('/comments', (req, res) => {
    const {username, comment} = req.body
    comments.push({username, comment, id: uuidv4()})
    res.redirect('/comments') // this literally redirects you to the get requeast of /comments
})

app.get('/comments/:id', (req, res) => {
    console.log(req.params)
    const {id} = req.params // remember req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', {comment})
})

app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', {comment})
})

// patch is used when you are trying to modify part of a something (like comment, but not user)
// put is used when you want to update the WHOLE thing
app.patch('/comments/:id', (req, res)=> {
    const {id} = req.params // remember req.params
    const newComment = req.body.comment
    const foundComment = comments.find(c => c.id === id) // find comment
    foundComment.comment = newComment
    res.redirect('/comments')
})

app.delete('/comments/:id', (req,res) => {
    const {id} = req.params // remember req.params
    comments = comments.filter(c => c.id !== id) // filtering out the non id element
    res.redirect('/comments')
})
app.use(express.json()) 
app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})


app.post('/tacos', (req, res)=> {
    // console.log(req.body)
    const {meat, qty} = req.body
    res.send(`OK, here are your ${qty} and ${meat} tacos`)
})

app.listen(4000, ()=> {
    console.log('LISTENING ON PORT 4000')
})