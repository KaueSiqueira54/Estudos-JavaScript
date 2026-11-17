// Session storage - as informações são perdidas ao fechar o browser
// Local storage - armazena no browser e as informações são mantidas

const f_texto = document.querySelector("#f_texto");
const p_texto = document.querySelector("#p_texto");
const btn_texto = document.querySelector("#btn_texto");

btn_texto.addEventListener("click", (evento) => {});

let num = 10;

// setItem - define a chave
// getItem - obtem o valor da chave
// localStorage.setItem("numero", num);
localStorage.setItem("nome", "Kauê");

localStorage.setItem("numero", 33);
// alert(localStorage.getItem("numero"));
// localStorage.clear();
// Obter o valor de uma chave pelo index
// alert(localStorage.key(0));
// alert(localStorage.getItem(localStorage.key(0)));

// Quantas chaves possuem no localStorage
// alert(localStorage.length);

// Session Storage - dados são perdidos ao encerrar a sessão

localStorage.clear();

sessionStorage.setItem("nome", "sessão");
