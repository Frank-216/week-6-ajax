$(document).ready(function(){

    $('button').on('click', function() {
        $('#gifsAppearHere').empty();
        var animal = $(this).data('item');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                // step 1: Run this file, click a button, and see what the data looks like in the browser's console. Open up the Object, then open up the data key, then open up 0. Study the keys and how the JSON is structured.

                console.log(response)

                // step 2: since the image information is inside of the data key then make a variable named results and set it equal to response.data

                //------------put step 2 in between these dashes--------------------
                var results = response.data;
                console.log(response);
                //--------------------------------

                for (var i = 0; i < results.length; i++) {

                    var animalDiv = $('<div>');
                    var p = $('<p>');
                    var rating = results[i].rating;
                    console.log(rating);
                    p.text('Rating: '+rating );

                    var img = $('<img>');
                    img.attr('src',results[i].images.fixed_height.url);

                    animalDiv.append(p);
                    animalDiv.append(img);
                    $('#gifsAppearHere').prepend(animalDiv);
                    
                };

            });
    });
    $(document.body).on('click', '#submitBox', function(){
        
    // Get a value from the input box
        var newItem = $("#addSearch").val();
        console.log(newItem);

    //create new button
    var button = $('<button>');
    button.attr('data-item', newItem);
    button.addClass('btn btn-default');
    button.text(newItem);
    console.log(button)
    debugger;
    //add button to div holder
    $('.button-holder').append(button);




    // Empty the specific <p> element that previously held the todo item.


});

});

    
