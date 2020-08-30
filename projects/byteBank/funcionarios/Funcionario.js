export class Funcionario {
    constructor(nome, salario, cpf) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._bonificacao = 1;
        this._senha;
    }

    get senha() {
        return this._senha;
    }

    get nome() {
        return this._nome;
    }

    cadastraSenha(senha) {
        this._senha = senha;
    }

    autenticaSenha(senha) {
        return this._senha == senha;
    }
}