const FORMULARIO = document.querySelector('#form-tarefa');
const LISTA = document.querySelector('.collection');
const BTN_LIMPAR = document.querySelector('.limpar-tarefa');
const FILTRO = document.querySelector('#filtro');
const CAMPO_TAREFA = document.querySelector('#tarefa');

function carregaMonitorDeEventos() {

    //Adicionando eventos para cada elemento do html.
    FORMULARIO.addEventListener('submit', adicionarTarefa);
    LISTA.addEventListener('click', apagarTarefa);
    BTN_LIMPAR.addEventListener('click', apagaTodasTarefas);
    FILTRO.addEventListener('keyup', filtraTarefa);

}

function pegaTarefa(){
    let tarefas;

    if(localStorage.getItem('tarefas') === null){ //se for igual a nulo, ele cria uma array tarefas.
        tarefas = [];
    
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas')); //se não, o json passa um valor para tarefas.
    } //JSON.parse: Analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string

    tarefas.forEach(function(tarefa){//repetição para cada elemento do array.
        
        //cria os novos elementos
    const LI = document.createElement('li');
    LI.ClassName = 'collection-item';
    LI.appendChild(document.createTextNode(tarefa));
    const A = document.createElement('a');
    A.className = 'apaga-tarefa secondary-content';
    const I = document.createElement('i');
    I.className = 'fa fa-remove';
    A.appendChild(I);
    LI.appendChild(A);
    LISTA.appendChild(LI);
        //fim cria os novos elementos 
    });
}


//Função para filtrar tarefas, pra cada elemento ele cria uma fução.

function filtraTarefa(evento){

    const texto = evento.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(tarefa) { // Para cada elemento que existe essa classe, ele executa essa função.

        const item = tarefa.firstChild.textContent; //primeiro filho e texto de cada tarefa.
        
        //-1 significa que não há o que esta sendo buscado
        if(item.toLowerCase().indexOf(texto) != -1){        //se o index for diferente de -1 ele mostra block
            tarefa.style.display = 'block';
        }else{

            tarefa.style.display = 'nome';     //se não mostra nome
        }
        
    });


}


function apagaTodasTarefas(evento){  

    evento.preventDeFault(); //cancela o evento se for cancelado, sem parar de executar a função

    LISTA.innerHTML = '';

    if(evento.target.parentElement.classList.contains('apaga-tarefa')){
        evento.target.parentElement.parentElement.remove();
    
    }
}

function apagarTarefa(evento){

    if(evento.target.parentElement.classList.contains('apaga-tarefa')){
        evento.target.parentElement.parentElement.remove();

    }


}

function adicionarTarefa(evento){



    evento.preventDeFault();
    if(CAMPO_TAREFA.value === ''){//Se o campo for vazio ele da o alert.

        alert('Insira uma tarefa');
   
    }else{
    

  
//cria os novos elementos

    const LI = document.createElement('li');
    LI.ClassName = 'collection-item';
    LI.appendChild(document.createTextNode(CAMPO_TAREFA.value));
    const A = document.createElement('a');
    A.className = 'apaga-tarefa secondary-content';
    const I = document.createElement('i');
    I.className = 'fa fa-remove';
    A.appendChild(I);
    LI.appendChild(A);
    //fim cria os novos elementos


    LISTA.appendChild(LI); //Jogando as informações dentro da lista ja existente. 
    
    gravaTarefaNoLocalStorage(CAMPO_TAREFA);
    CAMPO_TAREFA.value = '';

        //gravando no local Storage o que o usuario digitou.
    
    }

}

function gravaTarefaNoLocalStorage(tarefa){

    let tarefas;

    if(localStorage.getItem('tarefas') === null){ //se for igual a nulo, ele cria uma array tarefas.
        tarefas = [];
    }else{

        tarefas = JSON.parse(localStorage.getItem('tarefas')); //se não, o json passa um valor para tarefas.
    }
    tarefas.push(tarefa.value);
    localStorage.setItem('tarefas', JSON.stringify(tarefas)); //converte valor para string


}

carregaMonitorDeEventos();
