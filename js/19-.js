// Урок 19 практическое задание
let number0fFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

let personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильсов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильсов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
    