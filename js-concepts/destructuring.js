console.log("Destructuring in JS");

const numerosPares = [2, 4, 6, 8]
const numerosImpares = [1, 3, 5, 7]

// distructuring: ..., { propriedade }

const numeros = [...numerosPares, ...numerosImpares]
console.log(numeros)

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]
console.log(num1, num2, outrosNumeros)

// standard values
const [nome1 = "Rodrigo"] = [1]
console.log(nome1)
const [nome2 = "Rodrigo"] = []
console.log(nome2)

// Distructuring objects

const pessoa = {
    nome: "Rodrigo",
    idade: 20
}

const pessoaComTelefone = {...pessoa, telefone: "(XX) XXXXX-XXXX"}
console.log(pessoa, "\n", pessoaComTelefone)

const { nome } = pessoa
console.log(nome)


function imprimeDados({ nome, idade }) {
    console.log(nome, idade)
}

imprimeDados(pessoa)