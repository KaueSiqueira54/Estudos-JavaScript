//Funções anînimas - Arrow functions

//Não precisa de nome - não é instanciada na memória, é criada em tempo de execução.

const f = function somar(...valores) {
  let res = 0;
  for (v of valores) {
    res += v;
  }
  return res;
};

//Função construtor - Anônima
const f2 = new Function("v1", "v2", "return v1 + v2");

console.log(f2(10, 20));
