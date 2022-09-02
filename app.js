 const express = require('express')
const app = express()
const port = 3000
const HOST = '0.0.0.0'


app.get('/', (req, res) => {
    res.send('i am .now we updated service from jenkins build')
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
