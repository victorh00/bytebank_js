export default class Cliente {
    constructor(nome, cpf, contaCorrente) {
        this.nome = nome;
        this.cpf = cpf;
    }
    detalharCliente() {
       console.log(`Cliente: ${this.nome}`);
       console.log(`CPF: ${this.cpf}`);
    }
}