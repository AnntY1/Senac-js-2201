class Calculadora {

    constructor()
    {
        const operacao = document.getElementById('operacao').value;
        
        try{
            this.calcula(operacao);
        }catch(e){
            alert('Escolha uma operação');
        }
    }

    calcula(operacao)
    {
        const n1 = document.getElementById('num1').value; 
        const n2 = document.getElementById('num2').value;

        let resultado;

        switch(operacao){ //parace um if/else
            case 'soma':
                resultado = this.soma(n1, n2);
                break;
            case 'subtracao':
                resultado = this.subtracao(n1, n2);
                break;
            default:
                throw SyntaxError('Operação não disponível');
        }

        this.exibeResultado(resultado);
    }

    soma(nm1, nm2)
    {
        let n1 = Number(nm1);
        let n2 = Number(nm2);

        return n1 + n2;
    }

    subtracao(nm1, nm2)
    {
        let n1 = Number(nm1);
        let n2 = Number(nm2);

        return n1 - n2;
    }    

    exibeResultado(res)
    {
        document.getElementById('resultado').innerText = res;
    }
    
    static metodoStatico()
    {
        console.log('Executou');
    }
}

class CalculadoraAvancada extends Calculadora{

    constructor(){
        super();
    }

    calcula(operacao)
    {
        const n1 = document.getElementById('num1').value; 
        const n2 = document.getElementById('num2').value;

        let resultado;

        switch(operacao){
            case 'soma':
                resultado = this.soma(n1, n2);
                break;
            case 'subtracao':
                resultado = this.subtracao(n1, n2);
                break;
            case 'divisao':
                resultado = this.divisao(n1, n2);
                break;
            case 'multiplicacao':
                resultado = this.multiplicacao(n1, n2);
                break;
            default:
                throw SyntaxError('Operação não disponível');
        }

        this.exibeResultado(resultado);
    }

    multiplicacao(nm1, nm2)
    {
        let n1 = Number(nm1);
        let n2 = Number(nm2);

        return n1 * n2;
    }

    divisao(nm1, nm2)
    {
        let n1 = Number(nm1);
        let n2 = Number(nm2);

        return n1 / n2;
    }
}

document.getElementById('calc')
            .addEventListener('click', function(e){

    e.preventDefault();

    Calculadora.metodoStatico();

    const obj = new CalculadoraAvancada;
});
