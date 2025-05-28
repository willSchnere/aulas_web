let numeros = [10,"Testando",30.50,"Funcionou"];
/*console.log(`#0: ${numeros[0]}`);
console.log(`#1: ${numeros[1]}`);
console.log(`#2: ${numeros[2]}`);
console.log(`#3: ${numeros[3]}`);
*/
if(numeros [3] == undefined){

}
/*
Indice: e a posição do item dentro do array
*/
let idx = 0;
// enquanto o indice for menor que o ta,anho
while(idx < numeros.length){
console.log(`#${idx}: ${numeros[idx]}`);
idx += 1;
}

    const divP = document.querySelector("#div-paragrafo");

let numInicial = 0;
let numFinal = 1000;

/*while(numInicial < numFinal){

    if (numInicial %3 ==0 ){
    console.log(`# ${numInicial}`);
    divP.innerHTML += `<p>${numInicial}</p>` ;
    }
    numInicial++;
}
let i =0;
for(let i = 0; i < 10 ; i++){

}
*/
i = 0;
function GerarParagrafo(){
    const inputQtd = document.querySelector("#texQtd");
    const div = document.querySelector("#div-paragrafo");

    const qtd = Number(inputQtd.value);
    divP.innerHTML = "";
    for(let i = 0; i<qtd; i++){
        divP.innerHTML += `<p>${i}</p>`;
    }
}
// FOR
// -INICIO / -CONDIÇÃO / -INCREMENTO
// (numero %2 != 0) = impar
// (numero %2 == 0) = par
// idx = idx +
// idx += 1