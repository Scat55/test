"use strict";

let numberOfFilms;

function start () {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    } 
}

start();

const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++){
        const a = prompt("Один из последных просмотренных фильмов?", "").trim(),
              b = prompt("На сколько оцениете его?", "");
   
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personMovieDB.movies[a] = b;
            console.log('Done!');
    } else {
            console.log('Error');
            i--;
      
        }
    }
}
// rememberMyFilms();


function detectPersonalLevel () {
    if(personMovieDB.count < 10){
        alert('Вы посмотрели мало фильмов');
    } else if(personMovieDB.count >= 10 && personMovieDB.count < 30 ){
        alert('Вы классический зритель!');
    }else if(personMovieDB.count >= 30){
        alert('Вы киноман!');
    }else{
        alert('Произошла ошибка!');
    }
}
// detectPersonalLevel();
  
function showMyDB (hidden) {
  if (!hidden) {
    console.log(personMovieDB);
    }
}
showMyDB(personMovieDB.privat);

function wruteYourGeners () {
    for (let i = 1; i <= 3; i++){
        personMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
wruteYourGeners();

