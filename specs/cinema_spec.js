const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function () {
    const actual = cinema.films.title;
    assert.deepStrictEqual(actual, films.title);
  });

  it('should be able to find a film by title', function () {
    var title = 'Blade Runner 2049';
    var actual = cinema.findFilm(title);
    assert.deepStrictEqual(actual.title, title);
  });

  it('should be able to filter films by genre', function(){
    var genre = 'action';
    var actual = cinema.findByGenre(genre);
    var expected = 'Black Panther';
    assert.deepStrictEqual(actual[0].title, expected);
  });


  it('should be able to check whether there are some films from a particular year', function(){
    var year = '2016';
    var actual = cinema.findByYear(year);
    var expected = 'Moonlight';
    assert.deepStrictEqual(actual[0].title, expected);
  });


  it('should be able to check whether there are no films from a particular year', function () {
    var year = '2015';
    var actual = cinema.findByYear(year);
    var expected = 'no films';
    assert.strictEqual(actual, expected);
  });


  it('should be able to check whether all films are over a particular length', function(){
    var length = 100;
    var actual = cinema.checkLength(length);
    var expected = false;
    assert.deepStrictEqual(actual, expected);
  });


  it('should be able to calculate total running time of all films', function(){
    var total = cinema.runningTime();
    var expected = 622;
    assert.deepStrictEqual(total, expected);
  });

});

module.exports = Cinema;
