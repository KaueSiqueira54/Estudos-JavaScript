const tipoMilitar = document.querySelector("#f_tipoMilitar");
const tipoNormal = document.querySelector("#f_tipoNormal");
const blindagem = document.querySelector("#f_blindagem");
const municao = document.querySelector("#f_municao");
const nomeCarro = document.querySelector("#f_nome");
const portasCarro = document.querySelector("#f_portas");
const carros = document.querySelector("#carros");
const btnAddCarro = document.querySelector("#btn_addCarro");

let arrayCarros = [];

const removerCarro = (carroRemover) => {
  arrayCarros = arrayCarros.filter((elemento) => {
    return elemento.nome != carroRemover;
  });
};

tipoMilitar.addEventListener("click", (evento) => {
  blindagem.removeAttribute("disabled");
  municao.removeAttribute("disabled");
  blindagem.value = 0;
  municao.value = 0;
  portasCarro.value = 0;
  nomeCarro.value = "";
});

tipoNormal.addEventListener("click", (evento) => {
  blindagem.setAttribute("disabled", "disabled");
  municao.setAttribute("disabled", "disabled");
  blindagem.value = 0;
  municao.value = 0;
  portasCarro.value = 0;
  nomeCarro.value = "";
});

const gerenciarExibicaoCarros = () => {
  carros.innerHTML = "";
  arrayCarros.forEach((c) => {
    const div = document.createElement("div");
    const btn = document.createElement("button");
    btn.innerHTML = "Remover";
    btn.addEventListener("click", (evt) => {
      const remover = evt.target.parentNode.dataset.nome;
      removerCarro(remover);
      gerenciarExibicaoCarros();
    });

    div.setAttribute("class", "carro");
    div.setAttribute("data-nome", c.nome);

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    p1.innerHTML = `Nome: ${c.nome}`;
    p2.innerHTML = `Portas: ${c.portas}`;
    p3.innerHTML = `Blindagem ${c.blindagem}`;
    p4.innerHTML = `Munição: ${c.municao}`;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);

    div.appendChild(btn);
    carros.appendChild(div);
  });
};

btnAddCarro.addEventListener("click", (evento) => {
  if (tipoNormal.checked) {
    const carro = new Carro(nomeCarro.value, portasCarro.value);
    arrayCarros.push(carro);
  } else {
    const carro = new Militar(
      nomeCarro.value,
      portasCarro.value,
      blindagem.value,
      municao.value,
    );
    arrayCarros.push(carro);
  }

  gerenciarExibicaoCarros();
});

// Herança - uma classe herda outra classe

class Carro {
  //Classe pai
  constructor(nome, portas) {
    this.nome = nome;
    this.portas = portas;
    this.ligado = false;
    this.velocidade = 0;
    this.cor = undefined;
  }

  ligar = function () {
    this.ligado = true;
  };

  desligar = function () {
    this.ligado = false;
  };

  setCor = function (cor) {
    this.cor = cor;
  };
}

class Militar extends Carro {
  constructor(nome, portas, blindagem, municao) {
    super(nome, portas);
    this.blindagem = blindagem;
    this.municao = municao;
    this.setCor("Verde");
  }

  atirar = function () {
    if (this.municao > 0) {
      this.municao--;
      console.log("POU POU");
    }
  };
}

const c1 = new Carro("normal", 4);

const c2 = new Militar("Canhão", 1, 100, 50);

c1.ligar();
c1.setCor("Amarelo");
c2.atirar();
c2.atirar();
c2.atirar();

console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Ligado: ${c1.ligado}`);
console.log(`Velocidade: ${c1.velocidade}`);
console.log(`Cor: ${c1.cor}`);
console.log("--------------------------");

console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Ligado: ${c2.ligado}`);
console.log(`Velocidade: ${c2.velocidade}`);
console.log(`Munição: ${c2.municao}`);
console.log(`Blindagem: ${c2.blindagem}`);
console.log("--------------------------");
