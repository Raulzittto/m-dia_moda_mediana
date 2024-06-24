console.log("Insira valores para calcular sua média, moda e mediana.");
const conjuntoNumeros = [1, 4, 10, 17, 1, 3];

process.stdin.on("data", function (data) {
  let numero = Number(data.toString().trim());



  let soma = 0;
  for (var i = 0; i < conjuntoNumeros.length; i++) {
      soma += conjuntoNumeros[i];
      
        if (conjuntoNumeros.includes(numero[i])) {
            i += 1;
            var moda = numero[i];
          }
  }

  console.log("A média será:" + soma / conjuntoNumeros.length);
console.log("A moda será" + moda)
  
});
