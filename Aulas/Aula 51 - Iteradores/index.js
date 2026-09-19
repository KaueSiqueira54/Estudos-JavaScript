// Coleções iteráveis
// String, arrays, map, sets

const valores = [10, 20, 60];

const it_valores = valores[Symbol.iterator]();

const texto = "youtube";

const it_txt = texto[Symbol.iterator]();

console.log(texto);
console.log(it_txt.next().value);
console.log(it_txt.next());
console.log(it_txt.next());
console.log(it_txt.next());
console.log(it_txt.next());
console.log(it_txt.next());
console.log(it_txt.next());
