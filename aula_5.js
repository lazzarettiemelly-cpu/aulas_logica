const carro = {
    carro: "Ford Mustang",
    cor: "Marsala",
    ano: "2020-2022",
    modelo: "Shelby GT500",
    quilometragem: "16.000 km ou 30.064 km"
  };
  
  for (let dado in carro) {
    console.log(dado + ": " + carro[dado]);
  }