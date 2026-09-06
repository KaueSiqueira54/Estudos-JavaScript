const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML", "CSS", "JavaScript", "Java", "PHP"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById("btnRemoverCurso");

cursos.map((elemento, indice) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = elemento;

  const comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");

  const rb = document.createElement("input");
  rb.setAttribute("type", "radio");
  rb.setAttribute("name", "rb_curso");

  comandos.appendChild(rb);

  novoElemento.appendChild(comandos);

  caixaCursos.appendChild(novoElemento);
});

//função
const radioSelecionado = () => {
  const todosRadios = [...document.querySelectorAll("input[type=radio]")];
  let radioSeleciodo = todosRadios.filter((elemento, indice, array) => {
    return elemento.checked;
  });
  return radioSeleciodo[0];
};

//BTN Curso Selecionado
btnCursoSelecionado.addEventListener("click", (evento) => {
  const rsSeleciodo = radioSelecionado();
  try {
    const cursoSelecionado = rsSeleciodo.parentNode.previousSibling.textContent;
    alert("Curso selecionado: " + cursoSelecionado);
  } catch (exception) {
    alert("Selecione um curso");
  }
});

btnRemoverCurso.addEventListener("click", (evento) => {
  const rsSeleciodo = radioSelecionado();
  if (rsSeleciodo != undefined) {
    const cursoSelecionado = rsSeleciodo.parentNode.parentNode;
    cursoSelecionado.remove();
    alert("Curso removido: " + cursoSelecionado.textContent);
  } else {
    alert("Curso não selecionado ");
  }
});
