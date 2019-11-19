const express = require('express')
const app = express()
const port = 8080

app.use(express.static('puclic'));
app.use(express.static('views'));