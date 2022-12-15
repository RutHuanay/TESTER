const{
    devolverPrimerElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlComienzoDelArray,
    arrayContiene,
    agregarNumeros,
    multiplicarArgumentos,
    cuentoElementos,
    todosIguales,
    mesesDelAño,
    mayorACien,
    breakStatement,
} = require("./index4.js");

describe('devolverPrimerElemento(array)', function () {
    it("Deberia devolver el primer elemento del array", function(){
        expect(devolverPrimerElemento([3,2,5,6])).toBe(3);
    })
})

describe('obtenerLargoDelArray(array)', function () {
    it("Deberia devolver el largo del array", function(){
        expect(obtenerLargoDelArray([2,3,4,5])).toBe(4);
    })
})

describe('incrementarPorUno(array)', function () {
    it("Deberia de agregar en uno a los elementos del array", function(){
        expect(incrementarPorUno([6,1,4,7])).toEqual([7,2,5,8]);
    })
})

describe('agregarItemAlComienzoDelArray(array, elemento)', function () {
    it("Deberia de añadir el elemento al inicio del array", function(){
        expect(agregarItemAlComienzoDelArray([2,3,6,4], 9)).toEqual([9,2,3,6,4]);
    })
})

describe('arrayContiene(array, elemento)', function () {
    it("Deberia devolver true si el elemento esta dentro del array", function(){
        expect(arrayContiene(["hola",3,4,"Hello"], "Hello")).toBe(true);
    })
})

describe('agregarNumeros(numeros)', function() {
    it('Deberia de sumar todos los números de la matriz y devolver la suma', function() {
      expect(agregarNumeros([10, 10, 16])).toBe(36);
      expect(agregarNumeros([97, 100])).toBe(197);
      expect(agregarNumeros([0])).toBe(0);
    });
});
  
describe('multiplicarArgumentos()', function () {
    it('Debeberia de devolver el producto de todos los argumentos', function () {
      const multiplicar1 = multiplicarArgumentos(5, 5);
      const multiplicar2 = multiplicarArgumentos();
      expect(multiplicar1).toBe(25);
      expect(multiplicar2).toBe(0);
    });
});
  
describe('cuentoElementos(arreglo)', function() {
    it('Deberia de devolver un contador con el total de números mayores que 18', function() {
      expect(cuentoElementos([9, 13, 21, 19])).toBe(2);
    });
});
  
describe('todosIguales(arreglo)', function() {
    it('Debeberia de devolver verdadero si todos los elementos de la matriz son iguales y falso de lo contrario', function() {
      expect(todosIguales([7, 7, 7, 7 ])).toBe(true);
      expect(todosIguales([50, 24, 2, 99])).toBe(false);
    });
});
  
describe('mesesDelAño(array)', function() {
    it('Deberia de devolver una nueva matriz con los meses solicitados', function() {
      var array1 = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
      var array2 = ["Marzo", "Diciembre", "Julio", "Noviembre"];
      expect(mesesDelAño(array1)).toEqual(["Marzo", "Noviembre", "Enero"]);
      expect(mesesDelAño(array2)).toEqual("No se encontraron los meses pedidos");
    });
});
  
describe('mayorACien(array)', function() {
    it('Debería devolver una matriz con valores mayores que 100', function() {
      var integers = [44, 2, 13, 67, 101, 198, 56, 786, 999, 11];
      expect(mayorACien(integers)).toEqual([101, 198, 786, 999]);
    });
});
  
describe('breakStatement(numero)', function() {
    it('Deberia de devolver una matriz con los valores resultantes de sumar 2 en cada iteración', function() {
      expect(breakStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68, 70]);
    });
    it('Debedebia detener la ejecución si el valor de la suma y el número de iteración coinciden', function() {
      expect(breakStatement(-4)).toEqual('Se interrumpió la ejecución');
    });
});