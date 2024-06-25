function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let elementosVistos = new Set();

  for (let num of numeros) {
    if (elementosVistos.has(num)) {
      return num; 
    } else {
      elementosVistos.add(num);
    }
  }
}

module.exports = encontrarElementoRepetido;