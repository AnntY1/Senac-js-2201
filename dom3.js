const tamanho = 'A:'+ window.innerHeight + 'x L:' + window.innerWidth;

const navegador = window.navigator;

console.log(navegador);

const paragrafo = document.querySelector('p');

paragrafo.innerText = navegador;
