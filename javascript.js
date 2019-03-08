// Global variables
var topics = ["World of Warcraft", "Overwatch", "League of Legends", "Dota 2", "Fortnite", "Smashbros", "Mariokart?", "Runescape", "Pokemon"];

$(document).ready(function () {
    function gameTitles () {
        for (i = 0; i < topics.length; i++) {
            var button = $("<button>");
            button.addClass("button").attr("title", topics[i]).text(topics[i]);
            $("#buttonArea").append(button);
        }
    }
    gameTitles();
})