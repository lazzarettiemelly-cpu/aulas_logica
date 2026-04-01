const prompt = require("prompt-sync")();

const perguntas = [
  {
    pergunta: "Qual foi o primeiro pais que o Brasil se conectou?",
    resposta: "portugal"
  },
  {
    pergunta: "Qual a raiz quarta de 625?",
    resposta: "5"
  },
  {
    pergunta: "Qual o jogo mais antigo?",
    resposta: "senet"
  }
];

let pontos = 0;

console.log("**** QUIZ ****\n");

for (let i = 0; i < perguntas.length; i++) {
  
  
  let respostaUsuario = prompt("Pergunta " + (i + 1) + ": " + perguntas[i].pergunta + " ");

  if (respostaUsuario.toLowerCase() === perguntas[i].resposta) {
    console.log("Acertou!\n");
    pontos++;
  } else {
    console.log("Errou! Resposta correta: " + perguntas[i].resposta + "\n");
  }
}

console.log("Você fez " + pontos + " de " + perguntas.length + " pontos!");

if (pontos === perguntas.length) {
  console.log("Perfeito!");
} else if (pontos >= 2) {
  console.log("Mandou bem!");
} else {
  console.log("Bora treinar mais!");
}
