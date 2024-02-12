let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

num1 = parseFloat (num1.toFixed(2)); //transforma o num1 em um número inteiro

console.log(num1);

console.log(num1.toString() + num2); //transformando um número em uma string
console.log(num1.toString(2));//transforma o número em binário
console.log(num1.toFixed(2)) //arredondando um número, usando apenas 2 casas após a vírgula