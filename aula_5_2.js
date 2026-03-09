const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let saldo = 0;
  
  function menu() {
    console.log("\n1- Depositar | 2- Sacar | 3- Saldo | 4- Sair");
  
    rl.question("Escolha: ", op => {
      if (op == 1) depositar();
      else if (op == 2) sacar();
      else if (op == 3) verSaldo();
      else rl.close();
    });
  }
  
  function depositar() {
    rl.question("Valor: ", v => {
      saldo += Number(v);
      console.log("Depositado!");
      menu();
    });
  }
  
  function sacar() {
    rl.question("Valor: ", v => {
      if (v <= saldo) saldo -= Number(v);
      else console.log("Saldo insuficiente!");
      menu();
    });
  }
  
  function verSaldo() {
    console.log("Saldo:", saldo);
    menu();
  }
  
  menu();