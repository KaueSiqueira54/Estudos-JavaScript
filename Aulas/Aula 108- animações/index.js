const carro = document.querySelector("#carro");
const btnEsquerda = document.querySelector("#btn_esquerda");
const btn_parar = document.querySelector("#btn_parar");
const btnDireita = document.querySelector("#btn_direita");

const init = () => {
  carro.style.position = "relative";
  carro.style.left = "0px";
};

// window.onload = init();

//

let anima = null;

const mover = (direcao) => {
  carro.style.left = parseInt(carro.style.left) + 10 * direcao + "px";
};

//

btn_parar.addEventListener("click", (evento) => {
  clearInterval(anima);
});

btnEsquerda.addEventListener("click", (evento) => {
  clearInterval(anima);
  anima = setInterval(mover, 20, -1);
});

btnDireita.addEventListener("click", (evento) => {
  clearInterval(anima);
  anima = setInterval(mover, 20, 1);
});

window.addEventListener("load", init());
