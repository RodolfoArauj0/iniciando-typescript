"use strict";
var button = document.getElementById('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var devPrintar = true;
var frase = "O valor é: ";
function adicionarNumeros(num1, num2, devPrintar, frase) {
    var resultado = num1 + num2;
    if (devPrintar) {
        console.log(frase + resultado);
    }
    return num1 + num2;
}
if (button) {
    button.addEventListener('click', function () {
        console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devPrintar, frase));
    });
}
