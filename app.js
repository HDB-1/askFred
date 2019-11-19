const http = require('http');
// Importing body-parser pkg
const bodyParser = require('body-parser');
// Importing path pkg
const path = require('path');
// Importing express pkg
const express = require('express');
// Making an express application
const app = express();
// Importing ejs
const ejs = require('ejs');
//
let searchTerm;


// Render HTML files (from 'views' directory) using the EJS view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Enabling express to use css and js files
app.use(express.static(`${__dirname}/public`));

// To extract form data from the POST request body
app.use(express.urlencoded());

// Finishing up the body-parser set up
app.use(bodyParser.urlencoded({
    extended: true
}));

// Entering 'localhost:8080' into the url presents the homepage
app.get('/', (req, res) => res.status(202).render('index'));

app.post("/search", (req, res) => {
    searchTerm = req.body;
    console.log(req.body);
})

app.get("/result", (req, res) => {
    
})

// Listening to the server on port 8080
app.listen(8080, '127.0.0.1', () => console.log('Listening to port 8080..'));

function search(query = "books") {
    const axios = require('axios');

    const apiKey = 'AIzaSyBFaFj6n5PwPWLd2EP3fr1PIHVVBRCLtNs';
    const engineID = '008950057093096505639:pxznmv2vxxr';
    // const query = 'books';
    const baseURL = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineID}&q=${query}`;
    let response;

    axios.get(baseURL).then((response) => {
        response = res.request;
    }).catch ((error) => {
        console.log(error.message)
    }) ;
    return response;
};

console.log(search());