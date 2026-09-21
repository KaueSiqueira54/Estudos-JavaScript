const btnSomar = document.querySelector("#soma");
const btnMultiplicar = document.querySelector("#multi");
const btnSubtrair = document.querySelector("#subt");
const btnDividir = document.querySelector("#dividir");
const resultado = document.querySelector("#resultado");

let op = [
  () => {
    const valores = [
      document.querySelector("#num1").value,
      document.querySelector("#num2").value,
    ];
    resultado.value = Number(valores[0]) + Number(valores[1]);
  },
  () => {
    const valores = [
      document.querySelector("#num1").value,
      document.querySelector("#num2").value,
    ];
    resultado.value = Number(valores[0]) - Number(valores[1]);
  },
  () => {
    const valores = [
      document.querySelector("#num1").value,
      document.querySelector("#num2").value,
    ];
    resultado.value = Number(valores[0]) * Number(valores[1]);
  },
  () => {
    const valores = [
      document.querySelector("#num1").value,
      document.querySelector("#num2").value,
    ];
    resultado.value = Number(valores[0]) / Number(valores[1]);
  },
];

btnSomar.addEventListener("click", () => {
  op[0]();
});

btnSubtrair.addEventListener("click", () => {
  op[1]();
});

btnMultiplicar.addEventListener("click", () => {
  op[2]();
});

btnDividir.addEventListener("click", () => {
  op[3]();
});
