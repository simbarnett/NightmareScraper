function *foo() {
    
    yield 2;
    yield 3;
    yield 4;
}

var it = foo();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// function *foo() {
//     var x = 1 + (yield "foo");
//     console.log(x);
// }


// function gloo() {
//     var x = yield "dd";
//     console.log(x);
// }
// gloo();

