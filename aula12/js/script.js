/*
Nesse exercício eu pego dois números do usuário e somo
*/

let num1 = prompt ('Digite o primeiro número');
let num2 = prompt ('Digite o segundo número');

num1 = Number(num1);
num2 = Number(num2);

let resultado = num1 + num2;

alert (`O resultado da sua soma é ${resultado}`);

//a expressão pode ser colocada dentro do templaete string ${num1+num2}