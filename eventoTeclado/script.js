function apertou() {
    console.log('Apertou');
}

function segurou() {
    console.log('SEGUROU');
}

function soltou(event) {  // saber a tecla digitada = code e key, shiftkey , ctrlky e altkey
    console.log(event.code);
}

document.addEventListener('keyup', soltou) // evento no documento
const input = document.querySelector('input') // evento no input


/* 
COLOCANDO A AÇÃO MO HTML
onkeydown="apertou()" 
onkeypress="segurou()" 
onkeyup="soltou()"

*/