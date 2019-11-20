
async function getSearchResults() {
    promise = await axios.get("http://localhost:8080/search.json");
    return promise;
}

$(document).ready(() => {

        $('#search').click(
            getSearchResults().then((response) =>  {
                return response.data.data;}).then((items) => {
                let count = 1;
                items.forEach(element => {
                    $(".container-all-results")
                    .append(`<div class="result" id="result${count}"></div>`)

                    $(`#result${count}`)
                    .append(`<a class="title" id="title${count}"></a>`)

                    $(`#title${count}`).attr("href", `${element.link}`);

                    $(`#title${count}`).text(`${element.title}`)

                    $(`#result${count}`)
                    .append(`<a class="link" id="link${count}"></a>`)

                    $(`#link${count}`).attr("href", `${element.link}`);

                    $(`#link${count}`).text(`${element.link}`)

                    $(`#result${count}`)
                    .append(`<p class="snippet" id="snippet${count}"></p>`)

                    $(`#snippet${count}`).text(`${element.snippet}`)
                    count++
                });
                
            }).then()
            .catch((error) => console.log(error.message))
        );


  

  

       
    
 

})