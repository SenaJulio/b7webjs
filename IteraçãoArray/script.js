let fruits = ['Banana','Laranja', 'Maça', 'Pêra'];

let bigFruits = fruits.filter((item)=>{

    // return item.length > 4; forma mais simplificada
    if(item.length > 4){
        return true;
    }else{
        return false;
    }
});
console.log(bigFruits);


fruits.every((value)=>{
    return value.length > 3;
});
fruits.some((value)=>{

});

if(fruits.incluides('Uva')){
    console.log('Tem uva Sim!');
}else{
    console.log('Não tem uva');
}

