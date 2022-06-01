document.querySelector('.card-title').addEventListener('click', function(e){ //essa função recebe como parametro o E
   
//e.target Uma referência ao objeto que enviou o evento.
    console.log(e.target);
});

document.querySelector('.card-content').addEventListener('click', function(e){

    console.log(e.target);
});

document.querySelector('.card').addEventListener('click',function(e){

    console.log(e.target);
});
