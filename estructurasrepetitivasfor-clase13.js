var sergio = {
    nombre: "sergio",
    apellido: "ariza",
    edad: 20,
    peso: 75
}
console.log(`Al inicio del año ${sergio.nombre} pesa ${sergio.peso} kg`)

const INCREMENTO_PESO = 0.2
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
//const aumentarDePeso = persona => persona.peso += 200
//const adelgazar = persona => persona.peso -= 200
//const aumentarDePeso = (persona,incremento) => {
// persona.peso += incremento

for (var i = 1; i <= 365; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(sergio)
    }
    else if (random < 0.5) {
        adelgazar(sergio)
    }
}
console.log(`Al final del año ${sergio.nombre} pesa ${sergio.peso.toFixed(1)} kg`)

