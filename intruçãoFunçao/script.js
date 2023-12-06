// o que é uma função?

function gravidade() {  // criação da função
    console.log('A gravidade do planeta é:');
    console.log(9.8);
}

gravidade() // chama a função ou uso da função

function somar(n1, n2) { // () porta de entrada da função
 let resultado = n1 + n2
 console.log('Resultado:' + resultado)
}
somar(10, 15);

function nomeCompleto(nome, sobrenome){
    console.log(`${nome} ${sobrenome}`);
}
nomeCompleto('Bonieky', 'Lacerda');
nomeCompleto('João', 'Silva'); // passar paramentros

// returno da função
// ENTRADA -> PRECESSAMENTO -> SAIDA

function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
    
}
let completo = nomeCompleto('Bonieky', 'Lacerda');
console.log('completo:' +  completo);


function maiorDeIdade(idade){
    if(idade >= 18){
        return true;
    }else{
        return false
    }
}
let verificacao = maiorDeIdade(20)
console.log(verificacao)
if(verificacao){
    console.log("É MAIOR de idade")
}else{
    console.log('É MENOR de idade')
}