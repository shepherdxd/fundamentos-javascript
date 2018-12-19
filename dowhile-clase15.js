var contador = -1
const llueve = () => Math.random() < 0.25

do {
    contador++
}
while (!llueve()) {
    if (contador < 2) {
        if (contador == 0) {
            console.log(`no ha llovido `)
        } else {
            console.log(`fui a ver si llovia ${contador} vez`)
        }
    } else {
        console.log(`fui a ver si llovia ${contador} veces`)
    }


}
