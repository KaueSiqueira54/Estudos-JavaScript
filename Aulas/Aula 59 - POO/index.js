class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  getNome() {
    return this.nome;
  }

  getIdade() {
    return this.idade;
  }

  setNome(nome) {
    this.nome = nome;
  }

  setIdade(idade) {
    this.idade = idade;
  }

  info() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log("------------------");
  }
}

let pessoas = [];

const btnAdd = document.querySelector("#btn_add");
const resposta = document.querySelector(".res");

const adicionarPessoa = () => {
  resposta.innerHTML = "";
  pessoas.map((elemento, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "pessoa");
    div.innerHTML = `Nome: ${elemento.getNome()} <br/> Idade: ${elemento.getIdade()}`;
    resposta.appendChild(div);
  });
};

btnAdd.addEventListener("click", (evt) => {
  const nomePessoa = document.querySelector("#f_name");
  const idadePessoa = document.querySelector("#f_idade");
  let p = new Pessoa(nomePessoa.value, idadePessoa.value);

  pessoas.push(p);
  nomePessoa.value = "";
  idadePessoa.value = "";
  nomePessoa.focus();
  adicionarPessoa();
  console.log(pessoas);
});
