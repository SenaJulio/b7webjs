
for(let n = 0;n < 10; n++){
    console.log('Frase Qualquer' + n);
}

for (let n = 2; n < 20; n++) {
 console.log("Contando sempre" + n);
}


// loop em array

let cores = ['preto', 'branco', 'azul', 'vermelho']

for(let n = 0; n < cores.length; n++){
    console.log(cores[n]);
}
// um pouco mais inteligente

for(let i in cores){
    console.log(cores[i]);
}
for( let cor of cores){
    console.log(cor);
}

let coress = [
    {nome: 'preto', qt:10},
    {nome: 'azul', qt:5},
    {nome: 'vermelho', qt:15}
]
for(let cor of coress){
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}
for( let i in coress){
    coress[i].nome = coress[i].nome.toUpperCase();
}
console.log(coress);
 

// Loop com while

let numero = 0;
while( numero <= 10){
    console.log(`O numero da vez é ${numero}`);
    numero++;
}