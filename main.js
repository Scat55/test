"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("Один из последных просмотренных фильмов?", ""),
      b = prompt("На сколько оцениете его?", ""),
      c = prompt("Один из последных просмотренных фильмов?", ""),
      d = prompt("На сколько оцениете его?", "");

personMovieDB.movies[a] = b;
personMovieDB.movies[c] = d;
console.log(personMovieDB.movies);