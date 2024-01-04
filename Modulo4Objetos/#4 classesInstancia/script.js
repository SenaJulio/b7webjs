class Person{
    age = 0;
    constructor (name, age){
        this.name = name;
       
    }
}
let p1 = new Person("João", 20)
let p2 = new Person("Maria", 30)
let p3 = new Person("Pedro", 40)

p1.age = 20
console.log(`P1 = ${p1.name} tem ${p1.age} anos`);
console.log(`P2 = ${p2.name} tem ${p2.age} anos`);
console.log(`P3 = ${p3.name} tem ${p3.age} anos`);