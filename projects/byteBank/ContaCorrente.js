import { Cliente } from "./Cliente.js"

export class ContaCorrente {
    static numeroContas = 0
    
    constructor(agencia, cliente) {
        this._agencia = agencia;
        this._cliente = cliente;
        // #saldo, futuro atributo privado
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

    get agencia() {
        return this._agencia;
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
