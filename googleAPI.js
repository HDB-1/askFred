const axios = require('axios') // <- put this in app.js
const fs = require("fs");
// This module depends on axios, express and google custom search JSON api
// it returns 10 search results

module.exports = {
    search: async (query = 'books') => {
        const apiKey = 'AIzaSyCHjZJRHPy0x5-3Ju2P5pAvHIk-RCKDKTk';
        const searchEngineID = '008950057093096505639:8rfl2l3nonh';
        const baseURL = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineID}&q=${query}`;
        console.log(`Base URL: ${baseURL}`);
        axios.get(baseURL).then(res => {
                console.log("Axios response");
                return res.data.items;
            }).then((items) => {
                // Contains all items
                let jsonListOfItems = {'data': []};
                let i = 0;
                items.forEach((item) => {
                    // Individual item
                    jsonListOfItems.data[i] = {'title': `${item.title}`, 'link': `${item.link}`, 'snippet': `${item.snippet}`}
                    i++;
                });
                console.log("Created JSON object that contains list of items");
                return jsonListOfItems;
            // Creates the search.json file (which contains the jsonListOfItems)
            }).then((json) => fs.writeFile("./search.json", JSON.stringify(json, null, 4), (err) => (err) ? console.error("Error error error") : console.log("File has been created"))
            ).catch((error) => console.log(`Error: ${error.message}`));     
    }
}
