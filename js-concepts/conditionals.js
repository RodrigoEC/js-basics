console.log(`Condicionais`);


const cidades = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const acompanhado = false

console.log(cidades);
cidades.push(`Campina Grande`);
console.log(cidades);

if (idadeComprador >= 18 || acompanhado) {
    console.log(`Compra realizada.`)
    cidades.splice(1, 1);
} else {
    console.log(`Compra não permitida.`)
}

console.log(cidades);
