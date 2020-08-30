import { Cliente } from "./Cliente.js"

export class ContaPoupanca {
    constructor(saldoInicial, agencia, cliente) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }


}