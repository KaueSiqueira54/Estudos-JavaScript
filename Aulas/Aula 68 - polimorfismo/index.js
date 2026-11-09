// Polimorfismo - Um mesmo método ter ações diferentes

class Carro {
  constructor(tipo, estagioTurbo) {
    this.turbo = new Turbo(estagioTurbo);
    if (tipo == 1) {
      this.velMax = 120;
      this.nome = "Normal";
    } else if (tipo == 2) {
      this.velMax = 160;
      this.nome = "Esportivo";
    } else if (tipo == 3) {
      this.velMax = 200;
      this.nome = "Super Esportivo";
    }

    this.velMax += this.turbo.potencia;
  }

  info() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Velocidade Máxima: ${this.velMax}`);
    console.log(`Turbo: ${this.turbo.potencia}`);
    console.log("-------------------------");
  }
}

class Turbo {
  constructor(estagio) {
    if (estagio == 0) {
      this.potencia = 0;
    } else if (estagio == 1) {
      this.potencia = 50;
    } else if (estagio == 2) {
      this.potencia = 75;
    } else if (estagio == 3) {
      this.potencia = 100;
    }
  }
}

class CarroEspecial extends Carro {
  constructor(estagioTurbo) {
    super(4, estagioTurbo);
    this.nome = "Carro Especial";
    this.velMax = 300 + this.turbo.potencia;
  }
  info() {
    super.info();
  }
}

const c1 = new Carro(1, 0);
const c2 = new Carro(1, 1);
const c3 = new CarroEspecial(1);

c1.info();
c2.info();
c3.info();
