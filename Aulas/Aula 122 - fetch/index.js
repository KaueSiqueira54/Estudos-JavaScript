const p_temp = document.querySelector("#p_temp");
const p_nivel = document.querySelector("#p_nivel");
const p_pressao = document.querySelector("#p_pressao");
const btn_texto = document.querySelector("#btn_texto");

const obterDados = () => {
  fetch(endpoint)
    .then((res) => res.json())
    .then((dados) => {
      console.log(dados);

      p_temp.innerHTML = `Temperatura: ${dados.temperatura}`;
      p_nivel.innerHTML = `Nivel: ${dados.nivel}`;
      p_pressao.innerHTML = `Pressão: ${dados.pressao}`;
    });
};

// const endpoint = "https://viacep.com.br/ws/05061200/json/";
const endpoint = "http://localhost:3000";

// Then recebe o retorno do fetch - resposta
// .text() - trasnforma a resposta da requisição em texto
//  .JSON() - transforma a resposta em json

// fetch - consumo de uma API - um endpoint
btn_texto.addEventListener("click", () => {
  obterDados();
});

// Retorna a função de tempo em tempo
// let intervalo = setInterval(obterDados, 3000);
