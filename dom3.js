const tamanho = 'A:'+ window.innerHeight + 'x L:' + window.innerWidth; //saber o tamanho da tela altura e largura.

const navegador = window.navigator; //informações do navegador. 

console.log(navegador);

const paragrafo = document.querySelector('p'); //pega um elemento do html. Selector pega tudo, paragrafo, lista, etc.

paragrafo.innerText = navegador; 
