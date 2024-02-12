const nome ='Nageysiel';
const sobreNome ='Pires';
const idade = 35;
const peso = 87;
const altura = 1.80;// em metros
let imc = peso/(altura*altura); //peso/ (altura*altura)
let anoNascimento = 2023-idade; 

console.log(nome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'm de altura e seu IMC é de', imc);
console.log(nome, sobreNome, 'nasceu em', anoNascimento);

//outra forma de mesclar texto com variável
console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura}m de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobreNome} nasceu em ${anoNascimento}`);