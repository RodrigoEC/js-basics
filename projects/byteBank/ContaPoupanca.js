import { Conta } from "./Conta.js"

export class ContaPoupanca extends Conta{
    static numeroContasPoupanca = 0;
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
        ContaPoupanca.numeroContasPoupanca += 1;
    }

}