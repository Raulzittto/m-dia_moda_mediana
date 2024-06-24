console.log("Insira valores para calcular sua média, moda e mediana.");
const conjuntoNumeros = [1, 4, 10, 17, 1, 1];

process.stdin.on("data", function (data) {
  let soma = 0;
  for (var i = 0; i < conjuntoNumeros.length; i++) {
    soma += conjuntoNumeros[i];
    /*if (conjuntoNumeros.includes(conjuntoNumeros[i])) {
            i += 1;
            var moda = numero[i];
          }*/

    if (conjuntoNumeros.length % 2 == 0) {
      var b = 0;
      b = conjuntoNumeros.length;
      b = b / 2;
      b = conjuntoNumeros[b] + conjuntoNumeros[b - 1];

      b = b / 2;
      mediana = b;
    } else {
      b = 0;
      b = conjuntoNumeros.length;
      b = b - 1;
      b = b / 2;
      var mediana = conjuntoNumeros[b];
    }
  }

  console.log("A média será: " + soma / conjuntoNumeros.length);
  //console.log("A moda será: " + moda);
  console.log("A mediana será: " + mediana);
});
