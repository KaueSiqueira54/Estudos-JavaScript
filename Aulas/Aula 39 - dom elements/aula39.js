const caixa1 = document.querySelector("#caixa1");
const c1_2 = document.querySelector("#c1_2");
const btn_c1 = [...document.querySelectorAll(".curso")];

console.log(caixa1.hasChildNodes()); // Retorna se o elemento possui filhos ou não - true or false
console.log(btn_c1[0].hasChildNodes());

console.log(caixa1.children.length > 0 ? "Possui Filhos" : "Não possui filhos");
console.log(
  btn_c1[0].children.length > 0 ? "Possui Filhos" : "Não possui filhos",
);

// console.log((caixa1.firstElementChild.innerHTML = "TESTE"));
// console.log((caixa1.children[1].innerHTML = "TESTE"));

console.log(c1_2.parentNode.parentNode.children[1]); //Elemento Pai
