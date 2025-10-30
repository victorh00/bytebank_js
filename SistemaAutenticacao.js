export class SistemaAutenticacao {
  static login(funcionario, senha) {
    // método recebe objeto funcionário, de qualquer classe, contendo propriedade senha.
    return funcionario.senha == senha;
  }
}
