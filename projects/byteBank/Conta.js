
export class Conta {
    static numeroContas = 0

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
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

    sacar(valor, taxa=1) {
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