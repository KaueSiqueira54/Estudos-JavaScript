let n = 0;
let pares = 0;

for (i = 0; i < 1000; i++) {
  console.log(`Kaue ${i}`);

  if (i % 2 != 0) {
    continue; // Não executa e passa para a próxima
  }
  pares++;
}

console.log(pares);
console.log("FIM");
