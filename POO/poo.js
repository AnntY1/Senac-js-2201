/*class Usuario {
    
    //Quando instancia a classe ele é executado automaticamente
    
    constructor() 
    {
        this.nome = 'Bono';
    }

    listar()
    
    {
       this.mostraMensagem();
    }

    editar()
    
    {
        console.log('editar Usuario');
    }

    cadastrar(){

        console.log('cadastro feito');

    }
    mostraMensagem(){
        alert('Mensagem para usuario');
  
    }
}


let user = new Usuario;
let luiz = new Usuario;
let bono = new Usuario;


user.cadastrar();
user.listar();
console.log(user.nome);



*/

//exercicio calculadora

class calculadora {
    constructor()
    {
        document.getElementById('calc').addEventListener('click', this.calcula());

    }

    calcula()
    {
        const n1 = document.getElementById('num1').value;
        const n2 = document.getElementById('num2').value;

        const resultado = this.som(n1, n2);
        this.exibeResultado(resultado);
    }
    soma(nm1, nm2)
    {
        let n1 = Number(nm1);
        let n2 = Number(nm2);
        

        return n1 + n2;
    }

    exibeResultado(res)
    {
        document.getElementById('resultado').innerText = res;
    }
}

new calculadora;