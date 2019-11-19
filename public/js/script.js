import Axios from "axios"

$(document).ready(() => {
    let submit_button = document.querySelector("#search");
    $("#search").click(function() {

       
        
            event.preventDefault();
            Axios.get("http://localhost:8080/search").then((response) => console.log(response)).catch((error) => console.log(error.message))

  

  


    })



})