function clicou() {
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')

    const newButton = document.createElement('button');
    newButton.innerHTML = 'Botão';

 ul.after(newButton)
 ul.before(newButton)

 const newUl = document.createElement('ul');
 for (let i = 0; i < 5; i++) {
    const newLi = document.createElement('li');
    newLi.innerHTML = 'Item add' + i;
    newUl.append(newLi)
 }
 ul.after(newUl)
}
// adicionar no lista = cria a lista e adiciona = const newLi = document.createElement('li');
// adicionar itens ao redor dos elementos
// AFTER = depois
// BEFORE = antes