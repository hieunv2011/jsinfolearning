// Constructor, Operator "new"
//Ham Khoi Tao

// function User(name){
//     this.name =name;
//     this.isAdmin =false;
// }
// let user =new User("Jack");
// alert(user.name);
// alert(user.isAdmin);



// function User(name){
//     if (!new.target){
//         return new User(name);
//     }
//     this.name=name;
// }
// let john =User("John");
// alert (john.name);

// function BigUser(){
//     this.name ="John";
//     return{name:"God"};
// }
// alert(new BigUser().name);

// function User(name){
//     this.name =name;
//     this.sayHi=function(){
//         alert("My name is "+this.name);
//     };
// };
// let john = new User(prompt("Name:","Harry"));
// john.sayHi();

// function Calculator(){
//     this.read=function(){
//         this.a =+prompt("Nhap a", "0");
//         this.b =+prompt("Nhap b", "1");
//     };
//     this.sum=function(){
//         return this.a+this.b;
//     };
//     this.mul=function(){
//         return this.a*this.b;
//     };
// }
// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Accumulator(value){
    this.value=value;
    this.read=function(){
        this.value += +prompt("Nhap value","0");
        return this.value;
    };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values


