// BACK END LOGIC //
var movieArray = [];
// constructor for userMovies
function userMovie(movieName, movieYear, movieScore) {
  this.movieName = movieName;
  this.movieYear = movieYear;
  this.movieScore = movieScore;
}


// USER INTERFACE LOGIC //

$(document).ready(function() {
// empty array for scores to be pushed into
  var scoreArray = [];

  // function to sort numerically

  $("#movieForm").submit(function(event) {
    event.preventDefault();

    // gathering user inputs from form
    var inputName = $("input#userInputName").val();
    var inputYear = $("input#userInputYear").val();
    var inputScore = parseInt($("input#userInputScore").val());

    var newMovie = new userMovie(inputName, inputYear, inputScore);
    movieArray.push(newMovie);

    // pushing movie score values into empty scoreArray
    scoreArray.push(inputScore);

    // appends results to table
    $("#results").append('<tr>' +
    '<td>' + inputName + '</td>' +
    '<td>' + inputYear + '</td>' +
    '<td>' + inputScore + '</td>' +
    '</tr>');
  });


  // sort when you click on sort button
  $("#sort").click(function() {
    //empties previous results to show new sorted table
    $("#results").empty();

    //function to sort by score
    var sortedList = movieArray.slice(0);
    sortedList.sort(function(a, b) {
      return b.movieScore - a.movieScore;
    });

    //for loop to sort through sortedList array and display in table
    for (i =0; i < sortedList.length; i++) {
    $("#results").append('<tr>' +
    '<td>' + sortedList[i].movieName + '</td>' +
    '<td>' + sortedList[i].movieYear + '</td>' +
    '<td>' + sortedList[i].movieScore + '</td>' +
    '</tr>');
  }
});

});
