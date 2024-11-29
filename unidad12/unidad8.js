function mostrarCont () {
    var secC2 = document.getElementById('fiables')
    secC2.style.display = 'block'
}
function mostrarCont2 () {
    var secC2 = document.getElementById('justos')
    secC2.style.display = 'block'
}
function mostrarCont3 () {
    var secC2 = document.getElementById('transpa')
    secC2.style.display = 'block'
}
function Comprar(){
    var usuario = prompt('Gracias por confiar en nosotros, colocá tu mail.')
   
   if (usuario ) {
       alert('BIENVENIDO! Nos comunicaremos contigo en la brevedad.')
    }
    else {
        alert('Debes completar el espacio con tu mail.')
    }

}