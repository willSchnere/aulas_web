/*
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
*/
function CarregarAlunos(){
axios.get('/alunos.json')
  .then(function (response) {
    // handle success
    console.log(response)
    console.log(response.data);
    for (let index = 0; i < response.data.lenght; i++) {
        const aluno = response.data[index];
        console.log(CarregarAlunos.nome)
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
}
function BuscarCEP(){
    const cep = prompt("CEP");
    axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
