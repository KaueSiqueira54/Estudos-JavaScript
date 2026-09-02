//parent - elemento pai
//child - elemento filho
//first child - primeiro filho
//last child - ultimo filho
//siblings - elementos irmãos
//rootNode - elemento raiz
//owner document - proprietatio - document - index

const caixa1 = document.querySelector("#caixa1");
const btn_c1 = [...document.querySelectorAll(".curso")];

console.log(caixa1.children); // todos os elementos
console.log(caixa1.firstElementChild); // Primeiro elemento
console.log(caixa1.lastElementChild); // Ultimo elemento
console.log(document.getRootNode()); // elemento raiz - document - sempre o index
