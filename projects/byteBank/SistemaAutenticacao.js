// ser autenticavel significa ter o método "autenticaSenha"

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticaSenha(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return 'autenticaSenha' in autenticavel && 
            autenticavel.autenticaSenha instanceof Function;
    }
}