function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   const indiceLoco = Math.floor(Math.random() * array.length);
   return array[indiceLoco];
}

module.exports = obtenerElementoAleatorio;
