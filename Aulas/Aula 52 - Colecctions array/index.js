// Arra - coleção de dados - variáveis
// Posso armazenar qualquer coisa dentro de um array
// Matrizes - array dentro de array

const caixa = document.querySelector("#caixa");

let cores = ["Azul", "Verde", "Laranja", "Vermelho", ["Claro", "Ciano"]];

let cursos = ["HTML", "CSS", "JavaScript", cores];

// Push adiciona no final do array
// cursos.push("Java");
// cursos.push("C++");
// cursos.push("Python");

// Adiciona o elemento no inicio do array - unshift
// cursos.unshift("Py");

// Remove o elemento do inicio do array
// cursos.shift();

// Remove o último elemento do array
// cursos.pop();
// cursos.pop("Java");

console.log(cursos[3][4][0]);

cursos.map((elemento) => {
  let p = document.createElement("p");
  p.innerHTML = elemento;

  caixa.appendChild(p);
});

console.log(cursos);
