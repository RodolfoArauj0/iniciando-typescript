"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(2, 4));
console.log(somarValores("Olá ", "Seja bem vindo"));
console.log(somarValores("3", "4"));
console.log(somarValores("Número: ", 4));
function soma(numero1, numero2) {
    return numero1 + numero2;
}
console.log(soma(4, 4));
function printarDados(valor1, valor2) {
    return console.log(valor1 + valor2);
}
printarDados(3, 3);
function somarValoresNmericos(numero1, numero2, callback) {
    var resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNmericos(2, 2, aoQuadrado));
console.log(somarValoresNmericos(2, 2, dividirPorEleMesmo));
