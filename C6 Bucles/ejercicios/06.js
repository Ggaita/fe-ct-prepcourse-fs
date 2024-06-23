function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  let num3 = num.toString();
  return num3.length === 3 ? true : false;
}

module.exports = tieneTresDigitos;
