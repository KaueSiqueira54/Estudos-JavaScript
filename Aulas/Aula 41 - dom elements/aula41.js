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

//Criando elementos com o DOM

cursos.map((elemento, index) => {
  const novoElemento = document.createElement("div"); //Criar
  novoElemento.setAttribute("id", "c" + `${(index += 1)}`); //Adicionar ID
  novoElemento.setAttribute("class", "curso c1"); //Adicionar classe
  novoElemento.innerHTML = `${elemento}`; //Adicionar texto
  //Lixeira
  const btn_lixeira = document.createElement("img");
  novoElemento.appendChild(btn_lixeira);

  btn_lixeira.setAttribute("src", "lixeira.png");
  btn_lixeira.setAttribute("class", "btn_lixeira");
  btn_lixeira.addEventListener("click", (evt) => {
    console.log(evt.target.parentNode);
    //Remover um filho
    caixa1.removeChild(evt.target.parentNode);
  });
  caixa1.appendChild(novoElemento);
});
