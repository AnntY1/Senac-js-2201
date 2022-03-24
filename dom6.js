
const LI = document.createElement('li');

LI.className = 'collection-item';

LI.id = 'nova-tarefa-qualquer';

LI.setAttribute('title','Pare o mouse para ver');

const TEXTO = document.createTextNode('Tarefa inserida dinamicamente');

LI.appendChild(TEXTO);

console.log(LI);

const UL = document.querySelector('ul.collection');

UL.appendChild(LI);

//Criando o X.

const A = document.createElement('a');

A.href = '#';

A.className = 'delete-item secondary-content';

LI.appendChild(A); //Colocando A dentro do li

const I = document.createElement('i');

I.className = 'fa fa-remove';

A.appendChild(I); // I dentro do A


// mudando o h5
const novoTitulo = document.createElement('h5');

novoTitulo.id = 'task-title'; //define o id

novoTitulo.appendChild(document.createTextNode('listinha'));

const tituloAntigo = document.getElementById('task-title');

const acaoNoCard = document.querySelector('.card-action');

acaoNoCard.replaceChild(novoTitulo, tituloAntigo);

