"use strict";

const personMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start:() => {
    personMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (personMovieDB.count == '' || personMovieDB.count == null || isNaN(personMovieDB.count)) {
      personMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    } 
  },
  rememberMyFilms: () => {
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
  },
  detectPersonalLevel: () => {
    if(personMovieDB.count < 10){
        alert('Вы посмотрели мало фильмов');
    } else if(personMovieDB.count >= 10 && personMovieDB.count < 30 ){
        alert('Вы классический зритель!');
    }else if(personMovieDB.count >= 30){
        alert('Вы киноман!');
    }else{
        alert('Произошла ошибка!');
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
    console.log(personMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    if (personMovieDB.privat){
      personMovieDB.privat = false;
    } else{
      personMovieDB.privat = true;
    }
  },
  wruteYourGeners: () => {
    for (let i = 1; i <= 3; i++){
      let gener = prompt(`Ваш любимый жанр под номером ${i}`);

      if (gener === '' || gener === null){
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      } else{
        personMovieDB.genres[i - 1] = gener;
      }
    }
    personMovieDB.genres.forEach((item, i) => {
      console.log(`Любимы жанр ${i + 1} - это ${item}`);
    });
  }
};

