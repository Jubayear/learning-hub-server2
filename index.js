const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const blogs = require('./data/blogs.json')
const course = require('./data/courseList.json')

app.use(cors())


app.get('/', (req, res) => {

    res.send('Hello World!')
})

app.get('/blogs', (req, res) => {
    res.send(blogs)
})

app.get('/course', (req, res) => {
    res.send(course)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const data = course.find(n => n.id == id);
    res.send(data)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})