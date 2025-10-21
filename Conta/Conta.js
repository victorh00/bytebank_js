export class Conta {
  static numContas = 0;

  agencia;
  conta;
  cliente;
  #saldo;

  constructor(agencia, conta, cliente, saldoInicial) {
    this.agencia = agencia;
    this.conta = conta;
    this.cliente = cliente;
    this.#saldo = saldoInicial;
    Conta.numContas += 1;
    if (this.constructor == Conta) {
      console.log(
        "Não instanciar Conta diretamente, prefira ContaCorrente ou ContaPoupanca"
      );
    }
  }

  get agencia() {
    return this.agencia;
  }
  get conta() {
    return this.conta;
  }
  get cliente() {
    return this.cliente;
  }
  get saldo() {
    return this.#saldo;
  }

  sacar(valor) {
    let taxa = 1;
    this._sacar(valor, taxa);
  }

  _sacar(valor, taxa) {
    const valorSacado = valor * taxa;
    if (this.#saldo >= valorSacado) {
      return (this.#saldo -= valorSacado);
    }
    return 0;
  }

  depositar(valor) {
    this.#saldo += valor;
    return this.#saldo;
  }

  transferir(valor, clienteDestino) {
    if (valor > this.#saldo) {
      console.log("Saldo insuficiente.");
      return;
    } else {
      this.sacar(valor);
      clienteDestino.depositar(valor);
    }
  }

  teste() {
    console.log("Teste na classe Conta");
  }
}
