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

const tirarSelecao = () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  cursosSelecionados.map((elemento) => {
    elemento.classList.remove("selecionado");
  });
};

//Função para criar
const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = curso;

  novoElemento.addEventListener("click", (evento) => {
    tirarSelecao();
    evento.target.classList.toggle("selecionado");
  });

  return novoElemento;
};

cursos.map((elemento, indice) => {
  const novoElemento = criarNovoCurso(elemento);
  caixaCursos.appendChild(novoElemento);
  indice++;
});

//função
const cursoSelecionado = () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  return cursosSelecionados[0];
};

//BTN Curso Selecionado
btnCursoSelecionado.addEventListener("click", (evento) => {
  try {
    alert("Curso selecionado: " + cursoSelecionado().innerHTML);
  } catch (exception) {
    alert("Selecione um curso");
  }
});

btnRemoverCurso.addEventListener("click", (evento) => {
  const cs = cursoSelecionado();
  if (cs != undefined) {
    cs.remove();
    alert("Curso removido: " + cs.innerHTML);
  } else {
    alert("Curso não selecionado ");
  }
});

//Adicionando Antes

btnAdicionarNovoCursoAntes.addEventListener("click", (evento) => {
  try {
    if (nomeCurso.value != "") {
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado());
    } else {
      alert("Digite o nome do curso");
    }
  } catch (exception) {
    alert("Selecione um curso");
  }
});

//Adicionando depois

btnAdicionarNovoCursoDepois.addEventListener("click", (evento) => {
  try {
    if (nomeCurso.value != "") {
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling);
    } else {
      alert("Digite o nome do curso");
    }
  } catch (exception) {
    alert("Selecione um curso");
  }
});
