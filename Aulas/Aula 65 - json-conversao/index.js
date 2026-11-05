const pessoa = {
  nome: "Kaue",
  idade: 22,
  curso: "JavaScript",
  instituicao: "Proa",
  aulas: {
    aula01: "HTML",
    aula02: "CSS",
    aula03: "JS",
  },
};

// Dois métodos
// stringFy - converte um objeto literal em uma string JSON
const stringPessoa = `{"nome":"Kaue","idade":22,"curso":"JavaScript","instituicao":"Proa","aulas":{"aula01":"HTML","aula02":"CSS","aula03":"JS"}}`;

const stringJson = JSON.stringify(pessoa);

// JSON.parse - JSON para objeto
const objetoJson = JSON.parse(stringPessoa);

console.log(pessoa);
console.log(stringJson);
console.log(objetoJson);
