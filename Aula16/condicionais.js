function salvar(){
    alert("salvou");
    document.querySelector("#txtNomeAluno");
    var htmlNomeAluno = document.querySelector("#txtNomeAluno");
    var nomeAluno = htmlNomeAluno.value;
    alert(nomeAluno);
    if(htmlNomeAluno.value == ""){
    alert("Preencha isso agora");
}
}
function exiberMensagem(msg){
    const divMsg = document.querySelector("#Mensagem");
    divMsg.innerHTML = msg;
}

