var personas = {
    sergio: {
        nombre: "sergio",
        apellido: "ariza",
        edad: 20,
        ganancia: 20,
        gasto: 10
    },
    john: {
        nombre: "john",
        apellido: "martinez",
        edad: 28,
        ganancia: 15,
        gasto: 7
    }
}


function imprimirPerdidas(clientes,) {
    persona1 = { ...clientes.sergio }
    persona2 = { ...clientes.john }
    console.log(persona1) 
    console.log(persona2)   
}
//imprimirNombreEnMayusculas(sergio)
imprimirPerdidas(personas)

// var sergio = {
//     nombre: "sergio",
//     edad: 20
// }
// var jesus = {
//     nombre: "jesus",
//     edad: 17
// }

// function imprimirNombreyEdad(persona) {
//     var { nombre, edad } = persona
//     console.log("hola soy " + sergio.nombre.toUpperCase() + " y tengo  " + sergio.edad + " años")
//     console.log("hola soy " + jesus.nombre.toUpperCase() + " y tengo " + jesus.edad + "años")

// }
// imprimirNombreyEdad(nombre = "sergio", 20)
// imprimirNombreyEdad(nombre = "jesus", 17)




// imprimirNombreEnMayusculas(sergio)
// imprimirNombreEnMayusculas(sacha)
// //imprimirNombreEnMayusculas({nombre:"pepito"})

// var personas = { sergio, jesus }
// var sergio = {
//     nombre: "sergio",
//     edad: 20
// }

// var jesus = {
//     nombre: "jesus",
//     edad: 17
// }

// function imprimirNombreyEdad(persona) {
//     console.log("hola soy " + persona.sergio.nombre.toUpperCase() + " y tengo  " + persona.sergio.edad + " años")
//     console.log("hola soy " + persona.jesus.toUpperCase() + " y tengo " + jesus.edad + "años")
// }

// imprimirNombreyEdad()
// function cumpleaños(persona) {
//     persona.edad += 1
// }
 function cumpleaños(persona) {
     persona.edad += 1
     
 }