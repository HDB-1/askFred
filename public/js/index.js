$(document).ready(function() {
    $("#searchbar").on("input", function() {
       $(this).css('background-color', 'rgb(255, 255, 0)');
    }).blur(function() {
        // If the text input box has no text..
        if ($(this).val().length === 0 && $(this).val() === '') {
            // Retain its original colour.
            $(this).css('background-color', 'rgb(235, 235, 235)');
        } else {
            // Otherwise, its background colour should be yellow 
            $(this).css('background-color', 'rgb(255, 255, 0)');
        }
    });
});