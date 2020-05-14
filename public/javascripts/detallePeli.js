window.addEventListener("load", function () {

  var urlParams = new URLSearchParams(window.location.search);
  var query = urlParams.get('idDePeli');

  var url = "https://api.themoviedb.org/3/movie/" + query +"?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US"
var article = ""
  fetch (url)
    .then(function(respuesta) {
     return respuesta.json()
   })
    .then(function(informacion) {
     console.log(informacion)

     var titulo = informacion.title
     document.querySelector(".titulos").innerHTML = titulo

     var url = 'https://image.tmdb.org/t/p/w500/'
     var poster =informacion.poster_path
     document.querySelector("aside.posterPelicula").innerHTML = '<img src=' + url + poster + '>'

    article += "<ul>"
    var arrayDeGeneros = informacion.genres
    var i;
    for (i = 0; i < arrayDeGeneros.length; i++) {
      arrayDeGeneros[i]
      article += "<li> <a href= '/movies/peliculasPorGenero?idGenero=" + arrayDeGeneros[i].id + "'>" + arrayDeGeneros[i].name + "</a> </li>"
    }
        document.querySelector (".detalles").innerHTML = article

      var arrayDeIdiomas = informacion.spoken_languages
      for (var i = 0; i < arrayDeIdiomas.length; i++) {
        document.querySelector(".lenguajes ul").innerHTML += "<li>" + arrayDeIdiomas[i].name+ "</li>"
      }

      var resumen = informacion.overview
      document.querySelector(".sinopsis p").innerHTML = resumen

      var fechaEstreno = informacion.release_date
        document.querySelector(".fechaEstreno span").innerHTML = fechaEstreno


      var trailer = "https://api.themoviedb.org/3/movie/"+ query + "/videos?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US"

      fetch (trailer)
        .then(function(respuesta) {
         return respuesta.json()
       })
       .then (function(data){
         console.log(data);
         var trailer = data.results
         var key =  trailer[0].key
         document.querySelector("iframe").src = "https://www.youtube.com/embed/" + key
       })

   })
   .catch(function(error) {
     console.log("error "+ error)

  })

})
var urlParams = new URLSearchParams(window.location.search);
var query = urlParams.get("idDePeli");

document.querySelector("#VerRecomendaciones").addEventListener("click", function(){
fetch("https://api.themoviedb.org/3/movie/" + query + "/recommendations?api_key=d72b8119ca0d802447ebd91bded10750")
.then(function(respuesta){
return respuesta.json()
})
.then(function(datos){
console.log(datos)
var recomendaciones = datos.results
var r= ""
console.log(recomendaciones);
for (var i = 0; i < recomendaciones.length; i++) {
document.querySelector(".peliculasRecomendadas").innerHTML+= '<li><a href="/movies/detallePeli?idDePeli='+recomendaciones[i].id +
'"><img src="https://image.tmdb.org/t/p/original/' + recomendaciones[i].poster_path + '" alt=""></a></li>'
}})
.catch(function(){
 console.log(error)
})
})
