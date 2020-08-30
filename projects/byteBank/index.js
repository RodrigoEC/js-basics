import { Cliente } from "./Cliente.js"
import { Gerente } from "./funcionarios/Gerente.js"
import { Diretor } from "./funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"


const diretorRodrigo = new Diretor("Rodrigo", 10000, 12345678900);
diretorRodrigo.cadastraSenha("123456789")
const gerenteRicardo = new Gerente("Ricardo", 5000, 12345678911);
gerenteRicardo.cadastraSenha("123")

const clienteAlice = new Cliente("Alice", 12345678922, "456")
const estaLogado = SistemaAutenticacao.login(diretorRodrigo, "123456789");
const gerenteLogado = SistemaAutenticacao.login(gerenteRicardo, "123");
const clienteLogada = SistemaAutenticacao.login(clienteAlice, "456");

console.log(`${diretorRodrigo.nome}, logado?`, estaLogado)
console.log(`${gerenteRicardo.nome}, logado?`, gerenteLogado)
console.log(`${clienteAlice.nome}, logada?`, clienteLogada)