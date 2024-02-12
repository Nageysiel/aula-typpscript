const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo'); //faz com que o js substitua o html pelo id
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número + 2 é ${numero+2}.</p>`