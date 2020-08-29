
export class Cliente {
    nome;
    
    set nome(novoNome) {
        if (nome instanceof String) {
            this.nome = novoNome;
        }
    }

    get nome() {
        return this.nome;
    }
 
    cpf;


    get CPF() {
        return this.cpf
    }

    set CPF(novoCPF) {
        this.cpf = novoCPF
    }
}