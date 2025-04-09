class Coisa {
    #priv;
    constructor(pub, priv) {
        this.pub = pub;
        this.#priv = priv;
    }
    set priv(valor) {
        this.#priv = valor;
    }
    get priv() {
        return this.#priv;
    }
}

let c = 1;
const teste = new Coisa(10);
console.log(c++, teste);
teste.priv = 50;
console.log(c++, teste.priv);
const teste2 = new Coisa(11, 55);
console.log(c++, teste2.pub, teste2.priv);

console.log('\nteste typeof')
console.log(typeof c == 'number');
console.log(typeof d == 'number');
console.log(typeof d == 'undefined');
console.log(typeof c);
console.log(typeof d);

console.log('\nteste hoisting var ----------------------------');
console.log('antes da def+init.: ', typeof var1, var1);
var var1 = 10;
console.log('depois da def+init: ', typeof var1, var1);

console.log('\nteste hoisting let ---------------------------- ');
// console.log('antes da def+init.: ', typeof var2, var2); ---> causa ReferenceError
let var2 = 10;
console.log('depois da def+init: ', typeof var2, var2);
