const numero = document.getElementById("numero");

// Retorna ok - certo
// 1 parametro - retorna o resultado da promessa se deu certo
// 2 parametro - retorna o resultado da promessa se deu errado
let promise = new Promise((resultadoPromiseOK, resultadoPromiseERRO) => {
  let resultado = false;
  let tempo = 3000;

  setTimeout(() => {
    if (resultado == true) {
      resultadoPromiseOK("Deu tudo certo");
    } else {
      resultadoPromiseERRO("Deu tudo errado");
    }
  }, tempo);
});

// Se deu certo
promise.then((retorno) => {
  numero.innerHTML = retorno;
  numero.classList.remove("erro");
  numero.classList.add("ok");
});

// Se deu errado
promise.catch((retorno) => {
  numero.innerHTML = retorno;
  numero.classList.add("erro");
  numero.classList.remove("ok");
});

numero.innerHTML = "Processando...";
