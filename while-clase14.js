var sergio = {
    nombre: "sergio",
    apellido: "ariza",
    edad: 20,
    peso: 75
}
console.log(`Al inicio del año ${sergio.nombre} pesa ${sergio.peso} kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = sergio.peso - 3
var Dias = 0 
while (sergio.peso > META) {
    
    if (comeMucho()) {
        aumentarDePeso(sergio)

    }
    if (realizaDeporte()) {
        adelgazar(sergio)

    }
    Dias += 1
}
//const aumentarDePeso = persona => persona.peso += 200
//const adelgazar = persona => persona.peso -= 200
//const aumentarDePeso = (persona,incremento) => {
// persona.peso += incremento

for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(sergio)
    }
    else if (random < 0.5) {
        adelgazar(sergio)
    }
}
console.log(`pasaron ${Dias} dias hasta que  ${sergio.nombre} adelgazo 3kg`)