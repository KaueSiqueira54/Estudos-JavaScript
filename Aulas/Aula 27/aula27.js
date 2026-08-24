//funções geradoras - retorno adiado
//Vou retornando coisas ao longo da execução
//yield

// * - geradora
function* cores() {
  yield "Vermelho";
  yield "Verde";
  yield "Amarelo";
}

let itc = cores();

// console.log(itc.next().value);
// console.log(itc.next().value);
// console.log(itc.next().value);
// console.log(itc.next().value);

function* contador() {
  let i = 0;
  while (true) {
    yield i++;
    if (i > 10) {
      break;
    }
  }
}

const itera = contador();

// for (let i = 0; i < 10; i++) {
//   console.log(itera.next().value);
// }

for (let c of itera) {
  console.log(c);
}

function* perguntas() {
  const nome = yield "Qual é o seu nome?";
  const esporte = yield "Qual é o seu esporte favorito?";
  return "Seu nome é " + nome + ", e seu esporte favorito é " + esporte;
}

const iter = perguntas();
console.log(iter.next().value);
console.log(iter.next("Kaue").value);
console.log(iter.next("Futebol").value);
