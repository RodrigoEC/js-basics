
export class Cliente {
    constructor(nome, CPF) {
        this._nome = nome;
        this._cpf = CPF
    }

    get nome() {
        return this._nome;
    }

    get CPF() {
        return this._cpf
    }
    
    set nome(novoNome) {
        if (this.nome instanceof String) {
            this.nome = novoNome;
        }
    }

}