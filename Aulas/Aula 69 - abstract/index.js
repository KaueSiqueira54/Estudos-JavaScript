// Abstract - Não pode ser instanciada, apenas extendida
class CarroPadrao {
  constructor() {
    // Classes abstratas
    if (this.constructor === CarroPadrao) {
      throw new TypeError("Esta classe não pode ser instanciada");
    }
    if (this.ligar === undefined) {
      throw new TypeError("É obrigatório implementar o método ligar()");
    }
    if (this.desligar === undefined) {
      throw new TypeError("É obrigatório implementar o método desligar()");
    }
    this.rodas = 4;
    this.portas = 4;
    this.ligado = false;
  }
}

class Carro extends CarroPadrao {
  constructor(tipo, estagioTurbo) {
    super();
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
    console.log(`Portas: ${this.portas}`);
    console.log(`Rodas: ${this.rodas}`);
    console.log(`Ligado: ${this.ligado}`);
    console.log("-------------------------");
  }

  ligar() {
    this.ligado = true;
  }
  desligar() {
    this.ligado = false;
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
// const c4 = new CarroPadrao();

c1.info();
c2.info();
c3.info();
