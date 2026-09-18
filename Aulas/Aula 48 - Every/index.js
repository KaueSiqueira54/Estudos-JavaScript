const p_array = document.querySelector("#array");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [20, 932];
p_array.innerHTML = "[" + elementos_array + "]";

btnVerificar.addEventListener("click", (evento) => {
  const retorno = elementos_array.every((elemento, indice, array) => {
    if (elemento < 18) {
      resultado.innerHTML = `Idade menor na posição ${indice}`;
    }
    return elemento >= 18;
  });
  if (retorno) {
    resultado.innerHTML = "Todas as idades são maiores que 18";
  }
  console.log(retorno);
});

// Every procura por equivalência (regra) que eu especificar
// Retorna true or false
