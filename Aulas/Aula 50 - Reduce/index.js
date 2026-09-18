const p_array = document.querySelector("#array");
const btnReduzir = document.querySelector("#btnReduzir");
const resultado = document.querySelector("#resultado");

const elementos_array = [1, 2, 3, 4, 5];
let antes = [];
let atual = [];
let dobro = [];

p_array.innerHTML = "[" + elementos_array + "]";

btnReduzir.addEventListener("click", (evento) => {
  dobro.push(elementos_array[0] * 2);
  resultado.innerHTML = elementos_array.reduce(
    (anterir, elemento, indice, array) => {
      antes.push(anterir);
      atual.push(elemento);
      dobro.push(elemento * 2);
      return elemento + anterir;
    },
  );
  resultado.innerHTML +=
    "<br/>valor Anterior: " +
    antes +
    "<br/> Valor atual:" +
    atual +
    "<br/> Dobro: " +
    dobro;
});

// Reduce - Fazer uma redução do array de acordo com o código que eu especificar
// Tem um novo parâmetro -
