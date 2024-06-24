console.log("Vamos calcular a média, moda e mediana.");
const conjuntoNumeros = [1, 3, 10, 17, 1, 1, 9, 17, 17, 17, 28];
let repeticao = {};
let soma = 0;
for (i = 0; i < conjuntoNumeros.length; i++) {
  if (repeticao[conjuntoNumeros[i]]) {
    repeticao[conjuntoNumeros[i]]++;
  } else {
    repeticao[conjuntoNumeros[i]] = 1;
  }
}
let array = Object.entries(repeticao);
let moda;
let quantidadeDeAparicoes = 0;
for (i = 0; i < array.length; i++) {
  if (array[i][1] > quantidadeDeAparicoes) {
    quantidadeDeAparicoes = array[i][1];
    moda = array[i][0];
  }
}
for (var i = 0; i < conjuntoNumeros.length; i++) {
  soma += conjuntoNumeros[i];

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
console.log("A moda será: " + moda);
console.log("A mediana será: " + mediana);
