import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  static numContas = 0;
  constructor(agencia, conta, cliente, saldo) {
    super(agencia, conta, cliente, saldo);
    ContaPoupanca.numContas += 1;
  }
  teste() {
    super.teste();
    console.log("Teste na classe ContaPoupanca");
  }
}
