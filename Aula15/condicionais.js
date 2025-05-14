/*
&& = e
|| = ou
!=diferente
==  = compara valor igual
===  = compara se o valor e o tipo e igual
> maior
< menor
>= maior ou igual
<= menor ou igual
*/
function PedirTexto(){
    const texto = prompt("Digite algo:");
    if(texto != ""){
        console.log(texto);
    }
    else{
        console.log("Valor invalido");
    }
}

function PedirTexto2(){
    const text = prompt("Digite algo");
    if(isNaN(text) == false){
        console.log("E numero");
        const numero = Number(text);
        if(numero % 2 == 0){
            console.log("PAR");
        }
        else{
            console.log("IMPAR");
        }
    }
    else{
        console.log("Não e um numero");
    }
}