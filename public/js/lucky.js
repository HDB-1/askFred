
async function getSearchResults() {
    promise = await axios.get("http://localhost:8080/search.json");
    return promise;
}

$(document).ready(() => {
        
       
        
            //event.preventDefault();
            
            getSearchResults().then((response) =>  {
                console.log(response.data.data)
                return response.data.data;}).then((item) => {
                    console.log(item.length)
                let count = 1;
                let index = Math.floor(Math.random()*10);
                
                    $(".container-all-results")
                    .append(`<div class="result" id="result${count}"></div>`)

                    $(`#result${count}`)
                    .append(`<a class="title" id="title${count}"></a>`)

                    $(`#title${count}`).attr("href", `${item[index].link}`);

                    $(`#title${count}`).text(`${item[index].title}`)

                    $(`#result${count}`)
                    .append(`<a class="link" id="link${count}"></a>`)

                    $(`#link${count}`).attr("href", `${item[index].link}`);

                    $(`#link${count}`).text(`${item[index].link}`)

                    $(`#result${count}`)
                    .append(`<p class="snippet" id="snippet${count}"></p>`)

                    $(`#snippet${count}`).text(`${item[index].snippet}`)

                    

               
                
            })
            .catch((error) => console.log(error.message))

})