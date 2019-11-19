const http = require('http');
// Importing body-parser pkg
const bodyParser = require('body-parser');
// Importing path pkg
const path = require('path');
// Importing express pkg
const express = require('express');
// Making an express application
const axios = require('axios');
const app = express();
// Render HTML files (from 'views' directory) using the EJS view engine
app.set('views', path.join(__dirname, 'views'));
// Enabling express to use css and js files
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/views`));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// To extract form data from the POST request body
app.use(express.urlencoded());
// Finishing up the body-parser set up
app.use(bodyParser.urlencoded({extended: true})); //find out more....


// Entering 'localhost:8080' into the url presents the homepage
app.get('/', (req, res) => res.status(202).sendFile(path.join(__dirname, 'views/index.html')));

app.post("/search", (req, res) => {
    searchTerm = req.body;
});

app.get("/result", (req, res) => {
    res.sendFile(path.join(__dirname, "search.json"));
});

app.get("/mail", (req, res) => {
    res.sendFile(path.join(__dirname, "views/mail.html"));
});

// Listening to the server on port 8080
app.listen(8080, '127.0.0.1', () => console.log('Listening to port 8080..'));
