let player1 = "Juan"
let player2 = "Jacinto"

const valores = [
    "piedra",
    "papel",
    "Tijeras",
]

let p1Seleccion = valores[0]
let p2seleccion = valores[1]

function jugarPPyT(posibilidad1,posibilidad2) {
    if (posibilidad1 === posibilidad2){
        console.log("empate")
    }
    if (posibilidad1 === "piedra" && posibilidad2 === "papel") {
        console.log("Gana player 2")
    } 
    if (posibilidad1 === "piedra" && posibilidad2 === "tijeras"){
        console.log("Gana player 1")
    }
    if (posibilidad1 === "papel" && posibilidad2 === "tijeras"){
        console.log("Gana player 2")
    }
    if (posibilidad1 == "papel" && posibilidad2 === "piedra") {
        console.log("Gana player 1")        
    }
    if (posibilidad1 === "tijeras" && posibilidad2 === "papel") {
        console.log("Gana player 1")
    }
    if (posibilidad1 === "tijeras" && posibilidad2 === "piedra") {
        console.log("Gana player 2")
    }
}
