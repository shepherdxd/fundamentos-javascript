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

    if (persona.tecnico === true){
        console.log(`tecnico`)
    }
    if (persona.cocinero === true){
        console.log(`cocinero`)
    }
   
    if (persona.cantante === true){
        console.log(`cantante`)
    }
   
    if (persona.dj === true){
        console.log(`dj`)
    }
    if (persona.guitarrista === true){
        console.log(`guitarrista`)
    }

    if (persona.desarrollador === true){
        console.log(`desarrollador`)
    }
}
   imprimirProfesiones(sergio)
   
   
    
