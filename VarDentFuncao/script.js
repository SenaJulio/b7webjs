let count = 0; // variavel de escopo global

function add() {
    
    count++;
}
add();
add();
add()

let somar = 0
function add() {
    let somar = 0; // variavel com ecopo local, sempre terá preferencia
    count++;
}

console.log(somar)
console.log(count);