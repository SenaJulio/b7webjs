function clicou() {
 const button = document.querySelector('button')
   if(button.classList.contains('azul')){
    button.classList.remove('blue');
    button.classList.add('verde')
   }else{
      button.classList.add('azul');
      button.classList.remove('verde')
   }
     button.classList.add('verde')
     button.classList.remove('azul')

     button.classList.toggle('preto')
     button.classList.replace('branco', 'preto')

     //outra forma de faze o If

     if (button.classList.contains('azul')) {
        button.classList.replace('azul', 'verde')
     }else{
        button.classList.replace('verde', 'azul')
     }
}

/*
Pegar Classes
button.classlist() = responsavel pelas classes do meu elemento
button.classeList.add() = adicionar uma classe nova
buttton.classList.remove() = remove uma classe
button.classList.contains() = verificar se tem uma class
*/