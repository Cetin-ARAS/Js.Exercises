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

// let myNumber = 0x5AD;
// console.log(myNumber) hexadecimal

// num1 = 15;
// num2 = 025;
// let result = num1 + num2;
// console.log(`result is ${result}`) octal

//*let a = null
//*console.log(typeof a); object

//? let h =1_000_000 bu şelide yazılarbilir kolay okunsun diye

//?console.log(isNan(h)) true or false verir

//! console.log(015+025); başında 0 old için oktal

// console.log(typeof (5 <= 4)); 

// let a = 5
// let b = a++
// console.log(a);
// console.log(b);

// let a = 5
// let b = ++a
// console.log(a);
// console.log(b);

//! a="", b=0, c=null
//!e=a||b||c,
//!console.log(e);

// console.log(Boolean(undefined)); false verir
// console.log(Boolean(null)); false verir
// console.log(Boolean(NaN)); false verir
// "",0,0n,false, false verir
//?console.log(null||undefined); undefined döner true yok son falseyı aldı.

//! let a =(1,2,3);
//! console.log(a); 3 verir , nedeniyle

// let a = 3
// let b = 4
// a = b
// console.log(a);
// console.log(b);

// const numbers = [1,2,3]
// const [number1, number2] = numbers
// console.log(number[0])   1 verir = number1


// const fullStack [                            
//     ["HTML","CSS","JS","REACT"]
//     ["NODE","EXPRESS","MONGODB"]
// ]
// const [frontend,backend] = fullStack
// console.log(frontend); =>     ["HTML","CSS","JS","REACT"]
// console.log(frontend); =>     ["NODE","EXPRESS","MONGODB"]
// const [[frontendilkeleman],backend] = fullStack
/* console.log(frontendilkeleman); HTML yazdırır*/
// bir elemanı es geçmek için virgül arası boşluk yapabilirsin.

// console.log(a)
// var a = 3  undefined verir dikkat hosting özelliği varı
// fakat
// console.log(a);
// let a = 3  is not defined verir hatadır.

// console.log(4<=5) boolen true

// var a = 5, n = -3; a += ++n;
// console.log(n)  -2
// console.log(a) 3

	//? var s = '55' + '0';  550
	//? var s = '55' + 0; 550
	//? var s = '55' * 1 + 0; 55
	//? var s = '55' * 1 + '0'; 550

	// var n = 42; 
    // var obj = new Object ({ 
    //     	n: 10, 	f: function(){ 	
    //             	return n;  
    //             	} });  
    // console.log ( obj.f() ) 42 yazar burda

    // var n = 42; 
    // var obj = new Object ({ 	
    //     n: 10, 	f: function() { 
    //            		return this.n;  
    //             	} });  
    //                 console.log ( obj.f() ); 10 yazar burda

    // var a= 2
    // function s()
    // {var a=3}
    // console.log(a) a burda 2 yazar

   //* let x = (1,2,3)
    //*console.log(x); 3 verir virgülün özelliği 

//     let a = 3;
// switch (a) {
//   case "3":
//     a = 33;
//     break;
//   case 2:
//     a = 'two';
//     break;
//   case 3:
//     a = 'three';
//     break;
//   default:
//     a = 'not found';
//     break;
// }
// console.log(`The value is ${a}`); burada === bunun ile kontrol eder

// let day = 2;
// let dayName;
// switch (day) {
//   case 1:
//     dayName = 'Monday';
//     break;
//   case 2:
//     dayName = 'Tuesday';
//     break;
//   case 3:
//     dayName = 'Wednesday';
//     break;
//   case 4:
//     dayName = 'Thursday';
//     break;
//   case 5:
//     dayName = 'Friday';
//     break;
//   case 6:
//     dayName = 'Saturday';
//     break;
//   case 7:
//     dayName = 'Sunday';
//     break;
//   default:
//     dayName = 'Invalid day';
// }
// console.log(dayName); // Tuesday

// let sum=0;
// for (let i = 0; i <= 6; i++) {
//   console.log(i);
//   sum += i;
// }
// console.log(`total price ${sum}`)   

// let sum = 0;
// let number = 0;
// do {
//     sum += number;
//     number = parseInt(prompt('Enter a number: '));
// } while(number >= 0)
// console.log(`The sum is ${sum}.`);


// var players = ["Messi ", "Ronaldo ", "Hazard ", "Neymar ", "Salah "];
// var text = "";
// var i;  
// for (i = 2; i < players.length; i++) {
// text += players[i];
// }
// console.log(text);  ilk i 2 dir önemli
 
// function sayHi() {
//     return 'Hi!';
// }
// function sayHi2() {
//     console.log('Hello!');
// }
// sayHi()
// sayHi(); // no output to the console
// console.log(typeof sayHi()); // string
// console.log(typeof sayHi); // function
// sayHi2(); // Hello!
// console.log(typeof sayHi2()); // undefined
// console.log(typeof sayHi2); // function

//?for(let i=0; i <= 30; i++){
   //? const randomSayi = Math.floor(Math.random()* 100 + 1);
    //?console.log(randomSayi);
//?   }

// const n = prompt(`n sayısı giriniz`);
// let toplam = 0
// for(i=0; i<=n; i++){
//     toplam += i;
// }
// console.log(toplam)


// function yasHesapla(year, name) {
//     const mesaj  = ` ${name} in yaşı ${new Date().getFullYear() - year} dir`;
//     return mesaj;
// }

// const mesaj1 = yasHesapla(2001, "Elif");
// console.log(mesaj1);

// const buyukBul = function (x,y,z,a){
// let enBuyuk;
//   if(x>y && x>z && x>a) {
//     enBuyuk = x;
//   }else if(a>y && a>z && a>x){
//     enBuyuk = a;  
//   }else if(y>a && y>z && y>x){
//     enBuyuk = y;
//   }else if(z>y && z>a && z>x){
//     enBuyuk = z; 
//   }else{
//     enBuyuk =x;
//   }
//    return enBuyuk;
// };

// console.log('En Büyük Sayi:', buyukBul(1, 3, 5, 4));

//?const tekMi=(n)=> (n % 2  ? 'TEK' : 'ÇİFT');
//?console.log(tekMi(3));

//!const r = prompt('yarıçapı giriniz');
//!const h = prompt('yüksekliği giriniz');

//!const hacimHesapla =(r, h)=>((Math.PI*r**2)*h);
//!console.log('silindir hacmi:', hacimHesapla(r,h));

//!const school = {
   //! numStudents: 45,
   //! maxCapacity: 100,
   //! availableQuota() {
        // this refers to the school object
        // and it's used to access its properties
       //! return this.maxCapacity - this.numStudents;
   //! }
//!};
//!console.log(school.availableQuota());


// let x = "a, b";

// let y= "c, d, e";

// let z = x.concat(y);
// console.log(z) = a,bc,d,e

//?let str = "Clarusway";
//?console.log(str[0]); // C
//?console.log(str[3]); // r
//?console.log(str[str.length-1]); //y

// let x = "Cetin"
// console.log(x.includes("C")); true

// let str = 'You do not know what you do not know until you know.';
// let  firstResult = str.lastIndexOf("know");

// console.log (`firstResult is ${firstResult} `);

// let secondResult = str.lastIndexOf("know", str.lastIndexOf("know")-1); // Nested use

// console.log (`secondResult is ${secondResult } `);


//!let str = 'You do not KNow what you do not know until you know.';
//!console.log (str.search(/know/i));
//*İ HALF DUYARLILIĞINI KALDIRIR ÖNEMLİ searc de indexOf gibi bulamaz ise -1 çevirir

// let myString = "Mr Brown has a brown house and a brown car";
// let myNewString = myString.replace("brown", "red");
// console.log(myNewString);

// i yine harf duyarlılığını kaldırır.g de globalde eşleşmeleri yapar.

//*let x = "cetin"
//*console.log(x.slice(0)) //cetin
//*console.log(x.slice(0,3)); //cet
//*console.log(x.slice(-5,-2)) //cet

// let x = "cetin"
// console.log(x.substring(0,2));
// console.log(x.substring(3,100));

// let x = "                          cetin       "
// console.log(x.trimEnd()); baştaki boşlukarı trimledi

// let x = { name: "Cetin"};
// const y = [x];
// x= null ;
// console.log(y)

// const myArr = [1, 2, 3];
// const myObj = {firstName: "John", lastName: "Doe", age:24};
// console.log(typeof myArr); // object
// console.log(Array.isArray(myArr)); // true
// console.log(myArr instanceof Array); // true
// console.log(typeof myObj); // object
// console.log(Array.isArray(myObj)); // false
// console.log(myObj instanceof Array); // false

// const name = [];
// const x = name.length;
// console.log (name) output 0

// let x = ['okul', 'cetin']
// console.log(x.reverse());

// const numbers = [0, 1 , 2, 3, 10, 20, 30 ];
// numbers.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });
// console.log(numbers);
// [ 0,  1,  2, 3, 10, 20, 30 ]

// let x = ['okul', 'cetin']
// console.log(x.sort())

// let colors = [0,  1,  2, 3, 10, 20, 30 ];
// console.log(colors.splice(3, 2, 11, 12))
// console.log(colors);

// var x = ["9","25","111","John","James","Aaron"];
// console.log (x.sort());

// findSmallestInt(x) {
//     const min = Math.min(...x)
//     return min
//   }

//?Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// var summation = function (num) {
//     let result = 0;
//     for (var i = 1; i <= num; i++) {
//       result += i;
//     }   
//     return result;
//   }

//?You get an array of numbers, return the sum of all of the positives ones.
//?Example [1,-4,7,12] => 1 + 7 + 12 = 20
// function positiveSum(arr) {
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++) {
//       if(arr[i] > 0) {
//        sum += arr[i];
//      }
//     }
//    return sum;
//    }
//?Write a function which calculates the average of the numbers in a given list.
//?Note: Empty arrays should return 0.
// function findAverage(array) {
//     var sum = 0;
//        for(var i = 0; i < array.length; i++) {
//          if(array[i] > 0) {
//           sum += array[i] 
          
//         }
//          }
//         if(sum / array.length !=Number(sum / array.length)){
//           return  0;
//         }
//       return sum / array.length ;
//       }
// function find_average(arr) {
//     return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
// }

//?A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
//?Return True if yes, False otherwise :)
// function hero(bullets, dragons){
//     return bullets >= (2 * dragons)? true : false;
//   }
  

// const letters = ['A', 'B', 'C', ,'E'];
// letters.forEach((letter) => {
//   console.log(letter);
// });

// const sides = [2, 4, 5, 8, 10];
// const squares = sides.map((side)=> {
//     return side ** 2;
// });
// console.log(squares);

// const cities = [
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'Chicago', population: 2695598},
//     {name: 'New York', population: 8175133},
//     {name: 'Houston', population: 2099451},
//     {name: 'Philadelphia', population: 1526006}
//   ];
//   const rounded = cities.map((city) => {
//     city.population = (city.population/1000000).toFixed(1)+'M';
//     return city;
//   });
//   console.log(rounded);

// const cities = [
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'Chicago', population: 2695598},
//     {name: 'New York', population: 8175133},
//     {name: 'Houston', population: 2099451},
//     {name: 'Philadelphia', population: 1526006}
//   ];
//   const smallCities = cities.filter((city) => {
//     return city.population < 3000000;
//   });
//   console.log(smallCities)

// function makeCounter() {
//     let counter = 0;

//     return {
//         value: function () {
//             return counter;
//         },
//         increment: function () {
//             counter++;
//         }
//     };
// }

// let a = makeCounter();
// let b = makeCounter();

// a.increment();

// console.log(a.value()); 1
// console.log(b.value()); 0
// let a = -true;
// console.log(a);


// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }
// creating objects
// const person1 = new Person();
// console.log(Person.prototype);

// class Dog {
//     constructor(name, foot) {
//       this.dogName = name;
//       this.foot = foot;
//     }
//   }
//   myDog = new Dog("Buldog") 
//   console.log(myDog)

//   class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.#privateAge = 10;
//     }
//     fullName() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   let person = new Person("John", "Doe");
//   console.log(person.fullName()); // Expected Output : "John Doe"

// const hepsiniTopla = (...sayılar) => {
//     let toplam = 0;
//     console.log(sayılar);
// };

// console.log(hepsiniTopla(1,2,3,4))

// let n = 0;
// while (n < 3) {
//   n++;
// }
// console.log(n);

//? var hoistedtir let ve const değil
//? var func scopedir
// let x = function(){
//     if(true) {
//         console.log(a) a burda undefined verir varın hoisting öz dolayı
//         console.log(b) b is not defined verir.

//         var a = 2;
//         let b = 1;    
//     }
//     console.log(a) burda 2 var function scopedur
//     console.log(b) b değil
// }
// x();

//* const cars = [0.2+0.1]
//* console.log(cars instanceof(Object)); true döner
//* console.log(cars instanceof(Array)); true döner

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);


// function myFunction(item) {
//   sum += item;
//   console.log(sum);
// }
// console.log(sum)
// let x =5
// let a = 3;
// let c = a++ 
// console.log(++c)