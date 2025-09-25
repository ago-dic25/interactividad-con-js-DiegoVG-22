var botonDark = document.getElementById("toggle-dark");

var botonMas = document.querySelector('.boton-mas');
var contadorLikes = document.getElementById('contador-likes');
var likes = 0;

var botonBuscar = document.getElementById("buscar");
var inputBusqueda = document.getElementById("input-busqueda");
var tarjetas = document.querySelectorAll('.tarjeta');

botonDark.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

botonMas.addEventListener('click', function() {
    likes++;
    contadorLikes.textContent = likes + ' likes';
});

botonBuscar.addEventListener('click', function() {
    var texto = inputBusqueda.value.toLowerCase();
    tarjetas.forEach(function(tarjeta) {
        var contenido = tarjeta.textContent.toLowerCase();
        if (contenido.includes(texto)) {
            tarjeta.classList.remove("ocultar");
        } else {
            tarjeta.classList.add("ocultar");
        }
    });
});

var galeriaImg = document.getElementById("galeria-img");
var seeAll = document.getElementById("seeAll");

var imagenes = [
    "sombreros.jfif",
    "sombrero_2.jpeg",
    "sombrero_3.jpg"
];
var indice = 0;
var intervalo = null;

seeAll.addEventListener("mouseover", function() {
    intervalo = setInterval(function() {
        indice = (indice + 1) % imagenes.length;
        galeriaImg.src = imagenes[indice];
    }, 2000);
});

seeAll.addEventListener("mouseout", function() {
    clearInterval(intervalo);
    intervalo = null;
});