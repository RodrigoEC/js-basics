// ser autenticavel significa ter o método "autenticaSenha"

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        return autenticavel.autenticaSenha(senha);
    }
}