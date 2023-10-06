import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//console.log("consola");

const resetButton = document.getElementById('reset-button');
const userText = document.querySelector('textarea');
const contadorPalabras = document.querySelector('[data-testid="word-count"]'); 
const contadorCaract = document.querySelector('[data-testid="character-count"]');
const contadorCaract2 = document.querySelector('[data-testid="character-no-spaces-count"]');
const contadorNumeros = document.querySelector('[data-testid="number-count"]');
const sumaN = document.querySelector('[data-testid="number-sum"]');
const longitudPalabras = document.querySelector('[data-testid="word-length-average"]');

resetButton.addEventListener ("click" , function () {
  userText.value = " "; 
});
//Boton limpiar

userText.addEventListener("input", function () { 
  const text = userText.value;
  // para que se actualicen los recuentos al ingresar carctes en textarea

  const palabras = analyzer.getWordCount(text);
  //para llamar al objeto analizer y su funcion
  contadorPalabras.textContent = `Recuento de palabras: ${palabras}`;
  //inserta el numero en tiempo real del recuento
  //console.log(text);
  const caracteres = analyzer.getCharacterCount(text);
  contadorCaract.textContent = `Recuento de carácteres: ${caracteres}`;

  const caracteres2 = analyzer.getCharacterCountExcludingSpaces(text);
  contadorCaract2.textContent = `Recuento de carácteres excluyendo espacios y signos de puntuació: ${caracteres2}`;

  const numeros2 = analyzer.getNumberCount(text);
  contadorNumeros.textContent = `Recuento de números: ${numeros2}`;

  const suma = analyzer.getNumberSum(text);
  sumaN.textContent = `Suma total de números: ${suma}`;

  const longitudP = analyzer.getAverageWordLength(text);
  longitudPalabras.textContent = `Longitud media de las palabras: ${longitudP}`;

});

