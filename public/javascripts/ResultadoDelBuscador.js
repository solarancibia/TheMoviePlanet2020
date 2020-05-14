window.addEventListener("load",  function(){
  var urlFija = " https://image.tmdb.org/t/p/original/"
  var article = ""


  var queryString = new URLSearchParams(location.search)
  var buscador = queryString.get("q")


  fetch("https://api.themoviedb.org/3/search/movie?api_key=489728903a2b25dc358b98664c14a627&query="  + buscador +  "&page=1&include_adult=true")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);

      var arrayDeBuscador = informacion.results
      console.log(arrayDeBuscador);

      for (var i = 0; i < 8; i++) {
        var title = arrayDeBuscador[i].title
        var url =  arrayDeBuscador[i].poster_path
        var id = arrayDeBuscador[i].id

        article = "<li class='miLi'> "
        article +='<div class="uk-card uk-card-default uk-card-body recuadro">'
        article +=    "<a href='/movies/detallePeli?idDePeli="+id+"'>"
        article +=     "<img src= " + urlFija + url + " width='30%'><h1 class='headersSearch'>"+ title + "</h1>"
        article +=    '</div>'
        article +=    "</a>"
        article += "</li>"

        document.querySelector("ul.uk-grid-small").innerHTML += article
      }
        // showSlides(slideIndex);
    })
    .catch(function(error) {
      console.log("Error: " + error);
    })
  }
)
