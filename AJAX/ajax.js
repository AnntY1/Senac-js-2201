//Exemplo com XMLHttpsRequest
document.getElementById('xhr').addEventListener('click', buscarDados);

function buscarDados(){

    const XHR = new XMLHttpRequest;

    XHR.open('GET' , 'conteudo.txt', true);

    XHR.onload = function(){

        if(this.status === 200){

            document.getElementById('exibe-conteudo-recuperado').innerText = 
                this.responseText;
        }
    }

    XHR.send();
}

//Exemplo com Fetch
document.getElementById('fetch').addEventListener('click', carregaConteudo);

function carregaConteudo(){

    fetch('http://10.135.236.14:5500/aula-27-04-22/AJAX/conteudo.txt').then(function(resultado){
        return resultado.text();
    }).then(function(conteudo){
        document.getElementById('exibe-conteudo-recuperado').innerText = conteudo;
    });
}
