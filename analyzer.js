const analyzer = {
  getWordCount: (text) => {
  // Divide el texto en palabras 
    const palabras = text.trim().split(/\s+/);
    // Filtra las palabras vacías (espacios en blanco)
    const palabrass = palabras.filter(palabras => palabras.length > 0);
    // Retorna la longitud del array, que es el recuento de palabras
    return palabrass.length;
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCount: (text) => {
    return text.length;
  }, 
  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCountExcludingSpaces: (text) => {
    let count = 0;
    // caracteres que quiero excluir (espacios y signos de puntuación)
    const caracteresExcluidos = [' ', ',', '.', '!', '?', ';', ':',"/","[","^","&","*","{","}","=","$",];
    // Recorremos cada carácter en el texto
    for (let i = 0; i < text.length; i++) { 
      const caract = text[i];
      // Verificamos si el carácter actual no está en la lista de caracteres excluidos
      if (!caracteresExcluidos.includes(caract)) {
        // Si no está excluido, incrementamos el contador
        count++;
      }
    }
    // Finalmente, retornamos el recuento de caracteres válidos
    return count;
  },
  //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  
  getNumberCount: (text) => {
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
    if (numeros === null) {
      return 0;
    } else {
      return numeros.length;
    }
  },

  getNumberSum: (text) => {
    let sum = 0;
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
    if (numeros) {
      for (let i = 0; i < numeros.length; i++) {
        sum += parseFloat(numeros[i]); 
      }
    } 
  
    return sum;
  },
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  
  getAverageWordLength: (text) => {
    const palabras = text.trim().split(/\s+/); // Divide el texto en palabras
    let totalLength = 0;
  
    // Filtra palabras vacías (espacios en blanco)
    const palabrasFiltradas = palabras.filter(palabra => palabra.length > 0);
    for (let i = 0; i < palabrasFiltradas.length; i++) {
      totalLength += parseFloat(palabrasFiltradas[i].length);
    }
    // Calcula la longitud media de las palabras
    if (palabrasFiltradas.length > 0) {
      const averageLength = (totalLength / palabrasFiltradas.length).toFixed(2);
      return parseFloat(averageLength); // Convierte a número de nuevo
    } 
  },
     
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

};

export default analyzer;
