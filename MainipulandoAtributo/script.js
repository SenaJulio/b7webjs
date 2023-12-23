function clicou() {
   const input = document.querySelector('input');
    console.log(input.getAttribute('type'));
    console.log(input.getAttribute('placeholder'));

    if(input.hasAttribute('placeholder')){
  console.log('Tem placeholder Sim');
    } else{
        console.log('Não tem placeholder');
    };
}

function clicou() {
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');

    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password')
        botao.innerText = 'mostrar senha'
    }else{
        input.setAttribute('type', 'text')
        botao.innerText = 'Ocultar senha'
    }
   
}
/*
getAttribute = pegar um atribute
hasAttribuite = saber se tem um atribute
setAtribute = colocar um atribute ou alterar um atribute

*/