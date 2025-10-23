import { Funcionario } from "./Funcionario.js";

export class Gerente {
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf);
    this.bonificacao = 1.1;
  }
}
