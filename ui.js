class UI {
    addFilmToUI(newFilm) {
        const filmList = document.getElementById("films");
        filmList.innerHTML += `
                <tr>
                    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></img></td>
                    <td>${newFilm.title}</td>
                    <td>${newFilm.director}</td>
                    <td><a href="#" id="delete-film" class="btn btn-danger">Delete Film</a></td>
                </tr>
        `
    }
    clearInputs(a, b, c) {
        a.value = "";
        b.value = "";
        c.value = "";
    }
    displayMessage(message, type) {
        const cardBody = document.querySelector(".card-body");
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.innerText = message;
        cardBody.appendChild(div);
        setTimeout(function() {
            div.remove();
        }, 2000);
    }
    loadFilms(newFilm) {
        const filmList = document.getElementById("films");
        newFilm.forEach(function(film) {
            filmList.innerHTML += `
                    <tr>
                        <td><img src="${film.url}" class="img-fluid img-thumbnail"></img></td>
                        <td>${film.title}</td>
                        <td>${film.director}</td>
                        <td><a href="#" id="delete-film" class="btn btn-danger">Delete Film</a></td>
                    </tr>
            `
        })
    }
    deleteFilmFromUI(film) {
        film.parentElement.parentElement.remove();
    }
}