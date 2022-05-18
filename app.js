const express = require('express')

const task1 = require('./routes/task1')
const task2 = require('./routes/task2')
const task3 = require('./routes/task3')

const app = express()
app.use(express.json())

const port = 5000
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})


app.use('/task1', task1)
app.use('/task2', task2)
app.use('/task3', task3)
