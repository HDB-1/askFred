const axios = require('axios') // <- put this in app.js
// This module depends on axios, express and google custom search JSON api
// it returns 10 search results

module.exports = {
    simplify: (res) => {
        try{
        let items = res.data.items;
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
        console.log('res' + res)
        console.log('json: '+ json)
        return json;
        
    } catch(error) {
        console.log(error.message)
    }
    },
    search: async (query = 'books') => {
        const apiKey = 'AIzaSyCHjZJRHPy0x5-3Ju2P5pAvHIk-RCKDKTk';
        const engineID = '008950057093096505639:8rfl2l3nonh';
        const baseURL = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineID}&q=${query}`;
        console.log(baseURL)
        console.log("created base URL")
        const promise = await axios.get(baseURL);
        return promise;
    }
}
