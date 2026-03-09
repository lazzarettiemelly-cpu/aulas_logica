// let numeros = [];

// for (let i = 1; i <= 20; i++) {
//     numeros.push(i);
// }

// console.log(numeros);

//--------------------------------------------------------------------------------------

// function mostrarPares(n) {
//     let pares = [];

//     for (let i = 0; i <= n; i++) {
//         if (i % 2 === 0) {
//             pares.push(i);
//         }
//     }

//     console.log("Números pares de 0 até " + n + ": " + pares.join(", "));
// }

// mostrarPares(1000);

//---------------------------------------------------------------------------------------------

const prompt = require("prompt-sync")();

// Definição das credenciais corretas
const usuarioCorreto = "emellyn";
const senhaCorreta = "55551222";

// Variáveis de controle do laço
let autenticado = false;
let tentativas = 0;
const maxTentativas = 3;

console.log("--- Sistema de Login Simulado ---");

// Laço de repetição (while) para simular a tentativa de login
while (!autenticado && tentativas < maxTentativas) {
  tentativas++;
  
  console.log(`\nTentativa ${tentativas} de ${maxTentativas}`);
  
  // prompt-sync recebe o input do usuário
  let usuarioInput = prompt("Usuário: ");
  let senhaInput = prompt("Senha: ");

  // Validação
  if (usuarioInput === usuarioCorreto && senhaInput === senhaCorreta) {
    autenticado = true;
    console.log("\n[SUCESSO] Login realizado com sucesso!");
  } else {
    console.log("\n[ERRO] Usuário ou senha incorretos.");
  }

  // Verifica se acabou as tentativas
  if (!autenticado && tentativas === maxTentativas) {
    console.log("\n[BLOQUEADO] Número máximo de tentativas atingido.");
  }
}

if (autenticado) {
  console.log("Bem-vindo, sistema liberado.");
} else {
  console.log("Programa encerrado.");
}
