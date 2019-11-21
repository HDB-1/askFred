window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

const myFunction = () => (window.pageYOffset > sticky) ? header.classList.add("sticky") : header.classList.remove("sticky");

async function getSearchResults() {
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


   



var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function load() {
         //Check if the current URL contains '#'
   if(document.URL.indexOf("#")==-1)
   {
   // Set the URL to whatever it was plus "#".
   url = document.URL+"#";
   location = "#";

   //Reload the page
   location.reload(true);
   
   }
   console.log("hey")

      resolve('foo');
    }, 1500);
  });

  promise1.then()

})