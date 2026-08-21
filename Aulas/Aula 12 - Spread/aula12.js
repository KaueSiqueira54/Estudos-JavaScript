// Spread - espalhar
// Simplifica operações com arrays e Collections

//Copia de objetos

const jogador1 = { nome: "Kaue", energia: 100, vidas: 3, magia: 100 };
const jogador2 = { nome: "Siqueira", energia: 100, vidas: 5, gas: 100 };
const jogador3 = { ...jogador1, ...jogador2 };

console.log(jogador3);

// Copiar array = let n3 = [...n1]

let n1 = [10, 20, 30, 40];
let n2 = [11, 24, 35, 42, 98, 23];
let n3 = [...n1, ...n2];

// console.log("n1 " + n1)
// console.log("n2 " + n2)
console.log("n3 " + n3);
console.log("Tipo de n3 " + typeof n3);

//Funcoes

const objs1 = document.getElementsByTagName("div"); // Coleção de elementos div - HTML Collection
const objs2 = [...document.getElementsByTagName("div")]; // Coleção de elementos div - HTML Collection

objs2.forEach((element) => {
  element.innerHTML = "Curso do Siqueira";
});

console.log(objs1);
console.log(objs2);

const soma = (v1, v2, v3) => {
  return v1 + v2 + v3;
};

let valores = [10, 30, 60];

console.log(soma(...valores));
