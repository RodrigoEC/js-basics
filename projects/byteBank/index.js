import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente();
const ContaCorrente1 = new ContaCorrente();
const ContaCorrente2 = new ContaCorrente();

cliente1.nome = `ricardo`;
cliente1.cpf = `034.256.242-84`;

ContaCorrente1.agencia = `1001`;
ContaCorrente1.cliente = cliente1

ContaCorrente1.agencia = `1002`;
ContaCorrente1.cliente = cliente1

ContaCorrente1.depositar(145)
// const valorSacado = ContaCorrente1.sacar(-120)
// console.log(`Foram sacados R$${valorSacado}`)

console.log(cliente1)
console.log('\n', ContaCorrente1)
console.log(`\n- Saldo da conta corrente 01: R$${ContaCorrente1.getSaldo()}`)

const valorTransferido = ContaCorrente1.transferir(40, ContaCorrente2)

console.log(`Foram transferidos R$${valorTransferido} para a conta corrente número 2`)
console.log(`- Saldo da conta corrente 01: R$${ContaCorrente1.getSaldo()}`)