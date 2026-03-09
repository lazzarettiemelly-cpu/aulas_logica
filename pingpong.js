const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// objeto do jogo
const jogo = {
  jogador1: {
    nome: "Jogador 1",
    corTime: "Vermelho",
    pontos: 0
  },
  jogador2: {
    nome: "Jogador 2",
    corTime: "Azul",
    pontos: 0
  }
};

// mostrar placar
function mostrarPlacar() {
  console.log("\n--- PLACAR ---");
  console.log(jogo.jogador1.nome + " (" + jogo.jogador1.corTime + "): " + jogo.jogador1.pontos);
  console.log(jogo.jogador2.nome + " (" + jogo.jogador2.corTime + "): " + jogo.jogador2.pontos);
}

// menu
function menu() {
  mostrarPlacar();

  console.log("\n1 - Ponto para Jogador 1");
  console.log("2 - Ponto para Jogador 2");
  console.log("3 - Encerrar jogo");

  rl.question("Escolha uma opção: ", (opcao) => {
    if (opcao === "1") {
      jogo.jogador1.pontos++;
      menu();
    }
    else if (opcao === "2") {
      jogo.jogador2.pontos++;
      menu();
    }
    else if (opcao === "3") {
      console.log("\nJogo encerrado!");
      mostrarPlacar();
      rl.close();
    }
    else {
      console.log("Opção inválida.");
      menu();
    }
  });
}

// iniciar sistema
menu();