console.log(`Trabalhando com listas`);

const cidades = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(cidades);
cidades.push(`Campina Grande`);
console.log(cidades);
cidades.splice(1, 1);
console.log(cidades);
console.log(cidades[1]);
