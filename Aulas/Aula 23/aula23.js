//Funções com parâmetros rest
//Não preciso especificar a quantidade de parâmetros na função

function somar(...valores) {
  let res = 0;
  for (let v of valores) {
    res += v;
  }
  return res;
}

console.log(somar(50, 10, 50, 30, 40));
