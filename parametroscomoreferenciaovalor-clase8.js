



imprimirNombreEnMayusculas(sergio)
imprimirNombreEnMayusculas(sacha)
//imprimirNombreEnMayusculas({nombre:"pepito"})

var personas = {sergio , jesus}
var sergio = {
    nombre: "sergio",
    edad: 20
}

var jesus = {
    nombre: "jesus",
    edad: 17
}

function imprimirNombreyEdad(persona) {
    console.log("hola soy " + persona.sergio.nombre.toUpperCase() + " y tengo  " + persona.sergio.edad + " años")
    console.log("hola soy " + persona.jesus.toUpperCase() + " y tengo " + jesus.edad + "años")
}

imprimirNombreyEdad()
function cumpleaños(persona) {
    persona.edad += 1
}