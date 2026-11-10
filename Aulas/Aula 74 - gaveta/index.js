const teclasNum = [...document.querySelectorAll(".num")];

const teclasRes = document.querySelector(".res");
const teclasOp = [...document.querySelectorAll(".op")];

const display = document.querySelector(".display");

const tcpy = document.getElementById("tcpy");
const tlimpar = document.getElementById("tlimpar");

const tigual = document.getElementById("tigual");

const calc_aba = document.getElementById("calc_aba");
const calc = document.getElementById("calc");
const img_aba_calc = document.getElementById("img_aba_calc");

let sinal = false;
let decimal = false;

console.log(teclasNum);
console.log(teclasOp);
console.log(teclasRes);

teclasNum.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    sinal = false;

    if (evento.target.innerHTML == ",") {
      if (!decimal) {
        decimal = true;
        if (display.innerHTML == "0") {
          display.innerHTML = "0,";
        } else {
          display.innerHTML += evento.target.innerHTML;
        }
      }
    } else {
      if (display.innerHTML == "0") {
        display.innerHTML = "";
      }
      display.innerHTML += evento.target.innerHTML;
    }
  });
});

teclasOp.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    if (!sinal) {
      sinal = true;
      if (display.innerHTML == "0") {
        sinal = true;
        display.innerHTML = "";
      }
      if (evento.target.innerHTML == "x") {
        display.innerHTML += "*";
      } else {
        display.innerHTML += evento.target.innerHTML;
      }
    }
  });
});

tlimpar.addEventListener("click", (evento) => {
  decimal = false;
  sinal = false;
  display.innerHTML = 0;
});

tigual.addEventListener("click", (evento) => {
  sinal = false;
  decimal = false;

  const res = eval(display.innerHTML);

  display.innerHTML = res;
});

// Copy

// input

// const teste = document.getElementById("teste");

tcpy.addEventListener("click", (evento) => {
  navigator.clipboard.writeText(display.innerHTML);

  // fazer a seleção para mobile
  // teste.select();
  // teste.setSelectionRange(0, 9999);
  // navigator.clipboard.writeText(teste.value);
});

calc_aba.addEventListener("click", (evento) => {
  calc.classList.toggle("calc_exibir");

  if (calc.classList.contains("calc_exibir")) {
    img_aba_calc.setAttribute("src", "esquerda.svg");
  } else {
    img_aba_calc.setAttribute("src", "direita.svg");
  }
});
