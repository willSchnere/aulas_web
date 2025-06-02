
function Salvar(){
    const inputNomeAluno = prompt("Nome Aluno");
     const nota1 =  Number(prompt("Nome 1bim"));
     const nota2 =  Number(prompt("Nome 2bim"));
     let media = (nota1+nota2)/2;

let aluno = {
    "nome" : inputNomeAluno,
    "nota1Bim" : Number(nota1),
    "nota2Bim" : Number(nota2),
    "aprovado" : true,
    "Turma" : "ESBN",
    "Periodo" : "noite",
    "Media" : media

};
console.log(aluno);
console.log(typeof(aluno))
}
