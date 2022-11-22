//* const numbers = [1212,4356,4566,45,455454];

//*const { func } = require("prop-types");

//* const increased = numbers.map(number => ++number)

//* console.log(increased);
//*soru 2//

//* const numbers = [1212,4356,4566,45,"hello","hi",455454];

//* const increased = numbers
//* .filter(sayı => typeof sayı === "number")
//* .map(number => ++ number)
//* .sort((a,b) => a-b) //burada küçükten büyüğe sıralama yaptık


//* let result = confirm ("are you sure?");
//* console.log(result); yes or no questions



//* let ad = prompt("adınızı girin");
//* console.log(`adınız : ${ad} dir`);
//* console.log("adınız : ad + dır");


// var a = 10;
// {
//     let b = 3;
// }
//* console.log("a = " + a);
//* console.log("b =" + b); çalışmaz clg üst blokta olmalı çünkü let ile tanımlanmıştır.

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

//*const language = "Javascript"
//*console.log(language [ language.length - 3 ]); burada languane.lenght undifened bu nedenle -3. teim olan i döner.

//*console.log("505" + (-6) * ("23") );


// function yasKontrolu(yas) {

//     // if (yas > 18) {
//     //   return true;
//     // } else {
//     //   return confirm('Ebeveynlerin izin verdi mi?');

//     return (yas>18)?true: confirm('Ebeveynlerin izin verdi mi?');
//   }
//   console.log(yasKontrolu(10))

//*let age = 30;
//*let oldAge = age;
//*age=31;
//*console.log(age);
//*console.log(oldAge);     primitive values

// const me = {
//   name: "Jonas"
//   age: 30
// /};
// const friend = me;
// friend.age = 27;

// console.log("Friend:", friend);    ikisinde de age 27 çıkar 
// console.log("Me:", me);


//!const student = {
    //! firtName: 'Can',
    //!  number: 'F1234', };

//! const otherStudent = student;
//! console.log(otherStudent);

//! otherStudent.number = 'C12356';

//! console.log(student);

//! burada const adresini değiştiremeyiz ama içindekileri değiştirebilir yani yeniden const = otherStudent yapamayız

//? console.log(3>2>1)= false
//? console.log(1<2<3); true

//* let age = prompt('How old are you?', 100);
//*alert(`You are ${age} years old!`);

// let a = ["javascript"];
// console.log(a.length); =1

// let a = "javascript";

//?let a = 2
//?let a = 4        olmaz block scope
//?console.log(a);


//!let a= null
//!console.log("1." + typeof a );

// let a = 32;
// console.log("32" + a); //!number

// let a = 32125n;
// console.log("12."+ typeof a); //!bigint

// let a = 1
// console.log(typeof a);

// let a = 5.5 (virgül olmaz)
// console.log(typeof a);

// const fn = () => ({x:1, y:2, a:3, b:4})
// const {x:a, y:b} = fn()
// console.log(a,b)

// console.log(typeof NaN); (number)
//?console.log(Number.MAX_VALUE);
//?console.log(Number.MIN_VALUE)

// let billion = 1.2e9
// console.log(billion);

/*let a = 0.2
let b = 0.1
console.log(a+b) = 0.3000...4 but

let x = (0.2*10 +0.1*10)/10
console.log(x) = 0.3 buluruz*/
