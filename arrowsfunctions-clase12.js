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

//var mayoriaDeEdad = 18
const MAYORIA_DE_EDAD = 18



//function EsMayordeEdad(persona) {
    //return persona.edad >= MAYORIA_DE_EDAD
                //o
    //const  EsMayordeEdad = function EsMayordeEdad(persona) {
       // return persona.edad >= MAYORIA_DE_EDAD
                //o
        //var  EsMayordeEdad = function EsMayordeEdad(persona) {
          //  return persona.edad >= MAYORIA_DE_EDAD
               //o
          //const  EsMayordeEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD
          const  EsMayordeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
         

// para desestrucurasr el parametro de arriba se quita persona y se le agregan { } y la palabra seria edad


function imprimirSiEsMayorDeEdad(persona) {
    
    if (EsMayordeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)

    }
    else {
        console.log(`${persona.nombre} es menor de edad`)

    }
    

}
function imprimirSiEsMenorDeEdad(persona) {
    if (EsMenordeEdad(persona)) {
        console.log(`${persona.nombre} es menor de edad`)

    }
    else {
        console.log(`${persona.nombre} es mayor de edad`)

    }
}
function permitirAcceso(persona) {
    if (!EsMayordeEdad(persona)) {
        console.log("ACCESO DENEGADO")
        
    }else {
        console.log("ACCESO PERMITIDO")

    }
    
}