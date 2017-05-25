
// USER INTERFACE LOGIC
$(document).ready(function() {
  $("#movieForm").submit(function(event) {
    event.preventDefault();

    var movieName = $("#userInputName").val();
    var movieYear = $("#userInputYear").val();
    var movieScore = $("#userInputScore").val();

    var userMovie = movieName + movieYear + movieScore;
    $("#results").append('<tr>' + '<td>' + movieName + '</td>' + '<td>' + movieYear + '</td>' + '<td>' + movieScore + '</td>' + '</tr>');

  });
});
