// const numbers = [1212,4356,4566,45,455454];

// const increased = numbers.map(number => ++number)

// console.log(increased);
//soru 2//

const numbers = [1212,4356,4566,45,"hello","hi",455454];

const increased = numbers
.filter(sayı => typeof sayı === "number")
.map(number => ++number)
.sort((a,b) => a-b) //burada sıralaa yaptık küçükten büyüğe
console.log(increased);
