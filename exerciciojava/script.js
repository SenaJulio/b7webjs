function name(params) {
    
    
    newLi.classListadd('li')
}

// elementos
const input = document.querySelector('input') // selecionando os elementos que vai precisar
const lista = document.querySelector('ul')

// funções  criação do evento com a função
function handlekeyUp(e) {
    if (e.key === 'Enter') {
        const newLi = document.createElement('li') // criou um li
        newLi.innerHTML = input.value; // 
        lista.appendChild(newLi)

        input.value = '' // limpar o campo de texto
     }
}


//eventos
input.addEventListener('keyup', handlekeyUp)