function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
    if (numero === 1) {
      return true;
    }
    let potencia = 1;
  

    while (potencia <= numero) {
      if (potencia === numero) {
        return true;
      }
      potencia *= 2;
    }
    return false;
}

module.exports = esPotenciaDeDos;
