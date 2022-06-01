//Exemplo com XMLHttpsRequest

/*O que é AJAX: Quando essas tecnologias são combinadas no modelo AJAX, as aplicações web que a utilizam são capazes de fazer 
rapidamente atualizações incrementais para a interface do usuário sem recarregar a página inteira do navegador. 
Isso torna a aplicação mais rápida e sensível às ações do usuário.
*/

document.getElementById('xhr').addEventListener('click', buscarDados);

function buscarDados(){

    const XHR = new XMLHttpRequest; //recebe a resposta em xml

    XHR.open('GET' , 'conteudo.txt', true); //inicaliza uma requisição, e recebe 3 parametros. metodo que vai usar, url que vai fazer a solicitação, e se vai ser assincrono

    XHR.onload = function(){

        if(this.status === 200){ // se essa resposta der 200(ok) ele entra no if. 

            document.getElementById('exibe-conteudo-recuperado').innerText = 
                this.responseText; //executa o if, trazendo o conteudo recuperado do html
        }
    }

    XHR.send(); //envia a solicitação.
}



//A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas.

//Exemplo com Fetch
document.getElementById('fetch').addEventListener('click', carregaConteudo);

function carregaConteudo(){

//O fetch faz a requisição do link, e executa a função resultado. 

    fetch('http://10.135.236.14:5500/aula-27-04-22/AJAX/conteudo.txt%27').then(function(resultado)%7B   
        return resultado.text(); //retorna o resultado da função em texto.
    }).then(function(conteudo){
        document.getElementById('exibe-conteudo-recuperado').innerText = conteudo; //feito isso ele adiciona o resultado no exibe-conteudo.
    });
}
