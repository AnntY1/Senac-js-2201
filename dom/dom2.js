const p = document.getElementById('paragrafo');
const titulo = document.querySelector('h1');

console.log(titulo);


p.innerText = 'Meu Texto!';

if(confirm('Quer entrar com um valor?')){


let valor = prompt("Digite um valor");


if( valor >=0 && valor <=10){

    for (i=0; i< valor; i++){
        

        p.innerText = p.innerText + "numero\n";
    
    }

    titulo.style.background = 'green';

}else{

    
    p.innerText = 'valor invalido';
    
    }

}else{

    p.innerText = 'Que pena :c';
    titulo.style.backgound = 'red';
}










