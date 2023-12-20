function clicou() {
    
const teste = document.querySelector('#teste');
console.log(teste);

// o que tem dentro do conteudo
console.log(teste.children);

// elemento dentro do ul
console.log(teste.children[0].children);

//
console.log();
console.log();

var ul = teste.children[0] //não é aconselhavel usar o children para pegar elementos, apenas para saber o que tem dentro
var ul = document.querySelector('ul')

ul.innerHTML = "<li>Item alterado<li>" // alterar algum item
ul.innerHTML += "<li>Item alterado<li>" // acrescentar item
ul.innerHTML = ul.innerHTML + "<li>Item alterado<li>" // acrescentar item

ul.children[0].innerHTML = "Item Aletrado" // altera apenas o primeiro item
ul.children[0].innerHTML = "<strong>Item Alterado<strong/>"// pode colocar tags HTML
ul.children[1].outerHTML = 'ul' // pega os elementos externos tambem
}

