let numberOfFilms = +prompt('Сколько фильмов ты посмотрел? ');

let persnalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (persnalMovieDB.count < 10) {
    alert('Мало смотришь');
} else if (persnalMovieDB.count >= 10 && persnalMovieDB.count <= 30) {
    alert('Молодец');
} else if (persnalMovieDB.count > 30) {
    alert('Киноман');
} else {
    alert('Ошибка');
}