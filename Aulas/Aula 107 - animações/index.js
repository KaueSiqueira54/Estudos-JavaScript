const carro = document.querySelector("#carro");
const btnEsquerda = document.querySelector("#btn_esquerda");
const btnDireita = document.querySelector("#btn_direita");

const init = () => {
  carro.style.position = "relative";
  carro.style.left = "0px";
};

// window.onload = init();

btnEsquerda.addEventListener("click", (evento) => {
  carro.style.left = parseInt(carro.style.left) - 10 + "px";
});

btnDireita.addEventListener("click", (evento) => {
  let pos = parseInt(carro.style.left);
  pos += 10;
  carro.style.left = `${pos}px`;
});

window.addEventListener("load", init());
