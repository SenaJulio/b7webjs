document.getElementById('teste')
document.getElementsByClassName('.botao')
document.getElementsByTagName('h1')

document.querySelector('#teste')
document.querySelectorAll('teste2')


function clicou() {
    console.log('Clicou no Botao');
}
let botao = document.querySelector('.botao')
    botao.addEventListener('click', function(){
        clicou()
    })
   
