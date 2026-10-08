class Carro {
  constructor(nome, tipo) {
    this.nome = nome;
    if (tipo == 1) {
      this.tipo = "Esportivo";
      this.velocidadeMax = 300;
    } else if (tipo == 2) {
      this.tipo = "Utilitátio";
      this.velocidadeMax = 180;
    } else if (tipo == 3) {
      this.tipo = "Passeio";
      this.velocidadeMax = 160;
    } else {
      this.tipo = "Comum";
      this.velocidadeMax = 120;
    }
  }

  getNome() {
    return this.nome;
  }

  getTipo() {
    return this.tipo;
  }

  getVelocidadeMax() {
    return this.velocidadeMax;
  }

  getInfo() {
    return [this.nome, this.tipo, this.velocidadeMax];
  }

  info() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Velocidade: ${this.velocidadeMax}`);
    console.log("------------------");
  }
}

let c1 = new Carro("Rapido", 1);
let c2 = new Carro("Super Luxo", 2);
let c3 = new Carro("Passear", 2);
let c4 = new Carro("Faz tudo", 3);

c1.info();
console.log(c1.getInfo());
c2.info();
c3.info();
c4.info();
