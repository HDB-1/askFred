const axios = require('axios') // <- put this in app.js
const fs = require("fs");
// This module depends on axios, express and google custom search JSON api
// it returns 10 search results

module.exports = {
    search: async (query = 'books') => {
        const apiKey = 'AIzaSyA-TdPCCDqB8lR_4TQ2EvfN1mB7L0dX9rg';
        const engineID = '008950057093096505639:dtlta9pfmwz';
        const baseURL = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineID}&q=${query}`;
        console.log(baseURL)
        console.log("created base URL")
        axios.get(baseURL).then(res => {
            console.log("got response from axios")
            return res.data.items;
        }).then((items) => {
            let json = {'data': []};
            let i = 0;
            items.forEach((item) => {
                json.data[i] = {'title': `${item.title}`, 'link': `${item.link}`, 'snippet': `${item.snippet}`}
                i++;
            });
            console.log("created json")
            return json;
        }).then((json) =>{
            fs.writeFile("./search.json", JSON.stringify(json, null, 4), (err) => {
                if (err) {
                    console.error(err);
                    return;
                };
                console.log("File has been created");
            });
            }
        ).catch((error) => console.log(error.message))     
    }
}