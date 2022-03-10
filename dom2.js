const p = document.getElementById('paragrafo');

p.innerText = 'Meu Texto!';

if(confirm('Quer entrar com um valor?')){



let valor = prompt("Digite um valor");



if( valor >=0 && valor <=10){

    for (i=0; i< valor; i++){
        


        p.innerText = p.innerText + "numero\n";

        
    }



}else{

    p.innerText = 'valor invalido';
    
    }

}else{

    p.innerText = 'Que pena :c';
}










