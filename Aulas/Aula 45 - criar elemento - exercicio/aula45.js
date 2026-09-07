const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML", "CSS", "JavaScript", "Java", "PHP"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById("btnRemoverCurso");
const btnAdicionarNovoCursoAntes = document.getElementById(
  "btnAdicionarNovoCursoAntes",
);
const btnAdicionarNovoCursoDepois = document.getElementById(
  "btnAdicionarNovoDepois",
);
const nomeCurso = document.getElementById("nomeCurso");

let indice = 0;

//Função para criar
const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = curso;

  const comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");

  const rb = document.createElement("input");
  rb.setAttribute("type", "radio");
  rb.setAttribute("name", "rb_curso");

  comandos.appendChild(rb);

  novoElemento.appendChild(comandos);

  return novoElemento;
};

cursos.map((elemento, indice) => {
  const novoElemento = criarNovoCurso(elemento);
  caixaCursos.appendChild(novoElemento);
  indice++;
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

//Adicionando Antes

btnAdicionarNovoCursoAntes.addEventListener("click", (evento) => {
  const rsSeleciodo = radioSelecionado();
  try {
    if (nomeCurso.value != "") {
      const cursoSelecionado = rsSeleciodo.parentNode.parentNode;
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado);
    } else {
      alert("Digite o nome do curso");
    }
  } catch (exception) {
    alert("Selecione um curso");
  }
});

//Adicionando depois

btnAdicionarNovoCursoDepois.addEventListener("click", (evento) => {
  const rsSeleciodo = radioSelecionado();
  try {
    if (nomeCurso.value != "") {
      const cursoSelecionado = rsSeleciodo.parentNode.parentNode;
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling);
    } else {
      alert("Digite o nome do curso");
    }
  } catch (exception) {
    alert("Selecione um curso");
  }
});
