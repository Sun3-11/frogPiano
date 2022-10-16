const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    // res.send("HI")
   res.render('comments/index.ejs', { comments })
   

})


let comments = [
    {   id:uuid(), 
        username: 'Todd',
        comment: 'lol that so funny!'
    },
    {
        id:uuid(), 
        username: 'Sk3er',
        comment: 'so Great'
    },
    {
        id:uuid(), 
        username: 'onlywiner',
        comment: 'Woof woof wooooof'
    },
   
    {
        id:uuid(),
        username: 'Mooo',
        comment: 'MeeeeeeWWWWWWooooooooo meeeeeeeew'
    }
  
]
//new comments
app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

//show ditiales comment redirect back
app.post('/comments', (req, res) => {
    //console.log(req.body)
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuid()})
    res.redirect('/')
   // res.send("IT Worked!")
})

//show comments
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find( c => c.id === id)
    res.render('comments/show', {comment})
})


//edit comments
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find( c => c.id === id)
    res.render('comments/edit', { comment })

})
//edit comments redirct
app.patch('/comments/:id',  (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment
    const foundComment = comments.find( c => c.id === id)
   foundComment.comment = newCommentText;
   res.redirect('/')
    //res.send("All Good!")
})
//delete comments
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/');
})


app.listen(3000, () => {
    console.log("ON PORT 3000!");
})