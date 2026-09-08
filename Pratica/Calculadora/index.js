function insert(x) {
  document.getElementById("resultado").innerHTML += x;
}

// Funcão limpar

function clean() {
  document.getElementById("resultado").innerHTML = "";
}

function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1,
  );
}

function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;

  try {
    if (resultado != "") {
      document.getElementById("resultado").innerHTML = eval(resultado);
    } else {
      alert("Digite um valor para calcular");
    }
  } catch (exception) {
    alert("Algo deu errado! Verifique os valores digitados. " + exception);
  }
}
