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
