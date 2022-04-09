'use strict';

let numberOfFilms;





let persnalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        numberOfFilms = +prompt('Сколько фильмов ты посмотрел? ');
    
        while (numberOfFilms == '' ||
            numberOfFilms == null ||
            isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов ты посмотрел? ');
        }
    
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (persnalMovieDB.count < 10) {
            alert('Мало смотришь');
        } else if (persnalMovieDB.count >= 10 && persnalMovieDB.count <= 30) {
            alert('Молодец');
        } else if (persnalMovieDB.count > 30) {
            alert('Киноман');
        } else {
            alert('Ошибка');
        }
    },
    
    showMyDB: function() {
        if (persnalMovieDB.privat == false) {
            console.log(persnalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (persnalMovieDB.privat) {
            persnalMovieDB.privat = false;
        } else {
            persnalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
    let genres = [];
        let a = '';
        while (a == false) {
            a = prompt(`Ваш любимый жанр под номером ${i}`);
        }
            
        persnalMovieDB.genres = genres.split(', ');
    }
    

};

persnalMovieDB.start();
persnalMovieDB.rememberMyFilms();
persnalMovieDB.detectPersonalLevel();


