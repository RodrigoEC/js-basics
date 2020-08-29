export class ContaCorrente {
    #agencia;
    cliente;

    // #saldo
    _saldo = 0;


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

    getSaldo() {
        return this._saldo
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        return conta.depositar(valorSacado)
    }
}
