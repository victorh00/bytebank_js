export default class Endereco {
  rua;
  numero;
  cidade;
  constructor(rua, numero, cidade) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
  }
  get rua() {
    return this.rua;
  }
  get numero() {
    return this.numero;
  }
  get cidade() {
    return this.cidade;
  }
  set rua(valor) {
    if (typeof valor == "string") {
      this.rua = valor;
    }
  }
  set numero(valor) {
    if (typeof valor == "number") {
      this.numero = numero;
    }
  }
  set cidade(valor) {
    if (typeof valor == "string") {
      this.cidade = valor;
    }
  }
  detalharEndereco() {
    console.log(`Rua: ${this.rua}`);
    console.log(`Número: ${this.numero}`);
    console.log(`Cidade: ${this.cidade}`);
  }
}
