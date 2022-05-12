/*
try{

    executaMinhaFuncao();


    //executaMinhaFuncao();
}catch(erro){

    alert(erro.message);

}finally{


console.log('Executou');

}
*/
try{

    let a = "b";
        if(typeof a != 'boolean'){
            throw new SyntaxError('A tem que ser inteiro');
        }

        
}catch(e){

        console.log(e);
    
}finally{
    console.log('Se der erro ou não, esse código é executado!');

}