const cursos = [...document.querySelectorAll(".curso")];

cursos.map((el) => {
  el.addEventListener("click", (evt) => {
    const element = evt.target;
    element.classList.add("destaque");
    console.log(el.innerHTML + " Foi clicado");
  });
});
