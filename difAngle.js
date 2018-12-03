$(document).ready(function () {
    var gifDomain = "http://api.giphy.com/v1/gifs/search?q=";
    var api_key = "&api_key=5AVGKp6b7GTfFTkb28RWeSs1abZpiNzd";
    var $input = $("#user-input");
    var $submit = $("#submit");
    var $fillBox = $("#fill-box")
    var res = console.log(data.data[i].images.downsized.url)




    function getGifs(inputVal) {
        $.get(gifDomain + inputVal + api_key + "&limit=10")
            .done(function (data) {
                for (var i = 0; res.length < 10; i++) {
                data.data[i].images.downsized.url
                }
                // thruGifs();
            });
    };
    $submit.on("click", function (e) {
        e.preventDefault()
        var inputVal = $input.val().trim();
        getGifs();
    })



    function postGifs() {
        var 
    }

    // function thruGifs(){
    //     for(var i = 0; res.length; i++){

    //     }
    // }
    // function dispGifs(){
    //     var $newGif = res.append($("img"));
    //     var $newDiv = $("div")


    //     $fillBox.append($newGif)
    // }

    // function postGifs(response){

    //     for(var i = 0; response.data.length; i++){

    //         // var rating = response.data[i].rating;
    //         var ratingInfo

    //         var movinGif = response.data[i].original.url

    //         var stillGif = response.data[i].images.original_still.url



    //     }
    // }


})
