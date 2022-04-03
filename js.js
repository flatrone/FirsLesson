let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов ты посмотрел? ');

    while (numberOfFilms == '' ||
        numberOfFilms == null ||
        isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов ты посмотрел? ');
    }

}

start();

let persnalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из поледних просмотренных  фильмов? '),
            b = prompt('На сколько оцените его? ');
        
        if (a != null && a.length < 50 && b != null && b != '') {
            persnalMovieDB.movies[a] = b;
            console.log('gotovo');
        } else {
            console.log('net');
            i--;
        }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (persnalMovieDB.count < 10) {
        alert('Мало смотришь');
    } else if (persnalMovieDB.count >= 10 && persnalMovieDB.count <= 30) {
        alert('Молодец');
    } else if (persnalMovieDB.count > 30) {
        alert('Киноман');
    } else {
        alert('Ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (persnalMovieDB.privat == false) {
        console.log(persnalMovieDB);
    }
}

let genres = [];

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`);
        persnalMovieDB.genres.push(a);
    }
}