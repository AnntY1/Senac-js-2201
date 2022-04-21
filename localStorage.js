// De objeto JSON para String

const OBJ = {nome: "Bono", idade: 37};

console.log( JSON.stringify(OBJ) );

//De string para objeto JSON

const STR = '{nome": "Bono", "idade": 37}'; 

console.log( JSON.parse(STR) );

localStorage.setItem('nome', 'Bono');

const NOME = localStorage.getItem('nome');

console.log(NOME);

sessionStorage.setItem('idade', '37');

const IDADE = sessionStorage.getItem('idade');

console.log(IDADE);

//recupera valor do input preenchido pelo usuario e adiciona no storage
document.querySelector('input.btn').addEventListener('click', function(e){

    //previnir o comportamento padrão do botão
    e.preventDefault();

    const TAREFA = document.querySelector('#task').value;
    
  let tarefas;

  //verificando no localstorage se existe o item tarefas.
  if(localStorage.getItem('tarefas') === null){

    tarefas = [];

  }else{

    tarefas = JSON.parse(localStorage.getItem('tarefas'));

  }

  tarefas.push(TAREFA);

  localStorage.setItem('tarefas', JSON.stringify(tarefas));

  console.log(tarefas);


  document.getElementById('task').value = '';


});

//Para sessiomStorage é só trocar todos localstorage para sessionStorage