$(document).ready(function () {

    //initial buttons array
    var topics = ["Philadelphia", "Miami", "Houston", "San Francisco", "London", "Tokyo"];
    var q = "";
    //dynamically creates initial buttons
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("city");
        a.attr("city-name", topics[i]);
        a.text(topics[i]);
        $("#buttons").append(a);
    };
    $(document).on("click", ".city", function () {
        q = $(this).attr("city-name");
        $("#gifs").empty();
        link();
        // console.log(q);
    })
    //Create new buttons
    $("#add-city").on("click", function(event){
        event.preventDefault();
        var newCity= $("#city").val().trim();
        console.log(newCity);
        var b=$("<button>");
        b.addClass("city");
        b.attr("city-name", newCity);
        b.text(newCity);
        $("#buttons").append(b);
    })

    //create API link to GIPHY within a function
    var link = function () {
        //api key with a limit of 10
        var apiKey = "&api_key=pNuOtpQPGdTvJQ7Vl2v273XMYSQ6hzaH&limit=10";
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + q + apiKey;
        //check to make sure the url is working
        console.log(queryUrl);
        
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
            var city=response.data
            for (i=0;i<city.length; i++){
                // console.log(city[i]);
            //simplifies the variable to append
            var static = city[i].images.fixed_height_still.url;
            var moving = city[i].images.fixed_height.url
                console.log(static);
                console.log(moving)
                //create the image holder
                var img=$("<img>");
                img.addClass("images"+i);
                img.attr("src",static);
                console.log(img);
            //append the new still image
            $("#gifs").append(img);
            $(document).on("click", "img", function(){
                console.log (this.src)
    
                    $(this).attr("src",moving)
     
            })
        }

    })
      



        // console.log(q)
    }
})