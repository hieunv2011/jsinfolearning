// let user ={
//   name: "John",
//   age: 30
// };
// user.sayHi = function(){
//   alert("Hello !");
// }

// A function that is a property of an object is called its method.
// Khi viết code sử dụng Object để dại diện cho các thực thể = Lập trình hướng đối tượng

//this use to access information stored in the obj to do its job

// let user ={
//   name: "John",
//   age: 30,
//   sayAge(){
//     alert(this.age);
//   }
// };
// user.sayAge();

// let user ={name:"John"};
// let admin ={name:"Admin"};
// function sayHi(){
//   alert(this.name);
// }
// user.f= sayHi;
// admin.f=sayHi;

// user.f();
// admin.f();

//Arrow function have no "this"
// let user={
//   firstName:"Ilya",
//   sayHi(){
//     let arrow =()=> alert(this.firstName);
//     arrow();
//   }
// };
// user.sayHi();

// Task

// let caculator = {
//   read() {
//     this.a = prompt("a=", 0);
//     this.b = prompt("b=", 0);
//   },
//   sum() {
//     const c = +this.a + +this.b;
//     return c;
//   },
//   mul() {
//     const d = this.a * this.b;
//     return d;
//   },
// };
// caculator.read();
// alert(caculator.sum());
// alert(caculator.mul());

//2
let ladder = {
  step: 0,
  up() {
    //this.step++;
    let goUp=()=> this.step++;
    goUp();
  },
  down() {
    //this.step--;
    let goDown=()=> this.step--;
    goDown();
  },
  showStep: function() { 
    //alert( this.step );
    let show=()=> alert(this.step);
    show();
  }
};
ladder.up().down();
console.log(ladder.step);




