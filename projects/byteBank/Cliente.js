
export class Cliente {
    nome;
    _cpf;

    constructor(nome, CPF) {
        this.nome = nome;
        this.cpf = CPF
    }

    get nome() {
        return this.nome;
    }

    get CPF() {
        return this._cpf
    }
    
    set nome(novoNome) {
        if (nome instanceof String) {
            this.nome = novoNome;
        }
    }

}