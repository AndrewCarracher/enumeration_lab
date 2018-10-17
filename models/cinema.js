const Cinema = function (films) {
  this.films = films;
};



Cinema.prototype.findFilm = function (title) {
  return this.films.find( film => film.title === title);
};

module.exports = Cinema;
