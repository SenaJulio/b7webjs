let profession = "bombeiro";

console.log("Profissão:"  + ' ' +  profession)
switch(profession){
    case 'fiscal':
        console.log('Sua camisa será VERDE');
    break;
    case 'bombeiro':
        console.log('sua camisa será VERMELHA')
        break;
    case 'policial':
        console.log('sua camisa será AZUL');
        break
        default:
            console.log('Sua camisa será PRETA');
            break;
}