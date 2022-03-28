let saida;
saida = document;

saida = document.head;
saida = document.body;
saida = document.body.firstElementChild; // primeiro elemento de uma hieraquia
saida = document.body.firstElementChild.firstElementChild; // segundo elemento de uma hieraquia
saida = document.body.firstElementChild.firstElementChild.firstElementChild;// terceiro elemento de uma hieraquia
saida = document.doctype; 
saida - document.domain; 
saida = document.URL;
saida = document.characterSet;
saida = document.forms; //formulário
saida = document.forms[0]; //vetor, mais de um formulário
saida = document.forms[0][0]; //pegar o primeiro elemento dentro do primeiro formulário
saida = document.links;
saida = document.links[0];
saida = document.links[0].className;
saida = document.scripts; //retorna uma lista dos elementos script do documento
saida = document.scripts[2];
saida = document.scripts[2].getAttribute('src');


console.log(saida);

