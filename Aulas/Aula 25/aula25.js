//Funções lambda
//Mecanismos para representar funções anônimas

const soma = (v1, v2) => {
  let res = v1 + v2;
  return res;
};

const nome = (n) => {
  return n;
};

const add = (n) => n + 10;

console.log(soma(10, 60));
console.log(nome("Kaue"));
console.log(add(50));
