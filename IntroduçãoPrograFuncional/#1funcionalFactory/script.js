let person ={
    name: 'Bonieky',
    lastName: 'Lacerda',
    age : 90
}

function createPerson(name, lastName, age){  //  create -> indica que será criada uma pessoa
 return{
    name,
    lastName,
    age
 }
}

let person1 = createPerson('Boniekey','Lacerda', 90)
let person2 = createPerson('Junior','Fulano', 20)

console.log(person1.name, person1.lastName, person1.age);