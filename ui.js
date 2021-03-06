function UI(){

}
UI.prototype.addFilmToUI = function(newFilm){
//     <tr>
//     <td><img src="" class="img-fluid img-thumbnail"></td>
//     <td></td>
//     <td></td>
//     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//   </tr> -->
//   <!-- <tr>
//     <td><img src="" class="img-fluid img-thumbnail"></td>
//     <td></td>
//     <td></td>
//     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//   </tr>

    const filmList = document.getElementById("films");

    filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" ></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>


    `;
}
UI.prototype.clearInputs = (element1,element2,element3) => {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.displayMessages = function(message,type){
    const cardBody = document.querySelectorAll(".card-body")[0];

    const div = document.createElement("div");
    const button = document.createElement("button");
    div.className = `alert alert-${type} alert-dismissible fade show`;
    div.setAttribute("role","alert");
    div.textContent = message;

    button.type = "button";
    button.className = "close";
    button.setAttribute("data-dismiss","alert");
    button.setAttribute("aria-label","Close");
    button.innerHTML = "<span aria-hidden='true'>&times;</span>"

    div.appendChild(button);


    cardBody.appendChild(div);

//     <div class="alert alert-warning alert-dismissible fade show" role="alert">
//      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//          <span aria-hidden="true">&times;</span>
//      </button>
// </div>
}
UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films");

    films.forEach(function(film){
        filmList.innerHTML +=  `<tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail" ></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    ` 
    })
}
UI.prototype.deleteFilmFromUI = function(element){

    element.parentElement.parentElement.remove();
}
UI.prototype.clearAllFimsFromUI = function(){
    const filmList = document.getElementById("films");

    // filmList.innerHTML = "";

    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove();
    }
}