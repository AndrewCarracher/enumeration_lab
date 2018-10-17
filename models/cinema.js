const Cinema = function (films) {
  this.films = films;
};



Cinema.prototype.findFilm = function (title) {
  return this.films.find( film => film.title === title);
};

Cinema.prototype.findByGenre = function (genre) {
  return this.films.filter( film => film.genre === genre);
};

Cinema.prototype.findByYear = function (year) {
  let films = this.films.filter (film => film.year == year);
  if(typeof(films[0]) != "undefined"){
    return films;
  }
  else {
    return 'no films';
  }
};

Cinema.prototype.checkLength = function (length) {
  return this.films.every(film => film.length > length);
};

Cinema.prototype.runningTime = function () {
  var filmLengths = this.films.map(film => film.length)
  return filmLengths.reduce ( (acc, n) => acc + n);
};

module.exports = Cinema;
