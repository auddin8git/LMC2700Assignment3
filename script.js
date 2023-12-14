let allMovies = [];

class Movie {
  constructor(title, rating, haveWatched) {
    this.title = title;
    this.rating = rating;
    this.haveWatched = haveWatched;
  }
}

let addMovie = (movie) => {
  allMovies.push(movie);
  displayResult("A new movie is added");
  printMovies();
}

let printMovies = () => {
  let output = "Printing all movies....<br>";
  allMovies.forEach(movie => {
    output += `${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}<br>`;
  });
  output += `<br>You have ${allMovies.length} movies in total`;
  displayResult(output);
}

let highRatings = (rating) => {
  let highRatedMovies = allMovies.filter(movie => movie.rating > rating);
  let output = `Printing movie(s) with a rating higher than ${rating}<br>`;
  highRatedMovies.forEach(movie => {
    output += `${movie.title} has a rating of ${movie.rating}<br>`;
  });
  output += `<br>In total, there are ${highRatedMovies.length} matches`;
  displayResult(output);
}

let changeWatched = (title) => {
  let movie = allMovies.find(movie => movie.title === title);
  if (movie) {
    movie.haveWatched = !movie.haveWatched;
    displayResult("Changing the status of the movie...");
    printMovies();
  }
}

let displayResult = (output) => {
  document.getElementById("output").innerHTML += `<div>${output}</div>`;
}

// Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x, y, z);

displayResult("----------------<br>running program......<br>----------------");
printMovies();

let movie1 = new Movie("Parasite", 2, false);
addMovie(movie1);

changeWatched("Spiderman");

changeWatched("Spiderman");

highRatings(3.5);
