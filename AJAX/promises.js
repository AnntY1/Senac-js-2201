//Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.


const POSTS = [
    {titulo: 'Post Um', cont: 'Conteúdo post um'},
    {titulo: 'Post Dois', cont: 'Conteúdo post dois'}];




//Exemplo com callback
function criaPost(post, callback){
    POSTS.push(post);
    callback();
}

function getPosts(){
    let saida = '';
    POSTS.forEach(function(post){
        saida += <li>${post.titulo}</li>;
    });
    document.body.innerHTML = saida;
}

criaPost({titulo: 'Post Três', cont: 'Conteúdo post três'}, getPosts);
criaPost({titulo: 'Post Quatro', cont: 'Conteúdo post quatro'}, getPosts);
//



//Exemplo com Promises
function criaPost(post){
    return new Promise(function(resolve, rejeita){

        const ERR = true;

        if(!ERR){
            POSTS.push(post);
            resolve(); //Retorna um objeto Promise que foi resolvido com um dado valor.

        }else{
            rejeita('Erro, não foi possível executar');
        } //Retorna um objeto Promise que foi rejeitado por um dado motivo.

    });
}

function getPosts(){ //pra cada post, ele cria uma lista com os titulos de cada um.
    let saida = '';
    POSTS.forEach(function(post){
        saida += <li>${post.titulo}</li>;
    });
    document.body.innerHTML = saida;
}

criaPost({titulo: 'Post Três', cont: 'Conteúdo post três'}).then(getPosts).catch(function(erro){

    console.log(erro);
});
