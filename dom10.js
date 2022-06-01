document.body.addEventListener('click', function(e){
    if(e.target.parentElement.classList.contains('delete-item') === true){  //Se o if for true ele deleta o elemento pai do elemento pai, daquele que está sendo chamado.
        e.target.parentElement.parentElement.remove();
    };
});
