window.addEventListener("load",  function(){

  // var nombre= prompt ("Ingrese su nombre")
  // var reemplazo = document.querySelector("p.saludo")
   //reemplazo.innerText= "Bienvenid@" + " " + nombre
   fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US")
     .then(function(respuesta) {
       return respuesta.json()
     })
     .then(function(informacion) {
       var generos = informacion.genres
       console.log(generos);
       for (var i = 0; i < generos.length; i++) {
         var nombre =  generos[i].name
         var id = generos[i].id


         var div = "";
         div += '<li>'
         div += '<a href="/movies/peliculasPorGenero?idGenero='+id+'"><div class="uk-position-center uk-panel"><h1>' + nombre + '</h1></div></a>'
         div += '</li>'


         document.querySelector("#generos").innerHTML += div
       }
     })
     .catch(function(error) {
       console.log("Error: " + error);
     })}
)
