let numberOfFilms = prompt('Сколько фильмов ты посмотрел? ');

let persnalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movie = prompt('Один из поледних просмотренных  фильмов? ');
let score = prompt('На сколько оцените его? ');
let movie1 = prompt('Один из поледних просмотренных  фильмов? ');
let score1 = prompt('На сколько оцените его? ');

persnalMovieDB.movies[movie] = score;
persnalMovieDB.movies[movie1] = score1;