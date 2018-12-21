function persona(nombre, apellido) {

    this.nombre = nombre
    this.apellido = apellido
    this.edad = 20


}
persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)

}
var sacha = new persona(`sacha`, `ariza`)
var erika = new persona(`erika`, `santander`)
var policarpa = new persona(`policarpa`, "salavarrieta")