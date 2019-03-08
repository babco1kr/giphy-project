// Global variables
var topics = ["World of Warcraft", "Overwatch", "League of Legends", "Dota 2", "Fortnite", "Smashbros", "Mariokart", "Runescape", "Pokemon", "Call of Duty", "Counter Strike Go"];

$(document).ready(function () {
    function gameTitles () {
        $("#buttonArea").empty();
        for (i = 0; i < topics.length; i++) {
            var button = $("<button>");
            button.addClass("btn btn-secondary game m-1").attr("title", topics[i]).text(topics[i]);
            $("#buttonArea").append(button);
        }
    }
    gameTitles();

    $("#addGame").on("click", function(event) {
        event.preventDefault();
        var game = $("#game-input").val().trim();
        topics.push(game);
        gameTitles();
    })

    $(document).on("click", ".game", populateGifs);

    function populateGifs () {
        $("#gifHoldingArea").empty();
        var game = $(this).attr("title");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + game + "&api_key=dc6zaTOxFJmzC&limit=10"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        for (i = 0; i < response.data.length; i++) {
            var gifDiv = $("<div>");
            var image = $("<img>");
            var rating = $("<h3>")
            rating.text(response.data[i].rating);
            image.addClass("gif");
            image.attr("src", response.data[i].images.fixed_height_still.url).attr("game-animate", response.data[i].images.fixed_height.url);
            image.attr("game-still", response.data[i].images.fixed_height_still.url).attr("motionstatus", "still");
            gifDiv.append(rating).append(image);
            $("#gifHoldingArea").prepend(gifDiv);
        }
    })
        
    }

    $("#gifHoldingArea").on("click", ".gif", function() {
        var motion = $(this).attr("motionstatus");
        console.log(motion);

        if (motion === "still") {
            $(this).attr("src", $(this).attr("game-animate"));
            $(this).attr("motionstatus", "animate");
            
        }
        else {
            $(this).attr("src", $(this).attr("game-still"));
            $(this).attr("motionstatus", "still");
        }
    })

})