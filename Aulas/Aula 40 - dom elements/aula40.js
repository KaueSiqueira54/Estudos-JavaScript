const caixa1 = document.querySelector("#caixa1");
const btn_c1 = [...document.querySelectorAll(".curso")];
const cursos = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Mysql",
  "React",
  "Python",
  "Java",
];

//Anexar elementos e criar na página

//Criando elementos com o DOM

cursos.map((elemento, index) => {
  const novoElemento = document.createElement("div"); //Criar
  novoElemento.setAttribute("id", "c" + `${(index += 1)}`); //Adicionar ID
  novoElemento.setAttribute("class", "curso c1"); //Adicionar classe
  novoElemento.innerHTML = `${elemento}`; //Adicionar texto
  caixa1.appendChild(novoElemento);
});

// const novoElemento = document.createElement("div"); //Criar
// novoElemento.setAttribute("id", "c7"); //Adicionar ID
// novoElemento.setAttribute("class", "curso c1"); //Adicionar classe
// novoElemento.innerHTML = "React Native"; //Adicionar texto

// caixa1.appendChild(novoElemento);
