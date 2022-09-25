"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++){
  const a = prompt("Один из последных просмотренных фильмов?", ""),
        b = prompt("На сколько оцениете его?", "");

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personMovieDB.movies[a] = b;
    console.log('Done!');
  } else {
    console.log('Error');
    i--;
    
  }
}
if(personMovieDB.count < 10){
  alert('Вы посмотрели мало фильмов');
} else if(personMovieDB.count >= 10 && personMovieDB.count < 30 ){
  alert('Вы классический зритель!');
}else if(personMovieDB.count >= 30){
  alert('Вы киноман!');
}else{
  alert('Произошла ошибка!');
}


console.log(personMovieDB);

