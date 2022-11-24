const {
    nuevaString,
    nombre,
    nuevoNum,
    nuevoBool,
    nuevaResta,
    nuevaMultiplicacion,
    nuevoModulo,
} = require("./index.js");

describe('nuevaString',function(){
    it("Deberia devolver un dato string", function(){
        expect(typeof nuevaString).toBe('string');
    });
});
describe('nombre',function(){
    it("Debe ser tipo de dato string", function(){
        expect(typeof nombre).toBe('string');
    });
});
describe('nuevoNum',function(){
    it("Debe ser tipo de dato numerico", function(){
        expect(typeof nuevoNum).toBe('number');
    });
});
describe('nuevoBool',function(){
    it("Debe ser tipo de dato booleano ", function(){
        expect(typeof nuevoBool).toBe('boolean');
    });
});
describe('nuevaResta',function(){
    it("Debe ser un booleano", function(){
        expect(typeof nuevaResta).toBe('boolean');
    });
});
describe('nuevaMultiplicacion',function(){
    it("Debe ser un booleano ", function(){
        expect(typeof nuevaMultiplicacion).toBe('boolean');
    });
});
describe('nuevoModulo',function(){
    it("Debe ser tipo un tipo de dato booleano", function(){
        expect(typeof nuevoModulo).toBe('boolean');
    });
});











