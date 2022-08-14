import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente('Ricardo', 64062389070);

const contaCorrente = new ContaCorrente(cliente1, 1001);
contaCorrente.depositar(500);
contaCorrente.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

console.log(contaCorrente);
console.log(contaPoupanca);