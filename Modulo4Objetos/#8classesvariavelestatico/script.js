class Person{

    static hands = 2;

    age = 0;

    constructor(name){
        this.name = name
    }
    sayHi(){
        console.log(`oi, eu sou ${this.name} e tenho ${Person.hands}`);
    }
}

let p1 = new Person ("Bonieky");
p1.sayHi();