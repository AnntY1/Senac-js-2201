document.getElementById('fetch').addEventListener('click', carregaConteudo);

function carregaConteudo(){

    fetch('http://10.135.236.34:5500/AJAX/cotacoes.html').then(function(resultado){
        return resultado.text();
    }).then(function(conteudo){
       
       
        const moedas = JSON.parse(conteudo);
        
        document.querySelector('ul').innerHTML = '';

        const ul = document.querySelector('ul');

        const nomes = moedas.moedas;
        const valores = moedas.valores;
        
        for(let i = 0; i < nomes.length; 1++){

            const li = document.createElement('li');
            const text = document.createTextNode(nome[i] = ': ' + valores[i]);
            li.appendChild(text);
            ul.appendChild(li);


        }
    });
}
