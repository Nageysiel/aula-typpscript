/*operadores aritiméticos

+ soma ou concatenação
- subtração
/ divisão
* multiplicação
** potenciação
% resto da divisão

ordem de precedência
()
**
*
/
%

+
-

++ incremento pode ser pré ++nome ou pós nome++
-- decremento

*/

const num1 = 10;
const num2 = 3;

console.log(num1 % num2);

const passo = 2;
let contador = 0;

contador= contador + passo;
console.log(contador);

//a mesma coisa só que de uma maneira diferente
// com operadores de atribuição
contador += 2;
console.log(contador);
contador += 2;
console.log(contador);
contador += 2;
console.log(contador);

//convertendo string em number
// é só envolver o número de string no parseInt

const num1 = parseInt('5');
const num2 = parseFloat('5.2');
const num3 = Number ('5'); //nesse caso ele transforma em number tanto números inteiros como ponto flutuante