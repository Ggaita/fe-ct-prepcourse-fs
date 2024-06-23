function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;
  if (a <= b) {
    for (let i = a ; i <= b ; i++) {
    producto = producto * i;
    }
  } else {
    for (let i = b ; i <= a ; i ++) {
    producto = producto * i;
    }
    }
    return producto;
}

module.exports = productoEntreNúmeros;