const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films")
// UI Object Start
const ui = new UI();

// Storage Objesi Üret
const storage = new Storage();

//All events

eventlisteners();

function eventlisteners()
{
    form.addEventListener("submit",addFilm);

    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}


function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        // Hata
        ui.displayMessages("Lütfen tüm alanları doldurunuz","danger");
    }
    else{
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); // Arayüze Film Ekleme
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("Film Başarıyla Eklendi","success");
        
    }

    ui.clearInputs(title,director,url);
    

    e.preventDefault();
}

function deleteFilm(e) {
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.displayMessages("Silme işlemi başarılı","success");
    }
}

function clearAllFilms(){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
}
