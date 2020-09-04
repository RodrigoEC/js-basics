console.log("Fui carregado de um arquivo externo")

var mainTitle = document.querySelector("#main-title");
mainTitle.textContent = "I hereee";

// Calcular o IMC

function calculaIMC(paciente) {
    peso = parseInt(paciente.querySelector(".info-peso").textContent)
    altura = parseInt(paciente.querySelector(".info-altura").textContent)
    return peso / Math.pow(altura, 2)
}

const pacientes = document.querySelectorAll(".paciente")
// console.log(pacientes)

for (paciente of pacientes) {
    imcPaciente = paciente.querySelector(".info-imc")
    imcPaciente.textContent = calculaIMC(paciente)   
    // console.log(calculaIMC(paciente))
}