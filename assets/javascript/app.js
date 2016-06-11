$(document).ready(function(){
      
    $('#submitBox').on('click', function() {
        // Get a value from the input box
            var newItem = $("#addSearch").val();
            console.log(newItem);
      
        var button = $('<button>');
        button.addClass('btn btn-default gif');
        button.attr('data-item', newItem);
        console.log(button.data('item'));
        button.text(newItem);
        console.log(button)
            //add button to div holder
        $('.button-holder').append(button);
            // clear the submit box 
        $('#addSearch').val('');
        
        //create new button
        

        return false;
        
    });
// create two images.  One holds the still image with a still class, the other holds a gif image with a gif class
// originally display the still image and hide the gif image.  
//When the over event takes place hide the stiff image and display the gif image and vice versa
    $('img').on('click',function(){
        console.log('Mouse is over image');
        $(this).addClass('check') ;   
    });

    $(document.body).on('click', '.gif', function(){
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
                    animalDiv.addClass(i);
                    
                    var p = $('<p>');
                    var rating = results[i].rating;
                    console.log(rating);
                    p.text('Rating: '+rating );

                    var imgGif = $('<img>');
                    var imgStill = $('<img>');
                    // add a class that will stop the gif when it is loaded. Make the img src a still of the image. On hover switch it to the moving gif. 
                    imgStill.attr('src',results[i].images.fixed_height_still.url);
                    imgStill.addClass("still");

                    //create img Gif
                    imgGif.attr('src',results[i].images.fixed_height.url);
                    imgGif.addClass('move');

                    // hide gif image
                    imgGif.hide();
                    // Add all items to the div
                    animalDiv.append(p);
                    animalDiv.append(imgStill);
                    animalDiv.append(imgGif);
                    $('#gifsAppearHere').prepend(animalDiv);
                    
                    $('img').hover(function(){
                      console.log("entered the image")
                      imgStill.hide();
                        imgGif.show();
                     }, function(){
                         imgStill.show();
                        imgGif.hide();
                    });
                };
                

                

            });

        
    });


});

    
