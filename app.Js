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