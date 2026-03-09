const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log("=== CALCULADORA ===");
  console.log("1 - Soma");
  console.log("2 - Subtração");
  console.log("3 - Multiplicação");
  console.log("4 - Divisão");
  
  rl.question("Escolha: ", op => {
    rl.question("Número 1: ", n1 => {
      rl.question("Número 2: ", n2 => {
        let a = Number(n1);
        let b = Number(n2);
        let r;
  
        if (op == 1) r = a + b;
        else if (op == 2) r = a - b;
        else if (op == 3) r = a * b;
        else if (op == 4) r = b == 0 ? "Erro: divisão por zero" : a / b;
        else r = "Opção inválida";
  
        console.log("Resultado:", r);
        rl.close();
      });
    });
  });