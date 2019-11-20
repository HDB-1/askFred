// must npm install axios first
const axios = require('axios');

/*
const apiKey = 'AIzaSyBFaFj6n5PwPWLd2EP3fr1PIHVVBRCLtNs';
const engineID = '008950057093096505639:pxznmv2vxxr';
const query = 'books';
const baseURL = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineID}&q=${query}`;

console.log(baseURL);

axios.get(baseURL).then(res => 
{
    console.log(res.data.items)
}).catch((error) => console.log(error.message))

/*
res.data.items.title
res.data.items.htmlTitle
res.data.items.link
res.data.items.displayLink
res.data.items.snippet
res.data.items.htmlSnpippet
res.data.items.formattedUrl
res.data.items.htmlFormattedUrl
console.log(baseURL);
*/



const url = 'http://127.0.0.1:8080/result';

axios.get(url).then((response) => console.log(response))




