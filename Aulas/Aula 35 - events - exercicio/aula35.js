const caixa1 = document.querySelector(".container");
const caixa2 = document.querySelector("#div2");
const btn = document.querySelector("#botao");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((el) => {
  el.addEventListener("click", (evt) => {
    const curso = evt.target;
    curso.classList.toggle("destaque"); //Elemento tem? Se sim, remove, se não, adiciona
  });
});

btn.addEventListener("click", (evt) => {
  const cursosSelecioados = [...document.querySelectorAll(".destaque")];
  cursosSelecioados.map((el) => {
    caixa2.appendChild(el); //Anexar um filho ao elemento caixa2
  });
});
