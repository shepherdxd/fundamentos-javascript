class persona {


    constructor(nombre, apellido, altura) {

        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    Persona.prototype.saludar() = function() {

    }

    soyAlto() {
        return this.altura > 1.8
    }
}

    class desarrollador extends persona {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }

    }


function desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}


desarrollador.prototype.saludar = function () {
    console.log(`Hola , me llamo $(this.nombre) $(this.apellido) y soy desarrollador/a`)

}
var sacha = new persona(`sacha`, `ariza`, 1.72)
var erika = new persona(`erika`, `santander`, 1.65)
var policarpa = new persona(`policarpa`, `salavarrieta`, 1.89)

sacha.soyAlto()
erika.soyAlto()
policarpa.soyAlto()
