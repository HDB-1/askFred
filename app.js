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
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// To extract form data from the POST request body
app.use(express.urlencoded());
// Finishing up the body-parser set up
app.use(bodyParser.urlencoded({extended: true})); //find out more....

let searchTerm;

const search = (query = "books") => {
    
    const apiKey = 'AIzaSyBFaFj6n5PwPWLd2EP3fr1PIHVVBRCLtNs';
    const engineID = '008950057093096505639:pxznmv2vxxr';
    // const query = 'books';
    const baseURL = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineID}&q=${query}`;
    
    // let response;

    axios.get(baseURL).then((response) => {
        console.log(response);
        // return response;

    }).catch ((error) => {
        console.log(error.message)
    }) ;

    // return response;
};

// Entering 'localhost:8080' into the url presents the homepage
app.get('/', (req, res) => res.status(202).sendFile(path.join(__dirname, 'views/index.html')));
app.post("/search", (req, res) => {
    searchTerm = req.body;
    let result = search(searchTerm)
    console.log(searchTerm);
});

app.get("/result", (req, res) => {

})

// Listening to the server on port 8080
app.listen(8080, '127.0.0.1', () => console.log('Listening to port 8080..'));



console.log(search());