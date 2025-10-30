// duck type "autenticavel". método login lida com qualquer classe
// desde que possua os métodos e atributos necessários.
export class SistemaAutenticacao {
  /*  
  static login(funcionario, senha) {
    // método recebe objeto funcionário, de qualquer classe, contendo uma propriedade pública
    // chamada 'senha' ou um acessor get senha.
    return funcionario.senha == senha;
  }
  */
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.isAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }
  static isAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
