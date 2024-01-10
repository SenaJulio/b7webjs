class Person{
    age = 0;
constructor (name){
    this.name = name
}
}
class Student  extends Person{ /* extends pega a herança de Person*/ 

    constructor(name, id){
        super(name)
        this.id = id;
    }
    
}

let p1 = new Student ("Bonieky", 1);
p1.age = 20;

console.log(`${p1.name} tem ${p1.age} anod e matricula #${p1.id}`);