const body = document.querySelector("body");
const title = document.querySelector("title");

// Titulo da página
title.innerHTML = "Tabelas com DOM";

// Tabela
const table = document.createElement("table");
table.style.width = "400px";
table.style.height = "200px";
table.style.border = "1px solid #000";
table.style.borderCollapse = "collapse";

body.appendChild(table);

// Corpo da tabela
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const tfoot = document.createElement("tfoot");

table.appendChild(thead);
table.appendChild(tbody);
table.appendChild(tfoot);

// Thead
let trHead = document.createElement("tr");
thead.appendChild(trHead);

let th1 = document.createElement("th");
th1.innerHTML = "ID";
let th2 = document.createElement("th");
th2.innerHTML = "Produto";
let th3 = document.createElement("th");
th3.innerHTML = "Preço";

trHead.appendChild(th1);
trHead.appendChild(th2);
trHead.appendChild(th3);

// Tbody

const produtos = ["Arroz", "Feijão", "Leite", "Bolo de Chocolate"];
const produtosPreco = ["29,99", "19,99", "10,99", "19,99"];

produtos.map((elemento, indice) => {
  let trBody1 = document.createElement("tr");
  tbody.appendChild(trBody1);

  let td1 = document.createElement("td");
  td1.innerHTML = `${indice + 1}`;
  trBody1.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerHTML = `${elemento}`;
  trBody1.appendChild(td2);

  let td3 = document.createElement("td");
  td3.innerHTML = `${produtosPreco[indice]}`;
  trBody1.appendChild(td3);
});
