const perguntas = [
    {
      pergunta: "Qual é a capital do Brasil?",
      resposta: "brasilia"
    },
    {
      pergunta: "Quanto é 2 + 2?",
      resposta: "4"
    },
    {
      pergunta: "Qual linguagem estamos usando?",
      resposta: "javascript"
    }
  ];
  
  let pontos = 0;
  
  for (let i = 0; i < perguntas.length; i++) {
  
    let respostaUsuario = prompt(perguntas[i].pergunta);
  
    respostaUsuario = respostaUsuario.toLowerCase();
  
     
    if (respostaUsuario === perguntas[i].resposta) {
      alert("Acertou!");
      pontos++;
    } else {
      alert("Errou! A resposta era: " + perguntas[i].resposta);
    }
  }
  
  alert("Você fez " + pontos + " pontos de " + perguntas.length);