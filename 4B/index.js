const http = require('http')
const express = require('express')

const app = express()
const port = 5000
const db = require('./connection/db')
const upload = require('./middlewares/fileUpload')

app.set('view engine', 'hbs')   // set view engine hbs
app.use('/public', express.static(__dirname + '/public'))    // set public path/folder
app.use('/uploads', express.static(__dirname + '/uploads'))    // set public path/folder
app.use(express.urlencoded({ extended: false }))    // encode / conver



// APP LISTEN
app.listen(port, function (req, res) {
    console.log(`server listen on port ${port}`);
}) 