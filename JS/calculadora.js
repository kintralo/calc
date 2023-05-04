
var resultado = document.getElementById('resultado');
var operacion = '';

function introducirNumero(numero) {
  operacion += numero;
  resultado.value = operacion;
}

function operador(operador) {
  operacion += operador;
  resultado.value = operacion;
}

function limpiar() {
  operacion = '';
  resultado.value = '';
}

function calcular() {
  resultado.value = eval(operacion);
}
