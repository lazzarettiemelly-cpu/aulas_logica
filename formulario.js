const readline = require("readline");

// cria sistema de perguntas
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// pergunta os dados
rl.question("Digite seu nome: ", (nome) => {
  rl.question("Digite sua idade: ", (idade) => {
    rl.question("Digite sua cidade: ", (cidade) => {

      // cria objeto com os dados
      const pessoa = {
        nome: nome,
        idade: idade,
        cidade: cidade
      };

      console.log("\nDados salvos:");
      console.log(pessoa);

      rl.close();
    });
  });
});