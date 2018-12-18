var sergio = {
    nombre: "sergio",
    apellido: "ariza",
    edad: 20,
    tecnico: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    desarrollador: true
}
function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.tecnico === true) {
        console.log(`tecnico`)
    }
    if (persona.cocinero === true) {
        console.log(`cocinero`)
    }

    if (persona.cantante === true) {
        console.log(`cantante`)
    }

    if (persona.dj === true) {
        console.log(`dj`)
    }
    if (persona.guitarrista === true) {
        console.log(`guitarrista`)
    }

    if (persona.desarrollador === true) {
        console.log(`desarrollador`)
    }
}

var mayoriaDeEdad = 18

function esEsMayordeEdad(persona) {
    return persona.edad >= mayoriaDeEdad

}

function imprimirSiEsMayordeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else {
        console.log(`${persona.nombre} es menor de edad`)

    }

}
