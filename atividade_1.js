
const prompt = require('prompt-sync')({ sigint: true });

const instituicao = {
    alunos: [
        { nome: "Luna Pagnoncelli", notas: [8, 7, 9] },
        { nome: "Aurora Lazzaretti", notas: [5, 6, 6.5] },
        { nome: "Estella Pagnoncelli", notas: [10, 9.5, 9] },
        { nome: "Emelly Lazzaretti", notas: [6, 5.5, 7] }
    ]
};

function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

function consultarAluno() {
    let continuar = true;

    while (continuar) {
        let nomeBusca = prompt("Digite o nome do aluno (ou 'sair' para encerrar): ").trim();

        if (nomeBusca.toLowerCase() === 'sair') {
            console.log("Encerrando sistema de consulta. Até logo!");
            continuar = false;
            break;
        }

        let alunoEncontrado = null;
        for (let i = 0; i < instituicao.alunos.length; i++) {
            if (instituicao.alunos[i].nome.toLowerCase() === nomeBusca.toLowerCase()) {
                alunoEncontrado = instituicao.alunos[i];
                break;
            }
        }

        if (!alunoEncontrado) {
            console.log(`Aluno "${nomeBusca}" não encontrado na base de dados.\n`);
        } else {
            let media = calcularMedia(alunoEncontrado.notas);
            let mediaFormatada = media.toFixed(1);
            let status = media >= 7.0 ? "Aprovado ✅" : "Em Recuperação ⚠️";

            console.log(`\nAluno: ${alunoEncontrado.nome}`);
            console.log(`Média: ${mediaFormatada}`);
            console.log(`Status: ${status}\n`);
        }
    }
}

consultarAluno();