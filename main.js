var topics = [];


// ref = "http://api.giphy.com/v1/gifs/search?q=cheese&api_key=5AVGKp6b7GTfFTkb28RWeSs1abZpiNzd"
                    //
                    //
                    //

function animalSearch(newSearch) {
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + newSearch + "&api_key=5AVGKp6b7GTfFTkb28RWeSs1abZpiNzd"
    $.ajax({
        url: queryURL,
        method: "GET",
        limit: 10,
        rating: "g"
    }).done((response) => {
        console.log(response)

        if (response.data.length === 0) {
            alert("err animal not found ()");
            $("#user-input").val("");
            return;

        } else {
            getGifs(newSearch);
            topics.push(newSearch);
            postButton();
            $("#user-input").val("");
        }
    });
}

                    //
                    //  
                    //

    function getGifs(search) {
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=5AVGKp6b7GTfFTkb28RWeSs1abZpiNzd"
        $.ajax({
            url: queryURL,
            method: "GET",
            limit: 10,
            rating: "g"
        }).done((response) => {
            console.log(response);
            postgifs(response);
        })
    };

                    //
                    //
                    //

    function postgifs(response){

        $("#post-gif").empty();

        for(var i = 0; response.data.length; i++) {
            //generate div for each gif
            var gifFill = $("<div class= 'gif-pull-left'>")
            //store gif rating
            var rating = response.data[i].rating;
            //element to store gif rating info
            var ratingInfo = $("<div class='rating'>").text("Rated: " + rating);
            //display gif rating
            gifFill.append(ratingInfo)

            //store og for animations
            var movinGif = response.data[i].original.url;
            
            //store still gif
            var stillGif = response.data[i].images.original_still.url;

            //append to <img>
            var toTable = $("<img").attr("src", stillGif);
            
            toTable.addClass("gif");
            toTable.attr("data-still", stillGif);
            toTable.attr("data-movin", movinGif);
            toTable.attr("data-state", "still")

            gifFill.append(toTable)

            $("#show-gif").append(gifFill)

        }

        gifListen()

    }

                    //
                    //
                    //

    function clickListen() {
        $(".topic").on("click", function(){
    
            var topic = $(this).attr("data-name");
            
            getGifs(topic);
        });
    };

                    //
                    //
                    //

//    function gifListen()




















