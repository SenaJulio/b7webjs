let ingredientes = [
    'água',
    'farinha',
    'ovo',
    'corante',
    'sal'

]
ingredientes.push('cebola')
console.log(`Total de ingredientes: ${ingredientes.length}`);


// Algumas funções
//length = quantidade de itens no array
//push() = acrescentar itens
// pop() = remove o ultimo item do array
//shift() = remove o primero item do array

//

// 1. No array abaixo, qual o número que pega a Ferrari?
let carros = ['BMW','FERRARI',"Mercedes"];

//let x = 
console.log('1.' + carros[1]);

//2. Troque a Ferrari por Audi

carros[1] = 'Audi'; // trocar itens no array
console.log('2. Lista com Audi');
console.log(carros);

//3. Adicione o Volvo a lista
carros.push('Volvo')
console.log('3. Lista com volvo');
console.log(carros);

// 4. Exiba quantos itens tem no array
carros.length
console.log(`Total de itens: ${carros.length}`);