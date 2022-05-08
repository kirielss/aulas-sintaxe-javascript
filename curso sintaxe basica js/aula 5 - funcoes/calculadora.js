function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Resto da divisão (%)\n 6 - Potenciação (**)\n\n Digite 0 para interromper o programa'))
    console.log(operacao);

    if (operacao == 0){
        return false;
    }

    if (!operacao || operacao > 6){
        alert('Erro!\nOperação inválida!');
        calculadora();
    } else {

        let n1= Number(prompt('Insira o primeiro valor'));
        let n2= Number(prompt('Insira o segundo valor'));
        let resultado;

        if (!n1 || !n2){
            alert('Erro - parâmetros inválidos');
            calculadora();
        } else{

            function soma(){
                resultado = n1 + n2;
                alert(`${n1}+ ${n2}=${resultado}`);
                novaOperacao();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1}- ${n2}=${resultado}`);
                novaOperacao();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1}* ${n2}=${resultado}`);
                novaOperacao();
            }
            function divisao(){
                resultado = n1 / n2;
                alert(`${n1}/ ${n2}=${resultado}`);
                novaOperacao();
            }
            function resto(){
                resultado = n1 % n2;
                alert(`${n1}% ${n2}=${resultado}`);
                novaOperacao();
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1}** ${n2}=${resultado}`);
                novaOperacao();
            }
        }
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim \n 2 - Não');

                if (opcao == 1){
                    calculadora();
                }
                else if (opcao ==2){
                    alert('Até mais!');
                }
                else{
                    alert('Digite uma opção válida!!');
                    novaOperacao();}
        }


            /*if (operacao==1){
                soma();
            }
            if (operacao==2){
                subtracao();
            }
            if (operacao ==3){
                multiplicacao();
            }
            if (operacao==4){
                divisao();
            }
            if (operacao==5){
                resto();
            }
            if (operacao==6){
                potenciacao();
            }*/

            switch (operacao){
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisao();
                    break;
                case 5:
                    resto();
                    break;
                case 6:
                    potenciacao();
                    break;

            }
        }
}
calculadora();