const frutas = ['laranja', 'caki', 'manga'];

let [ fruta1, , fruta3 ] = frutas;

// console.log(fruta1);
// console.log(fruta3);

const pessoa ={
  nome:"Gabriel",
  idade: 22,
  pais:"Brasil",
  idioma: "Português"
}
//  let { pais, idioma } = pessoa;
// console.log(idade);
// console.log(idioma);

const localidade = ({ pais, idioma }) => `Você mora no ${pais} e fala ${idioma}`;

console.log(localidade(pessoa));