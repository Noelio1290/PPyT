function jugarPPyT(posibilidad1,posibilidad2) {
    if (posibilidad1 === posibilidad2){
        console.log("empate")
    }
    if (posibilidad1 === "piedra" && posibilidad2 === "papel" || 
        posibilidad1 === "tijeras" && posibilidad2 === "piedra" ||
        posibilidad1 === "papel" && posibilidad2 === "tijeras") {
        console.log("Gana player 2")
    }
    if (posibilidad1 === "piedra" && posibilidad2 === "tijeras" ||
        posibilidad1 === "papel" && posibilidad2 === "piedra" ||
        posibilidad1 === "tijeras" && posibilidad2 === "papel") {
        console.log("Gana player 1")
    }
}
