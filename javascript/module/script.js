/* ES6 AKA Ecmascript 2015 */
// import {login} from './lib.js'

// login();

/* let const */

// var productName = 'Laptop';
// //code polute

// var age = 18;

// if(age>=18){
//     var driving = true;
// }
// console.log(driving);

/* Function scope */

// function register() {
//     var username = 'rakesh';
//     var password = 'secret';
// }
// console.log(username);


/* var / let / const variables */

// var product = 'laptop';
// var product = 'mobile';

// console.log(product);

//  const product = 'laptop';
// product = 'mobile';
// console.log(product);


/* Hoisting */

//  console.log(age);
// let age = 20;

// let name;
// name = 20;
// console.log(name);

/* window.product */

// var box = "clothes"
// let boxes = "toys"


/* change const value using object */

// const age = {
//     years: 19,
// };
// age.years = 20;

// console.log(age);


/* arrow functions */

// function greet(){
//     console,log('good morning');
// }

// const addition = () => {
//     console.log(a+b);
// }
// addition(10 , 20);

/* short method */

// const addition = (a) => {
//     console.log(a+a);
// }
// addition(10);

/* this keyword */

// console.log(this);

// const shop ={
//     purchase(){
//         console.log(this);
//     }
// };
// shop.purchase();

// const shop ={
//     purchase: function(){
//         console.log(this);
//     },
// };

// shop.purchase();


/* parent context */

// const shop ={
//     purchase: () => {
//         console.log(this);
//     },
// };

// shop.purchase();

