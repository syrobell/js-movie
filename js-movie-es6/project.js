const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films")


//All events

eventlisteners();

function eventlisteners()
{
    form.addEventListener("submit",addFilm);

    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
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
        UI.displayMessages("Lütfen tüm alanları doldurunuz","danger");
    }
    else{
        const newFilm = new Film(title,director,url);
        
        UI.addFilmToUI(newFilm); // Arayüze Film Ekleme
        Storage.addFilmToStorage(newFilm);
        
        
        UI.displayMessages("Film Başarıyla Eklendi","success");
    }

    
    UI.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}

function deleteFilm(e) {
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        UI.displayMessages("Silme işlemi başarılı","success");
    }
}

function clearAllFilms(){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
}
