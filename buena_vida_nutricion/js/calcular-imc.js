var titulo = document.querySelector(".titulo");
titulo.textContent = "Buena Vida Nutrición";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    pesoValido = validarPeso(peso);
    alturaValida = validarAltura(altura);

    if (!pesoValido) {
        console.log("Peso incorrecto!");
        tdIMC.textContent = "Peso incorrecto!";
        pesoValido = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if (!alturaValida) {
        console.log("Altura incorrecta!");
        tdIMC.textContent = "Altura incorrecta!";
        alturaValida = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if (pesoValido && alturaValida) {
        
        tdIMC.textContent = calcularIMC(peso,altura);
    }
    
}

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validarPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }
    else {
        return false;
    }
}

function validarAltura(altura) {
    if (altura >= 0 && altura < 3.0) {
        return true;
    }
    else {
        return false;
    }
}