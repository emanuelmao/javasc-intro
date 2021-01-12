var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = document.querySelector(".info-imc");


console.log(tdPeso);
console.log(peso);

console.log(tdAltura);
console.log(altura);

var imc = peso / (altura*altura);

console.log(imc);

tdImc.textContent = imc;
