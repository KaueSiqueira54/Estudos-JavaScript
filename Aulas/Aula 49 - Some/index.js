const p_array = document.querySelector("#array");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [16, 17, 12, 10, 18];
p_array.innerHTML = "[" + elementos_array + "]";

btnVerificar.addEventListener("click", (evento) => {
  const retorno = elementos_array.some((elemento, indice, array) => {
    if (elemento < 18) {
      resultado.innerHTML = `Idade menor na posição ${indice}`;
    }
    return elemento >= 18;
  });
  if (retorno) {
    resultado.innerHTML = "Pelo menos uma idade maior que 18";
  }
  console.log(retorno);
});

// Every - todos os elementos precisam ser iguais para dar true
// Some - retorna true quando pelo menos um dos elementos for equivalente
