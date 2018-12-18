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

//function imprimirNombreEnMayusculas(persona){
//var   nombre = persona.nombre.toUpperCase( )
//console.log(nombre)

function imprimirNombreEnMayusculas(persona) {
   console.log(persona.nombre.toUpperCase())
}
imprimirNombreEnMayusculas(sergio)
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas({ nombre: "pepito" })