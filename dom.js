
const p = document.getElementById('paragrafo'); //busca o id do html refente a paragrafo.

p.innerText = 'Meu Texto!'; //mudando o texto do paragrafo.

p.style.background ='red'; //muda o background para vermelho (referente ao paragrafo)

console.log(p);


const cores = ['blue', 'red', 'yellow', 'purple'];

for (i=0, c = 0; i<=100 ; i++, c++){ //estrutura de repetição

    p.style.background = cores [c];

    console.log(c + ': ' + p.style.background); 

    if(c >= 4) c = -1;


}
console.log(p);