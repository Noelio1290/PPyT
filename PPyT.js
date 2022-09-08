function jugarPPyT(posibilidad1,posibilidad2) {
    if (posibilidad1 === posibilidad2){
        console.log("empate")
    } else if (posibilidad1 === "piedra" && posibilidad2 === "papel" || 
        posibilidad1 === "tijeras" && posibilidad2 === "piedra" ||
        posibilidad1 === "papel" && posibilidad2 === "tijeras") {
        console.log("Gana player 2")
    } else if (posibilidad1 === "piedra" && posibilidad2 === "tijeras" ||
        posibilidad1 === "papel" && posibilidad2 === "piedra" ||
        posibilidad1 === "tijeras" && posibilidad2 === "papel") {
        console.log("Gana player 1")
    }
}
//notas
function aprendiendoConClicks() {
    console.log("Le di click")
}
const seleccionPapel = document.querySelector("#seleccionU")

seleccionPapel.addEventListener("click",function(evento){
    console.log("mande a llamar un click")
    console.log(evento)
    })
    //Ejercicio
const pagina1 = document.querySelector(".Pantalla-inicial")
const pagina2 = document.querySelector(".Juego")
const pagina3 = document.querySelector(".Resultado")

console.log(pagina1,pagina2,pagina3)

pagina2.classList.add("inactive")
pagina3.classList.add("inactive")

function pasarPagina2(){
    pagina2.classList.remove("inactive")
    pagina1.classList.add("inactive")
}


function pasarPagina3(){
    pagina3.classList.remove("inactive")
    pagina2.classList.add("inactive")
}
function paginaInicial(){
    pagina1.classList.remove("inactive")
    pagina3.classList.add("inactive")
}