class ContaCorrente {
    #agencia;
    // #saldo
    _saldo = 0;
    cliente;


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
}


const ContaCorrente1 = new ContaCorrente();
ContaCorrente1.agencia = `1001`;

ContaCorrente1.depositar(145)

const valorSacado = ContaCorrente1.sacar(-120)
console.log(`Foram sacados R$${valorSacado}`)


console.log(ContaCorrente1.getSaldo())