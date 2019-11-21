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

// Finishing up the body-parser set up
app.use(bodyParser.urlencoded({extended: true})); //find out more....

// Entering 'localhost:8080' into the url presents the homepage
app.get('/', (req, res) => res.status(200).render('index'));

// methods for query
class Query{
    constructor(request){
        this.query = JSON.stringify(request.body.search);
    }

    get retrieve(){
       return this.query;
    }
}

const random = () =>{
    const options = ["food", "money", "news", "famous", "technology", "environment", "gossip"];
    const index = Math.floor(Math.random()*options.length);
    return options[index];
}
// create global variable
let query;

// returns a promise, to get a response from API and
// and sorts data to only get links, snippets and titles
async function simplifyAPIResponse(searchTerm){
    const promise = await googleAPI.search(searchTerm);
    console.log(promise);
    return promise;
}

app.post("/search", (req, res) => {
    query = new Query(req)
    console.log("converted query into string")
    res.redirect("results")
});

app.get("/search.json", (req, res) => {
    simplifyAPIResponse(query.retrieve)
    .then((response) => 
    {let searchResults = googleAPI.simplify(response);
    console.log('search results: ' + searchResults)
    res.json(searchResults)
    })
    .catch((error) => console.log(error.message));
});

// This route presents the results page
app.get("/results", (req, res) => {
    console.log("get request to render results page")
    res.sendFile(path.join(__dirname,"views/results.html")
    )
});

//  This route presents the mail page
app.get("/mail", (req, res) => res.status(200).render('mail'));

app.get("/lucky", (req, res) => {
    console.log("get request to render lucky page")
    res.sendFile(path.join(__dirname,"views/lucky.html"))
});

app.get("/lucky.json", (req, res) => {
    let searchTerm = random();
    simplifyAPIResponse(searchTerm)
    .then((response) => 
    {let searchResults = googleAPI.simplify(response);
    console.log('search results: ' + searchResults)
    res.json(searchResults)
    })
    .catch((error) => console.log(error.message));
});
    
// Listening to the server on port 8080
app.listen(8080, '127.0.0.1', () => console.log('Listening to port 8080..'));
