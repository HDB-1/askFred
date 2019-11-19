// must npm install axios first
const axios = require('axios');

const apiKey = 'AIzaSyBFaFj6n5PwPWLd2EP3fr1PIHVVBRCLtNs';
const engineID = '008950057093096505639:pxznmv2vxxr';
const query = 'books';
const baseURL = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineID}&q=${query}`;

axios.get(baseURL).then((res) => console.log(res))

/*
res.items.title
res.items.htmlTitle
res.items.link
res.items.displayLink
res.items.snippet
res.items.htmlSnpippet
res.items.formattedUrl
res.items.htmlFormattedUrl

console.log(baseURL);
*/