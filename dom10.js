//Quando clico no elemento mais interno em uma cadeia de elentos com
//Event Listener, todos eventos dos elementos mais externos são acionados

document.querySelector('.card-title').addEventListener('click', function(e){

    console.log('Titulo');
});

document.querySelector('.card-content').addEventListener('click', function(e){

    console.log('Form');
});

document.querySelector('.card').addEventListener('click',function(e){

    console.log('Tudo');
});

