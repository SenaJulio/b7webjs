let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade:90,
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`
    }
}
console.log(pessoa.nomeCompleto());

let cidadao = {
    nome1 :'Julio',
    sobrenome1 : 'Sena Viana',
     idade: 46,
  nomeCompleto1:function() {
    console.log(`${this.nome1} ${this.sobrenome1}`);
  }
}
console.log(cidadao.nomeCompleto1());

let dog ={
    Apolo: 'shi tzu',
    Peter: 'Ilhaça',
    idade: 3,
    nomeCompleto2:function () {
        console.log(`${this.Apolo} ${this.Peter}`);
    }
}
console.log(dog.nomeCompleto2());