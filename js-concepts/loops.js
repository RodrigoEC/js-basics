console.log("\nWorking with loops");

const cidades = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Campina Grande`
);

const idadeComprador = 18;
const acompanhad = true;
let ticketComprado = false;
const destino = "Campina Grande";
const podeComprar = idadeComprador >= 18 || acompanhad == true;

// for (let cidade of cidades){
//     if (cidade === destino) {
//         console.log("Nossas viagens lhe contemplam!")
//     }
// }

let contador = 0
let existe = false;
while(!existe && contador <= cidades.length) {
    let cidade = cidades[contador];
    if (cidade == destino) {
        existe = true;
    }
    contador += 1
}

if (existe) {
    console.log("Destino existe.");
} else {
    console.log("Destino inexistente.");
}
