const express = require('express');
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port = 8080, () => {
    console.log("running on port 8080")
})