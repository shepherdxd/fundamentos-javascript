function persona(nombre, apellido, altura) {

    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura


}
persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)

}
persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

var sacha = new persona(`sacha`, `ariza`, 1.72)
var erika = new persona(`erika`, `santander`, 1.65)
var policarpa = new persona(`policarpa`, `salavarrieta`, 1.89)

sacha.soyAlto()
erika.soyAlto()
policarpa.soyAlto()



