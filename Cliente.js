import Endereco from "./Endereco.js";

export default class Cliente {
  nome;
  #cpf;
  #endereco;
  #senha;

  constructor(nome, cpf, endereco) {
    this.nome = nome;
    this.#cpf = cpf;
    if (endereco instanceof Endereco) {
      this.#endereco = endereco;
    }
  }

  get nome() {
    return this.nome;
  }

  get endereco() {
    return this.#endereco;
  }

  get cpf() {
    return this.#cpf;
  }

  set endereco(valor) {
    if (typeof valor == "Endereco") {
      this.#endereco = valor;
    }
  }

  detalharCliente() {
    console.log(`Nome: ${this.nome}`);
    console.log(`CPF: ${this.#cpf}`);
    this.endereco.detalharEndereco();
  }

  cadastrarSenha(senha) {
    this.#senha = senha;
  }

  autenticar(senha) {
    return this.#senha == senha;
  }
}
