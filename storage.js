class Storage {
    addFilmToStorage(film) {
        let films = this.getFilmsFromStorage();
        films.push(film);
        localStorage.setItem("films", JSON.stringify(films));
    }
    getFilmsFromStorage() {
        let films;
        if (localStorage.getItem("films") === null) {
            films = [];
        } else {
            films = localStorage.getItem("films");
            films = JSON.parse(films);
        }
        return films;
    }
    deleteFromStorage(filmTitle) {
        let films = this.getFilmsFromStorage();
        films.forEach(function(film, index) {
            if (film.title === filmTitle) {
                films.splice(index, 1);
            }
        })
        localStorage.setItem("films", JSON.stringify(films));
    }
    deleteAllFromLocal() {
        localStorage.removeItem("films");
    }
}