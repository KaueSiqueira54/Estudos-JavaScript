// Objetos literais - um só objeto

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
  const Pessoa = {
    nome: "",
    idade: "",
    getNome: function () {
      return this.nome;
    },
    getIdade: function () {
      return this.idade;
    },
    setNome: function (nome) {
      this.nome = nome;
    },
    setIdade: function (idade) {
      this.idade = idade;
    },
  };
  const nomePessoa = document.querySelector("#f_name");
  const idadePessoa = document.querySelector("#f_idade");
  Pessoa.nome = nomePessoa.value;
  Pessoa.idade = idadePessoa.value;

  pessoas.push(Pessoa);
  nomePessoa.value = "";
  idadePessoa.value = "";
  nomePessoa.focus();
  adicionarPessoa();
  console.log(pessoas);
});
