// Global variables
var topics = ["World of Warcraft", "Overwatch", "League of Legends", "Dota 2", "Fortnite", "Smashbros", "Mariokart?", "Runescape", "Pokemon"];

$(document).ready(function () {
    function gameTitles () {
        $("#buttonArea").empty();
        for (i = 0; i < topics.length; i++) {
            var button = $("<button>");
            button.addClass("button game").attr("title", topics[i]).text(topics[i]);
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
            var image = $("<img>");
            image.attr("src", response.data[i].images.fixed_height.url);
            $("#gifHoldingArea").append(image);
        }
    })
        
    }

})