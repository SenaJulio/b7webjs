let fruits = ['maca', 'Uva', 'Laranja', 'Banana'];

fruits.sort();
fruits.reverse();


console.log(fruits);

//ordenar Array ordem
// alfabetica = .sort():
// inverter ordem do Array
// .reverse()

// 1 opção
let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'Bmw', year: 2018},
    {brand: 'Ferrari', year: 2020}
]
cars.sort((a, b) => {
if(a.year > b.year){
    return 1;
}else if(a.year < b.year){
    return -1;
}else{
    return 0;
}
})

// 2 opção mais simplificada

cars.sort((a, b) => {
    return a.year - b.year;
})
console.log(cars);

// 3 invertendo ainda mais simplificado sem as chaves

cars.sort((a, b ) => b.year - a.year);
console.log(cars);
