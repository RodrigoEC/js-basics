import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js"
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente(`ricardo`, `034.256.242-84`);
const ContaCorrente1 = new ContaCorrente(0, "1001", cliente1);
const ContaCorrente2 = new ContaCorrente(0, "1002", cliente1);

ContaCorrente1.depositar(145)
// const valorSacado = ContaCorrente1.sacar(-120)
// console.log(`Foram sacados R$${valorSacado}`)

console.log(cliente1)
console.log('\n', ContaCorrente1)
console.log(`\n- Saldo da conta corrente 01: R$${ContaCorrente1.saldo}`)

const valorTransferido = ContaCorrente1.transferir(40, ContaCorrente2)

console.log(`Foram transferidos R$${valorTransferido} para a conta corrente número 2`)
console.log(`- Saldo da conta corrente 01: R$${ContaCorrente1.saldo}`)

console.log('\n\n', cliente1, '\n\n', ContaCorrente1, '\n')
console.log(Conta.numeroContas)

const contaPoupanca1 = new ContaPoupanca(50, "1001", cliente1)
console.log(`conta poupança:`, contaPoupanca1)
console.log(Conta.numeroContas)

const conta1 = new ContaSalario(cliente1)

console.log(conta1)