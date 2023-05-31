var botonEncriptar=document.querySelector(".btn-encriptar");
var botonDesencriptar=document.querySelector(".btn-desencriptar");
var botoncopiar=document.querySelector(".btn-copiar");
var contenedor=document.querySelector(".contenedor");
var parrafo=document.querySelector(".parrafo");
var resultado=document.querySelector(".resultado");
var texto=document.querySelector(".texto");
var muñeco=document.querySelector(".muñeco");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function ocultaradelante(){
    muñeco.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptar (){
    ocultaradelante();
    var mensaje = texto.value;
    console.log(texto);
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat")
    console.log(mensajeEncriptado);
    resultado.innerHTML=mensajeEncriptado;
}



function desencriptar (){
    var mensaje = texto.value;
    console.log(texto);
    var mensajeDesencriptado = mensaje
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u")
    console.log(mensajeDesencriptado);
    resultado.innerHTML=mensajeDesencriptado;
    }


function copiar(){
    var mensajeEncriptado= resultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    navigator.clipboard.writeText(mensajeDesencriptado);
}

botonEncriptar.onclick= encriptar;
botonDesencriptar.onclick= desencriptar;
botoncopiar.onclick= copiar;


