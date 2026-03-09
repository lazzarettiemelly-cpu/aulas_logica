
const prompt = require('prompt-sync')({ sigint: true });

const instituicao = {
  alunos: [
    { nome: "João Silva", notas: [8, 7.5, 9] },
    { nome: "Maria Oliveira", notas: [6, 5.5, 7] },
    { nome: "Carlos Souza", notas: [7, 7, 7] },
    { nome: "Ana Costa", notas: [4, 6, 5] }
  ]
};

function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}

function buscarAluno() {
  const nomeAluno = prompt("Digite o nome do aluno: ").trim();

  const alunoEncontrado = instituicao.alunos.find(
    aluno => aluno.nome.toLowerCase() === nomeAluno.toLowerCase()
  );

  if (alunoEncontrado) {
    const media = calcularMedia(alunoEncontrado.notas);
    const status = media >= 7 ? "Aprovado" : "Em Recuperação";

    console.log("\n--- Resultado ---");
    console.log(`Aluno: ${alunoEncontrado.nome}`);
    console.log(`Média: ${media.toFixed(1)}`);
    console.log(`Status: ${status}`);
    console.log("-----------------\n");
  } else {
    console.log("\nAluno não encontrado. Verifique o nome digitado.\n");
  }
}

buscarAluno();