//Função MAP - percorrer arrays

// const cursos = ["HTML", "CSS", "Java", "JavaScript", "React"];

// let c = cursos.map((elemento, indice) => {
//   return elemento;
// });

// console.log(c);

// let elemento = document.getElementsByTagName("div");
// elemento = [...elemento];
// console.log(elemento);
// elemento.map((el, i) => {
//   el.innerHTML = "Curso de JS";
//   console.log(el.innerHTML);
// });

// console.log(elemento);

// let elemento = document.getElementsByTagName("div");
// const val = Array.prototype.map.call(elemento, ({ innerHTML }) => innerHTML);

// console.log(val);

//

const converterInt = (e) => parseInt(e);
const dobrarInt = (e) => e * 2;

let num = ["1", "2", "3", "4", "5"].map(converterInt).map(dobrarInt);

console.log(num);
