"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: fslse
};
