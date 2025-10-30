import Cliente from "./Cliente.js";
import Endereco from "./Endereco.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Conta } from "./Conta/Conta.js";
import Gerente from "./Funcionarios/Gerente.js";
import Diretor from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

console.log("\ngerando endereço...");
const address = new Endereco("Líbero Badaró", 666, "São Paulo");

console.log("gerando clientes...");
const cliente1 = new Cliente("João", 111, address);
const conta1 = new ContaCorrente(99, 9901, cliente1, 1000);

const cliente2 = new Cliente("Maria", 222, address);
const conta2 = new ContaPoupanca(99, 9901, cliente2, 2000);

console.log("\ntestando operações por tipo de conta...");
const logs1 = new Array();
const logs2 = new Array();

console.log("\nconta corrente...");
console.log("Cliente 1:");
cliente1.detalharCliente();

conta1.sacar(50);
logs1.push(`\nsaque realizado. novo saldo: ${conta1.saldo}`);

conta1.depositar(1000);
logs1.push(`depósito realizado. novo saldo: ${conta1.saldo}`);

conta1.transferir(450, conta2);
logs1.push(`transferência realizada. novo saldo ${conta1.saldo}`);

for (let log of logs1) {
  console.log(log);
}

console.log("\nconta poupança...");
console.log("Cliente 2:");
cliente2.detalharCliente();

conta2.sacar(50);
logs2.push(`\nsaque realizado. novo saldo: ${conta2.saldo}`);

conta2.depositar(1000);
logs2.push(`depósito realizado. novo saldo: ${conta2.saldo}`);

conta2.transferir(450, conta1);
logs2.push(`transferência realizada. novo saldo ${conta2.saldo}`);

for (let log of logs2) {
  console.log(log);
}

console.log("\ntestando super...");
conta2.teste();

console.log("\nTestando condição do constructor...");
const conta3 = new Conta(1, 1, cliente1, 1000);

console.log("\ntestando autenticação funcionários");
const diretor = new Diretor("joão", 10000, 100);
const gerente = new Gerente("maria", 5000, 200);
diretor.cadastrarSenha(123456);
gerente.cadastrarSenha(456789);

const diretorLogado = SistemaAutenticacao.login(diretor, 123456);
const gerenteLogado = SistemaAutenticacao.login(gerente, 111111);
console.log("senha certa:");
if (diretorLogado) {
  console.log(`funcionário ${diretor.nome} autenticado com sucesso.`);
} else {
  console.log(`falha na autenticação do funcionário ${diretor.nome}`);
}
console.log("senha errada:");
if (gerenteLogado) {
  console.log(`funcionário ${gerente.nome} autenticado com sucesso.`);
} else {
  console.log(`falha na autenticação do funcionário ${gerente.nome}`);
}

console.log("\ntestando autenticação cliente");
const enderecoCliente = new Endereco("líbero", 10, "sp");
const cliente = new Cliente("pedro", 900, enderecoCliente);
cliente.cadastrarSenha(123);
let clienteLogado = SistemaAutenticacao.login(cliente, 123);
if (clienteLogado) {
  console.log(`cliente ${cliente.nome} autenticado com sucesso.`);
} else {
  console.log(`falha na autenticação do cliente ${cliente.nome}`);
}
console.log("trocando senha...");
cliente.cadastrarSenha(999);
console.log("senha errada:");
clienteLogado = SistemaAutenticacao.login(cliente, 123);
if (clienteLogado) {
  console.log(`cliente ${cliente.nome} autenticado com sucesso.`);
} else {
  console.log(`falha na autenticação do cliente ${cliente.nome}`);
}
