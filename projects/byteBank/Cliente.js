
export class Cliente {
    constructor(nome, CPF, senha) {
        this._nome = nome;
        this._cpf = CPF
        this._senha = senha;
    }

    get nome() {
        return this._nome;
    }

    get CPF() {
        return this._cpf
    }

    autenticaSenha(senha) {
        return this._senha == senha;
    }
    
    set nome(novoNome) {
        if (this.nome instanceof String) {
            this.nome = novoNome;
        }
    }

}