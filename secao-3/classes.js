class Animal{
  constructor(f){
    this.familia = f
  }
  andar(){
    return 'Andando';
  }
}
class Cachorro extends Animal{
  constructor(n,i){
    super("Carnivoros")
    this.nome = n
    this.idade = i
  }


  latir(){
    return`${this.nome}: au au`
  }
}
let rex = new Cachorro("rex", 12);
let max = new Cachorro("max", 22);

console.log(rex);
console.log(rex.latir());
console.log(max.familia);




