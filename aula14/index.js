let umaString = 'Um texto.';

//funcionando como uma array
console.log(umaString[6]);//retorna o elemento na sexta posição

//Outro forma de usar o indice de string
console.log(umaString.charAt(6));//esse não retorna erro se não tiver nada na posição escolhida

//pesquisando em qual local a palavra se inicia
console.log(umaString.indexOf('texto'));

//substituindo uma palavra dentro de uma string
console.log(umaString.replace('Um', 'outro'));

//substituindo uma letra do texto através de uma expressão regular
console.log(umaString.replace(/t/, 'p')); //se colocar a flag g logo depois da expressão ele muda todas as letras

//fatiando a palavra
console.log(umaString.slice(-2)) //o número é o índice da palavra

//tudo maiuscula
console.log(umaString.toUpperCase())