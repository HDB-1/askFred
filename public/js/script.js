window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

async function getSearchResults() {
    await axios.get("http://localhost:8080/results");
    promise = await axios.get("http://localhost:8080/search.json");
    return promise;
}

$(document).ready(() => {
  getSearchResults().then((response) =>  {
      console.log(response.data.data)
      return response.data.data;}).then((x) => {
          console.log(x)
      let count = 1;
      
      x.forEach(element => {
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
  })
  .catch((error) => console.log(error.message));
})