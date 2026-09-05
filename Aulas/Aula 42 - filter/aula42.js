//Filter
//Percorre um array e permite uma filtragem e retorno de determinados elementos - % 2

// const filtroMaior18 = (valor, indice, array) => {

const idades = [10, 60, 30, 20, 15, 21, 30, 48];
const maior = idades.filter((valor) => {
  if (valor > 18) {
    return valor;
  }
});

const menor = idades.filter((valor) => {
  if (valor < 18) {
    return valor;
  }
});

console.log(idades);
console.log(maior);
console.log(menor);
