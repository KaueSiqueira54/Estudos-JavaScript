//Retorna os elementos HTML que usam a classe
const divTodas = [...document.getElementsByTagName("div")];
const cursosTodos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];
const cursoEspecial = document.getElementById("c1");

const queryDivTodasClassP = document.querySelectorAll("div > p");
const queryDivTodasClass = document.querySelectorAll("div[class]");
const queryDivTodas = document.querySelector("div"); //Retorna o primeiro elemento que encontrar
const queryDivTodas2 = [...document.querySelectorAll("div,p")]; //Retorna Todos os elementos - nodeCollection
const queryCursoTodos = [...document.querySelectorAll(".curso")];
const queryCursoTodosC1 = [...document.querySelectorAll(".c1")];
const queryCursoTodosC2 = [...document.querySelectorAll(".c2")];

//Especificando
const queryCursoEspecial = document.querySelectorAll("#c1")[0];
console.log(queryDivTodasClassP);
console.log(queryDivTodasClass);
console.log(queryDivTodas);
console.log(queryDivTodas2);
console.log(queryCursoTodos);
console.log(queryCursoTodosC1);
console.log(queryCursoTodosC2);
console.log(queryCursoEspecial);

// console.log(divTodas);
// console.log(cursosTodos);
// console.log(cursosC1);
// console.log(cursosC2);
// console.log(cursoEspecial);

// cursosC2.map((e) => {
//   e.classList.add("destaque");
// });
