const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const axios = require('axios');
const googleAPI = require('./googleAPI');

// Making an express application
const app = express();

// Render HTML files (from 'views' directory) using the EJS view engine
app.set('views', `${__dirname}/views`)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Accessing css and js files
app.use(express.static(`${__dirname}/public`));

// To extract form data from the POST request body
app.use(express.urlencoded());

// Parses bodies from URL
app.use(bodyParser.urlencoded({extended: true}));

// Entering 'localhost:8080' into the url presents the homepage
app.get('/', (req, res) => res.status(200).render('index'));

app.post("/search", (req, res) => {
    const query = JSON.stringify(req.body.search)
    console.log(req.body.search);
    console.log("converted query into string");
    googleAPI.search(query)
        .then(res.sendFile(path.join(__dirname, "./search.json")))
        .then( res.redirect("results"))
        .catch((error) => console.log(error.message));
});

// Gets the data from the search.json file
app.get("/data", (req, res) => {
    const url = 'http://localhost:8080/search.json';
    axios.get(url).then((response) => { 
        res.send(response.data)
    }).catch((error) => res.send(error.message))
});

app.get("/search.json", (req, res) => {
    console.log("sent data to search.json");
    res.sendFile(path.join(__dirname, "search.json"))});

// Displays ten search results on the results page
app.post("/results", (req, res) =>  {
    console.log("post request to render results page")
    res.status(200).render('results');
});

// This route presents the results page
app.get("/results", (req, res) => {
    console.log("get request to render results page")
    res.sendFile(path.join(__dirname,"views/results.html"))});

//  This route presents the mail page
app.get("/mail", (req, res) => res.status(200).render('mail'));

//  This route presents the page that emerges as a result of pressing "Feeling Lucky" btn
app.get("/lucky", (req, res) => {
        console.log("get request to render lucky page");
        res.sendFile(path.join(__dirname,"views/lucky.html"));
});
    
// Listening to the server on port 8080
app.listen(8080, '127.0.0.1', () => console.log('Listening to port 8080..'));
