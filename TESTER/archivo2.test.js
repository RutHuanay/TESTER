const{
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
} = require("./index2.js");

describe("multiplica(x, y)", function () {
    it("Debería devolver la multiplicación de x, y", function(){
        expect(multiplica(5, 8)).toBe(40);
        expect(multiplica(2, 3)).toBe(6);
    })
})

describe("divide(x, y)", function () {
    it("Debería devolver la división de x, y", function(){
        expect(divide(40, 8)).toBe(5);
        expect(divide(121, 11)).toBe(11);
    })
})

describe("sonIguales(x, y)", function () {
    it("Los valores deberían ser iguales", function(){
        expect(sonIguales(7, 7)).toBe(true);
        expect(sonIguales(45, 55)).toBe(false);
    })
})

describe("tienenMismaLongitud(str1, str2)", function () {
    it("Las cadenas deberian tener la misma longitud", function(){
        expect(tienenMismaLongitud("Hola", "Hola")).toBe(true);
        expect(tienenMismaLongitud("Rosas", "Margaritas")).toBe(false);
    })
})

describe("menosQueNoventa(num)", function () {
    it("Debería devolver false si es mayor que 90, o true si es menor que 90", function(){
        expect(menosQueNoventa(89)).toBe(true);
        expect(menosQueNoventa(91)).toBe(false);
    })
})

describe("mayorQueCincuenta(num)", function () {
    it("Debería devolver true si es mayor que 50, o false si es menor que 50", function(){
        expect(mayorQueCincuenta(95)).toBe(true);
        expect(mayorQueCincuenta(34)).toBe(false);
    })
})

describe("obtenerResto(x, y)", function () {
    it("Debería devolver el residuo de los numeros", function(){
        expect(obtenerResto(21, 5)).toBe(1);
        expect(obtenerResto(39, 6)).toBe(3);
    })
})

describe("esPar(num)", function () {
    it("Debería devolver true si es par, o false si es impar", function(){
        expect(esPar(45)).toBe(false);
        expect(esPar(22)).toBe(true);
    })
})

describe("esImpar(num)", function () {
    it("Debería devolver true si es impar, o false si es par", function(){
        expect(esImpar(47)).toBe(true);
        expect(esImpar(12)).toBe(false);
    })
})

describe("elevar(num, exponent)", function () {
    it("Debería de mostrar el resultado de la exponencia", function(){
        expect(elevar(2, 3)).toBe(8);
        expect(elevar(3, 4)).toBe(81);
    })
})

describe("redondearNumero(num)", function () {
    it("Debería de redondear al número más proximo", function(){
        expect(redondearNumero(2.7)).toBe(3);
        expect(redondearNumero(2.1)).toBe(2);
    })
})

describe("redondearHaciaArriba(num)", function () {
    it("Debería de redondear el número hacia arriba", function(){
        expect(redondearHaciaArriba(2.1)).toBe(3);
        expect(redondearHaciaArriba(5.9)).toBe(6);
    })
})

describe("numeroRandom()", function () {
    it("Debería de resultado aleatorio entre 0 y 1", function(){
        expect(typeof numeroRandom()).toBe("number");
        expect(numeroRandom()).toBeGreaterThanOrEqual(0);
        expect(numeroRandom()).toBeLessThan(1);
    })
})

describe("esPositivo(numero)", function () {
    it("Debería de mostrar si es positivo, negativo o false si es igual a 0", function(){
        expect(esPositivo(0)).toBe(false);
        expect(esPositivo(2)).toBe("Es positivo");
        expect(esPositivo(-2)).toBe("Es negativo");
    })
})

describe("combinarNombres(nombre, apellido)", function () {
    it("Debería de mostrar el nombre y apellidos separados por un espacio", function(){
        expect(combinarNombres("Rut", "Huanay")).toBe("Rut Huanay");
        expect(combinarNombres("Maria", "Estrada")).toBe("Maria Estrada");
    })
})

describe("obtenerSaludo(nombre)", function () {
    it("Debería de mostrar el saludo", function(){
        expect(obtenerSaludo("Rut")).toBe("Hola Rut!");
        expect(obtenerSaludo("María")).toBe("Hola María!");
    })
})

describe("obtenerAreaRectangulo(alto, ancho)", function () {
    it("Debería de retornar el area de un rectangulo", function(){
        expect(obtenerAreaRectangulo(6, 12)).toBe(72);
        expect(obtenerAreaRectangulo(35, 70)).toBe(2450);
    })
})

describe("retornarPerimetro(lado)", function () {
    it("Debería de retornar el perimetro de un cuadrado", function(){
        expect(retornarPerimetro(4)).toBe(16);
        expect(retornarPerimetro(12)).toBe(48);
    })
})

describe("deEuroAdolar(euro)", function () {
    it("Debería el cambio de euros a dolares", function(){
        expect(deEuroAdolar(100)).toBe(120);
        expect(deEuroAdolar(12)).toBe(14);
    })
})