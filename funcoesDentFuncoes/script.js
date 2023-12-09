

function square(x) {
    return x * x;
}
 function addSquare(a,  b) {
    let SqrA = square(a);
    let SqrB = square(b);
    return SqrA + SqrB
 }
 console.log(addSquare(5, 7));

//funcao dentro funcao use arrow function

 function addSquare(a,  b) {
    const square = (x) => {
        return x * x;
    }
    let SqrA = square(a);
    let SqrB = square(b);
    return SqrA + SqrB
 }
 console.log(addSquare(5, 7));