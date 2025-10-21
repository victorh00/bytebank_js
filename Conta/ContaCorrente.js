import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numContas = 0;
  constructor(agencia, conta, cliente, saldo) {
    super(agencia, conta, cliente, saldo);
    ContaCorrente.numContas += 1;
  }
  sacar(valor) {
    let taxa = 1.1;
    this._sacar(valor, taxa);
  }
}
