var nombre = 'sergio'
var apellido = 'ariza'

var nombreenmayusculas = nombre.toUpperCase()
var apellidoenminusculas = apellido.toLowerCase()

var primeraletradelnombre = nombre.charAt(0)
var ultimaletradelnombre = nombre.charAt(5)
var cantidaddeletrasdelnombre = nombre.length
var cantidaddeletrasdelapellido = apellido.length

/*var nombrecompleto = nombre + " " + apellido*/

var nombrecompleto = `${nombre.toUpperCase()}  ${apellido.toUpperCase()}`