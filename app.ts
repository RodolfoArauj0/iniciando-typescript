let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;
let devPrintar = true;
let frase = "O valor é: ";

function adicionarNumeros(num1: number, num2: number, devPrintar: boolean, frase: string) {
    let resultado = num1 + num2
    if (devPrintar) {
        console.log(frase + resultado)
    }

    return num1 + num2
}

if (button) {
    button.addEventListener('click', () => {
        console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devPrintar, frase))
    })
}

