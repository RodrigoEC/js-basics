import { Cliente } from "./Cliente.js"

export class ContaCorrente {
    static numeroContas = 0
    agencia;
    _cliente;
    
    // #saldo
    _saldo;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroContas += 1;
    }

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if (valor < 0) {
            // Early return
            return 0;
        }
        this._saldo += valor;
        return valor
    }

    sacar(valor) {
        if(valor > this._saldo || valor < 0) return 0; // inline IF

        this._saldo -= valor;
        return valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        return conta.depositar(valorSacado)
    }
}
