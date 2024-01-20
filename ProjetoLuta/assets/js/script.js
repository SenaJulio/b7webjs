// knight ou Sorcerer - Guerreiro o Mago
// LittleMonster ou BigMonster

// criar classe padrão

let char = new Knight('Bonieky');
let monster = new LittleMonster();


const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')

);

stage.start();


