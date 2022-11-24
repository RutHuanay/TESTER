// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO funcionará.
// No cambies los nombres de las funciones.
function multiplica(x, y) {
    const resultado = x*y;
    return resultado;
}

function divide(x, y) {
    const resultado = x/y;
    return resultado;
}

function sonIguales(x, y) {
    const resultado = x === y;
    return resultado;
}

function tienenMismaLongitud(str1, str2) {
    const resultado = str1.length === str2.length;
    return resultado;
}

function menosQueNoventa(num) {
    if (num < 90){
        return true;
    } else {
        return false;
    }
}

function mayorQueCincuenta(num) {
    if (num > 50){
        return true;
    } else {
        return false;
    }
}

function obtenerResto(x, y) {
    const resultado = x % y;
    return resultado;
}

function esPar(num) {
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function esImpar(num) {
    if (num % 2 !== 0){
        return true;
    } else {
        return false;
    }
}

function elevar(num, exponent) {
    return Math.pow(num, exponent);
}

function redondearNumero(num) {
    return Math.round(num);
}

function redondearHaciaArriba(num) {
    return Math.ceil(num);
}

function numeroRandom() {
    return Math.random();
}

function esPositivo(numero) {
    if (numero == 0){
        return false;
    } else if(numero > 0){
        return "Es positivo";
    } else {
        return "Es negativo";
    }
}

function combinarNombres(nombre, apellido) {
    return (nombre + " " + apellido);
}

function obtenerSaludo(nombre) {
    return ("Hola" + " " + nombre + "!");
}

function obtenerAreaRectangulo(alto, ancho) {
    return alto*ancho;
}

function retornarPerimetro(lado) {
    return lado*4;
}

function deEuroAdolar(euro) {
    return Math.round(euro*1.2);
}

// No modificar nada debajo de esta línea
// --------------------------------
module.exports = {
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    deEuroAdolar,
};