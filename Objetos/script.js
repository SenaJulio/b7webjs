let personagem={

    nome:'Bonieky',
    idade: 90,
    país: 'Brasil',
    olhos:['preto', 'azul'],
    caractericas:{

        forca: 20,
        magia: 5,
        stamina: 15
    }
    
}
console.log(personagem);
console.log(personagem.país);
console.log(`${personagem.nome} tem ${personagem.idade} anos`);
console.log(personagem.caractericas.magia);
console.log(personagem.olhos[1]);

// fazer alteracao do valor
personagem.nome = 'Pedro';
personagem.caractericas.forca +=5;
personagem.olhos.push('verde')
 
console.log(`forca: ${personagem.caractericas.forca}`);
console.log(personagem.nome);
console.log(personagem.olhos);

let personagem1 = {
    nome: 'Bonieky',
    idade: 90,
    carros:[
        {modelo: 'Fiat', cor:'preto'},
         {modelo: 'Ferrari', cor: 'vermelho'}
    ]
}
console.log(personagem1.carros[0].modelo)