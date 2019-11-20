const axios = require('axios') // <- put this in app.js
const fs = require("fs");
// This module depends on axios, express and google custom search JSON api
// it returns 10 search results

module.exports = {
    search: async (query = 'books') => {
        const apiKey = 'AIzaSyBXxr4fB7X8eyCf_mdx78Aj71QOMSwKhwk';
        const engineID = '008950057093096505639:ps7kra9kwko';
        const baseURL = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineID}&q=${query}`;
        axios.get(baseURL).then(res => {
            return res.data.items;
        }).then((items) => {
            let json = {
                'data': []
            };
            let i = 0;
            items.forEach((item) => {
                json.data[i] = {
                    'title': `${item.title}`,
                    'link': `${item.link}`,
                    'snippet': `${item.snippet}`
                }
            i++;
            })
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