var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");


console.log(tdPeso);
console.log(peso);

console.log(tdAltura);
console.log(altura);

var imc = peso / (altura*altura);

console.log(imc);

tdImc.textContent = imc;
