const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("dir");
const urlElement = document.getElementById("url");
const secondCard = document.querySelectorAll('.card-body')[1];
const clearAll = document.getElementById("clear-films");

const ui = new UI();
const store = new Storage();

form.addEventListener("submit", function(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if (title === "" || director === "" || url === "") {
        ui.displayMessage("Fill all the Gaps", "danger");
    } else {
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm);
        store.addFilmToStorage(newFilm);
        ui.displayMessage("Film added successfuly...", "success");
    }
    ui.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
})

document.addEventListener("DOMContentLoaded", function() {
    let films = store.getFilmsFromStorage();
    ui.loadFilms(films);
})

secondCard.addEventListener("click", function(e) {
    if (e.target.id === "delete-film") {
        store.deleteFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.innerText);
        ui.deleteFilmFromUI(e.target);

    }
})

clearAll.addEventListener("click", function(e) {
    const tr = document.querySelectorAll('tbody tr');
    tr.forEach(function(tag, index) {
        tag.remove();
    })
    store.deleteAllFromLocal();
    e.preventDefault();
})