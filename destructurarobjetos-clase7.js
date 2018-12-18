var sergio = {
    nombre: "sergio",
    apellido: "ariza",
    edad: 20
}

var sacha = {
    nombre: "sacha",
    apellido: "nicolaevic",
    edad: 28
}

function imprimirNombreEnMayusculas(persona) {
    //var   nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())


}
imprimirNombreEnMayusculas(sergio)
imprimirNombreEnMayusculas(sacha)
//imprimirNombreEnMayusculas({nombre:"pepito"})

var sergio = {
    nombre: "sergio",
    edad: 20
}
var jesus = {
    nombre: "jesus",
    edad: 17
}

function imprimirNombreyEdad(persona) {
    var { nombre, edad } = persona
    console.log("hola soy " + sergio.nombre.toUpperCase() + " y tengo  " + sergio.edad + " años")
    console.log("hola soy " + jesus.nombre.toUpperCase() + " y tengo " + jesus.edad + "años")

}
imprimirNombreyEdad(nombre = "sergio", 20)
imprimirNombreyEdad(nombre = "jesus", 17)
