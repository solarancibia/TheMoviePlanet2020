// window.addEventListener("load",  function(){
// // guardo el arrayDePelisFavoritas que esta en sessionStorage
// arrayDePelisFavoritas = JSON.parse(window.sessionStorage.getItem("favorita"));
// console.log(arrayDePelisFavoritas);
//
// // checkeo que el array tenga por lo menos una peli favorita (un item)
// if (arrayDePelisFavoritas.length>0) {
//   // como arrayDePelisFavoritas es un array, necesito recorrerlo
//   for (var i = 0; i < arrayDePelisFavoritas.length; i++) {
//     // recorro el array para obtener cada ID y hago un fetch (AJAX) para obtener la data de cada peli
//     var url = "https://api.themoviedb.org/3/movie/"+arrayDePelisFavoritas[i]+"?api_key=d72b8119ca0d802447ebd91bded10750&language=en"
//     var urlImg = "https://image.tmdb.org/t/p/original"
//     fetch(url)
//         .then(function(respuesta) {
//          return respuesta.json()
//        })
//         .then(function(pelicula) {
//           // guardo en pelicula el objeto literal que recibo como respuesta
//          console.log(pelicula)
//          // capturo el UL para insertar dentro de el, cada peli como LI
//          var ul = document.querySelector("section ul.paQueAnde")
//          // genero el LI
//          var li;
//          li = "<li>"
//          li +=    "<a href=''></a>"
//          li +=    "<img src='"+urlImg + pelicula.poster_path +"'>"
//          li +=    '<div class="uk-position-center uk-panel divPelis"><h1 class="headersFav">' + pelicula.title + '</h1></div>'
//          li +=    "</a>"
//          li += "</li>"
//          // modifico el HTML del UL
//          ul.innerHTML += li
//
//         })
//         .catch(function(error) {
//         console.log("error "+ error)
//         })
//
//   }
//
// }
//
//
// })

// function mostrarPeliculasFavoritas(){
// var listaDeFavoritos = JSON.parse (localStorage.getItem("favoritos"))
//
// if (listaDeFavoritos == 0) {
//  document.querySelector("ul.paQueAnde").innerHTML="<h2>No tiene ninguna pelicula favorita</h2>"
// }else {
//
// document.querySelector("ul.paQueAnde").style.display="none"
//
// for (var i = 0; i < listaDeFavoritos.length; i++) {
//  var elementoFavorito = listaDeFavoritos[i]
//  var URL = "https://api.themoviedb.org/3/movie/"+ elementoFavorito +"?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US"
//
//  fetch (URL)
//  .then(function(response) {
//    return response.json();
//  })
//  .then(function(data) {
//    console.log(data);
//
//    var arrayDePeliculasPorGeneros= data
//    var li
//    // for (var i = 0; i < arrayDePeliculasPorGeneros.length; i++) {
//      if(arrayDePeliculasPorGeneros.poster_path!=null){
//      var id = arrayDePeliculasPorGeneros.id
//      var titulo = arrayDePeliculasPorGeneros.title
//      var imagen = arrayDePeliculasPorGeneros.poster_path
//      li="<article id='articulosFavoritos' class='peliculasGeneros'>"
//      li+= "<a href=detallePelicula.html?id="
//      li += id
//      li +=">"
//      li+= "<img class='generos-imagenes' src='https://image.tmdb.org/t/p/original"
//      li+=imagen
//      li+= "' alt='img producto'>"
//      li+= "<h2 class='titulo-producto'>"
//      li+= "<a href=detallePelicula.html?id="
//      li+=id
//      li+=">"
//      li+=titulo
//      li+="</a></h2>"
//      li+= '<button id="sacarFavs" onclick= "sacarFavorito('+id+')"> Sacar de favoritas </button> </article>'
//
//      // document.querySelector(".contenedor").innerHTML += "<article class='peliculasGeneros'><img class='generos-imagenes' src='https://image.tmdb.org/t/p/original" + imagen + "' alt='img producto'><h2 class='titulo-producto'><a href=detallePelicula.html?id=" + id +  ">" + titulo + "</a></h2></article>"
//      document.querySelector("section ul.paQueAnde").innerHTML += li
//
//  // }
//    }
//  })
// }
// }
// }


window.addEventListener("load",  function(){
// guardo el arrayDePelisFavoritas que esta en sessionStorage
var arrayDePelisFavoritas = JSON.parse(window.sessionStorage.getItem("favorita"));
console.log(arrayDePelisFavoritas);
// checkeo que el array tenga por lo menos una peli favorita (un item)
if (arrayDePelisFavoritas.length>0) {
  // como arrayDePelisFavoritas es un array, necesito recorrerlo
  for (var i = 0; i < arrayDePelisFavoritas.length; i++) {
    // recorro el array para obtener cada ID y hago un fetch (AJAX) para obtener la data de cada peli
    var url = "https://api.themoviedb.org/3/movie/"+arrayDePelisFavoritas[i]+"?api_key=d72b8119ca0d802447ebd91bded10750&language=en"
    var urlImg = "https://image.tmdb.org/t/p/original"
    fetch(url)
        .then(function(respuesta) {
         return respuesta.json()
       })
        .then(function(pelicula) {
          // guardo en pelicula el objeto literal que recibo como respuesta
         console.log(pelicula)
         // capturo el UL para insertar dentro de el, cada peli como LI
         var ul = document.querySelector("ul.paQueAnde")
         // genero el LI
         var li;
         li = "<li>"
         li +=    "<a href=''></a>"
         li +=    "<img src='"+urlImg + pelicula.poster_path +"'>"
          li +=    '<div class="uk-position-center uk-panel divPelis"><h1 class="headersFav">' + pelicula.title + '</h1></div>'
          li +=    "</a>"
          li += "</li>"
         // modifico el HTML del UL
         ul.innerHTML += li

        })
        .catch(function(error) {
        console.log("error "+ error)
        })

  }

}


})
