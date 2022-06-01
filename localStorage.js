//LocalStorage Armazena dados que são inseridos.
//SessionStorage - Ao fechar a janela os dados são limpos. 


const OBJ = {nome: "Bono", 
            idade: 37,
            fazCompra: function(){
                console.log('comprou alguma coisa');
            
        }};

 console.log(OBJ);

// OBJ.fazCompra();

const STR = '{"nome": "Camila", "idade": 37}';

console.log(JSON.parse(STR)); //Analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string. Transformando ele em objeto

localStorage.setItem('nome', 'Camila'); //Armazenando os dados

const NOME = localStorage.getItem('nome'); //pegando as informações do localstorage.

console.log(NOME);

sessionStorage.setItem('idade', '37');

const IDADE = sessionStorage.getItem('idade');

console.log(IDADE);

document.querySelector('input.btn').addEventListener('click', function(e){
    e.preventDefault(); //cancela o evento se for cancelavel sem parar a propagação do mesmo.
    const TAREFA = document.querySelector('#task').value; //pegando o valor da task
    document.querySelector('#task').value = ''; //passa como vazio
    localStorage.setItem('tarefa', TAREFA); //armazena o valor que o usuario digitou.

});
