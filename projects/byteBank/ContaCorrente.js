import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta{
    static numeroContasCorrente = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia); // Calls father class
        ContaCorrente.numeroContasCorrente += 1;
    }

    sacar(valor) {
        return super.sacar(valor, 1.1);
    }
}
