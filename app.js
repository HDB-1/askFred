const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Making an express application
const app = express();

// Render HTML files (from 'views' directory) using the EJS view engine
app.set('views', path.join(__dirname, 'views'));
// Enabling express to use css and js files
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/assets`));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// To extract form data from the POST request body
app.use(express.urlencoded());
// Finishing up the body-parser set up
app.use(bodyParser.urlencoded({extended: true})); //find out more....

// Entering 'localhost:8080' into the url presents the homepage
app.get('/', (req, res) => res.status(200).render('index'));

app.post("/search", (req, res) => {
    const searchTerm = req.body;
    res.redirect("/results")

});

app.get("/data", (req, res) => {
    const url = 'http://127.0.0.1:8080/search.json';
    axios.get(url).then((response) => { 
        res.send(response.data)
    }).catch((error) => res.send(error.message))
});

app.get("/search.json", (req, res) => res.sendFile(path.join(__dirname, "search.json")));

app.get("/results", (req, res) =>  res.status(200).render('results'));
 // res.sendFile(path.join(__dirname, "results"));

 app.get("/mail", (req, res) => res.status(200).render('mail'));
    // res.sendFile(path.join(__dirname, "mail"));
    
// Listening to the server on port 8080
app.listen(8080, '127.0.0.1', () => console.log('Listening to port 8080..'));
