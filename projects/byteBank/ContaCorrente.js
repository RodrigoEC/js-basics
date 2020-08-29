class ContaCorrente {
    #agencia;
    // #saldo
    _saldo = 0;
    cliente;


    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor
        }
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
        }
    }

    getSaldo() {
        return this._saldo
    }
}


const ContaCorrente1 = new ContaCorrente();
ContaCorrente1.agencia = `1001`;

ContaCorrente1.depositar(145)
ContaCorrente1.sacar(120)
console.log(ContaCorrente1)
console.log(ContaCorrente1.getSaldo())