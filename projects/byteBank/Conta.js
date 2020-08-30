import { Cliente } from "./Cliente.js"

// Classe abstrata
export class Conta {
    static numeroContas = 0

    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor === Conta) {
            throw new Error("Você não pode instanciar um objeto do tipo Conta, uma vez que essa é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this.cliente = cliente;
        this._agencia = agencia;
        Conta.numeroContas += 1;
    
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
    
    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    // Método abstrato
    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato.");
    }

    _sacar(valor, taxa) {
        const valorTotal = valor * taxa;

        if(valorTotal > this._saldo || valorTotal < 0) return 0; // inline IF

        this._saldo -= valorTotal;
        return valor;
    }

    depositar(valor) {

        if (valor < 0) {
            // Early return
            return 0;
        }
        this._saldo += valor;
        return valor
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        return conta.depositar(valorSacado)
    }
}