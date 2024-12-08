//displays data in the console
console.log(5);
console.log('javaScript');
//variables in js
let x =10;
if(x>=10){
    let y = 1;
    console.log(y)
}
//const
const a = 10;
console.log(a);
//Global scope
var y = "WElcome to JavaScript";
function first(){
    console.log(y);

}
first ();
//function scope
function test(){
    var fs = "Hello, world";
    console.log(fs);

}
test();
//Block scope
function example(){
    if(true){
        var fs = "JavaScript";
        console.log(fs);
    }
}
example();

//Primitive Data types
//String datatype

let FirstName = "Shamsa";
let LastName = "'Abdullahi'";
console.log(typeof FirstName);
console.log(LastName)

//Number Data types

let num = 96.6;
console.log(num);

//Reference data type
//Object
let person = {
    FirstName : "shamsa",
    LastName : "abdulahi",
    age:32,
}
console.log(person);