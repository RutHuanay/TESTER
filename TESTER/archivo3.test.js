const{
    saludo,
    colors,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    esVerdadero,
    tablaDelSeis,
    tieneTresDigitos,
    doWhile
} = require("./index3.js");

describe('saludo(idioma)', function () {
    it("Deberia devolver el idioma", function(){
        expect(saludo("ingles")).toBe("Hello!");
        expect(saludo("japon")).toBe("Hola!");
    })
})
describe('colors(color)', function () {
    it("Deberia devolver los colores", function(){
        expect(colors("blue")).toBe("This is blue");
        expect(colors("marron")).toBe("Color not found");
    })
})
describe('fizzBuzz(numero)', function () {
    it("Deberia devolver las respuesta indicada por cada condición", function(){
        expect(fizzBuzz(15)).toBe("fizzbuzz");
        expect(fizzBuzz(7)).toBe(7);
    })
})
describe('operadoresLogicos(num1, num2, num3)', function () {
    it("Deberia devolver la respuesta indicada para cada condición", function(){
        expect(operadoresLogicos(6, 4, 1)).toBe("Numero 1 es mayor y positivo");
        expect(operadoresLogicos(3, 4, -2)).toBe("Hay negativos");
        expect(operadoresLogicos(3, 4, 8)).toBe(9);
        expect(operadoresLogicos(0, 0, 0)).toBe("Error");
        expect(operadoresLogicos(1, 2, 1)).toBe(false);
    })
})
describe('esVerdadero(valor)', function () {
    it("Deberia devolver si el valor recibio es verdadero  falso", function(){
        expect(esVerdadero(true)).toBe("Soy Verdadero");
        expect(esVerdadero(false)).toBe("Soy falso");
    })
})
describe('esPrimo(numero)', function () {
    it("Deberia devolver si el digito ingresado es primo", function(){
        expect(esPrimo(3)).toBe(true);
        expect(esPrimo(18)).toBe(false);
    })
})
describe('tieneTresDigitos(numero)', function () {
    it("Deberia devolver si el número tiene 3 digitos", function(){
        expect(tieneTresDigitos(150)).toBe(true);
        expect(tieneTresDigitos(-150)).toBe(true);
        expect(tieneTresDigitos(85)).toBe(false);
        expect(tieneTresDigitos(1050)).toBe(false);
    })
})
describe('doWhile(numero)', function () {
    it("Deberia devolver el valor recibido en 5 hasta un límite de 8 veces", function(){
        expect(doWhile(5)).toBe(45);
    })
})