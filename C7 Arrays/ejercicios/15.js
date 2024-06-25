function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let maximo = array[0];
  let indiceMaximo = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximo) {
      maximo = array[i];
      indiceMaximo = i;
    }
  }

  return indiceMaximo;
}

module.exports = encontrarIndiceMayor;
