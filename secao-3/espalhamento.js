let numeros = [1,2,3];
const novosNumeros = [...numeros, 4];
// console.log(novosNumeros);
// console.log(numeros);

// --------

const rex = {
  nome: "Rex"
}

const copiaRex = {...rex, idade:10, familia:"carnivora"};
// console.log(copiaRex);

// ---------

const somar = (...numeros) => numeros.reduce((a,b) => a + b, 0);

console.log(somar(10, 20, 30,40));
