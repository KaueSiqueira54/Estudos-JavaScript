// Método MAP é diferente da Coleção MAP
// Coleção do tipo chave/valor

const caixa = document.querySelector("#caixa");

let mapa = new Map();

mapa.set("curso", "JavaScript");
mapa.set(10, "Cursos");
mapa.set("Canal", 100);
mapa.set(1, 100);

console.log(mapa);

let pes = "cursows";

mapa.has(pes)
  ? (caixa.innerHTML = mapa.get(pes))
  : (caixa.innerHTML = "A chave não existe");

mapa.forEach((elemento) => {
  console.log(elemento);
});
