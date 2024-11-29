var broker = prompt('Nombra al menos un bróker que conozcas')
var trading = prompt ('Del 1 al 10 ¿Cuánto conocimiento tenes sobre el trading?')
var horas = prompt ('¿Cuántas horas al día dedicarías para aprender trading?')
var registro = prompt ('¿Tienes la manera de controlar un registro de todas tus operaciones?')
var monto = prompt ('¿Con cuánto dinero cuentas para empezar a operar?(USD)')

var resultado = (parseInt(monto))*(15/100)
var total = ( parseInt(monto) + parseInt(resultado))
