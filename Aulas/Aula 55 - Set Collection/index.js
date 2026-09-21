// Set - Não permite entrada de dados iguais, dados duplicados

const caixa = document.querySelector("#caixa");

let musicas = new Set(["musica 1", "musica boa", "musica 2"]);

musicas.add("musica legal");
musicas.add("musica 1");
musicas.add("musica boa");

musicas.forEach((el) => {
  caixa.innerHTML += el + "<br/>";
});

console.log(musicas);
