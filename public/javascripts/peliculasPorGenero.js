window.addEventListener("load",  function(){
  var queryString = location.search
  var searchParams = new URLSearchParams(queryString);
  var id = searchParams.get("idGenero")
  //Pelis
  if(searchParams.has("idGenero")){
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+id)
        .then(function(respuesta) {
         return respuesta.json()
       })
        .then(function(informacion) {
         var peliculas = informacion.results
         console.log(informacion)

         for (var i = 0; i < 20 ; i++) { //informacion.results.length
           console.log('esto es informacion' + peliculas);
           var titulo = peliculas[i].title
           var url = 'https://image.tmdb.org/t/p/w500/'
           var img =  peliculas[i].poster_path;
           var id = peliculas[i].id

          var li;
          li = '<li>'
          li += "<a href='/movies/detallePeli?idDePeli="+id+"'>"
          li += '<img src=' + url + img + '>'
          li += "<div class='uk-position-center uk-panel'><h1 class='headersGeneros'>"+titulo+"</h1></div>"
          li += "</a>"
          li += '</li>'

          console.log(li);

          document.querySelector(".ul-genero").innerHTML += li
         }
        })
  }

})
