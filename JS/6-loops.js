// 6.1
// for (let i = 1; i < 2000; i += 2) {
//     console.log(i)
// }


// 6.2
// for (let i = -2; i >= -2000; i -= 2) {
//     console.log(i);
// }


// 6.3
// // solution 1:
// for (let i = 0; i <= 100; i++) {
//     console.log(km);
//     if (i == 10 || i == 25 || i == 75 || i == 90) {
//         console.log(`Congratulations! You've reached ${i}km checkpoint.`)
//     }
// }

// //solution 2:
// let distance = 100;
// let checkpoints = [10, 25, 75, 90];

// // this loop displays every coverd km in console
// for (let i = 0; i <= distance; i++) {
//     console.log(`${i}km`);
// // this loop gets every value of checkpoints array, checks if it matches with coverd km and if so, displays result in console
//     for (let j = 0; j < checkpoints.length; j++) {
//         if (i == checkpoints[j]) {
//             console.log(`Congratulations! You've reached ${checkpoints[j]}km checkpoint.`)
//         }
//     }
// }

// 6.4
// // solution 1:
// let sum = 0;
// for (let i = 1; i < 25000; i += 2) {
//     sum += i;
// }
// console.log(`Sum of every odd number from 0 to 25000 equals to: ${sum}`);

// // solution 2:
// // input
// let limit = 25000;
// // output
// let sum = 0;

// // according to task, limit should be positive number. So, we have to check this condition first
// if (limit > 0) {
//     for (let i = 1; i <= 25000; i += 2) {
//         sum += i;
//     }
//     console.log(`Sum of every odd number from 0 to 25000 equals to: ${sum}`);
// } else {
//     console.log(`${limit} is not within allowed range.`);
// }


// 6.5
// let sum = 0;
// for (let i = 501; i < 800; i += 2) {
//     sum += i;
// }

// for (let i = 1000; i <= 2000; i += 2) {
//     sum += i;
// }
// console.log(`Sum of every odd number from 500 to 800 and every even number from 1000 to 2000 equals to: ${sum}`)


// 6.6
// let x;
// let factorial = 1;

// // factorials are defined for non-negative integers. So, we have to check if x is non-negative integer first
// if (x % 1 == 0 && x >= 0) {
//     for (let i = 1; i <= x; i++) {
//         factorial *= i;
//     }
// console.log(`!${x} = ${factorial}`);
// } else {
//     console.log(`Factorial of ${x} can't be defined as it is not a non-negative integer.`)
// }
// // if x is 0, this loop won't execute. So, we have to write that case separetly
// if (x == 0) {
//     factorial = 1;
//     console.log(`!${x} = ${factorial}`)
// }


// 6.7
// let num = 300;

// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         console.log(i);
//     }
// }


// 6.8
// let num;
// let sum = 0;

// for (let i = 1; i <= num; i++) {
//     if (num % 1 == 0) {
//         sum += i
//     }
// }
// console.log(sum);


// 6.9
// // solution 1:
// let x;
// let divisorCount = 0;

// for (let i = 1; i <= x / 2; i++) {
//     if (x % i == 0) {
//         divisorCount++;
//     }
// }
// if (divisorCount == 2) {
//     console.log(`${x} is a prime number.`)
// } else {
//     console.log(`${x} is not a prime number.`)
// }

// // solution 2:
// let x;
// let isPrimeNumber = true;

// for (let i = 2; i < x / 2; i++) {
//     if  (x % i == 0)  {
//         isPrimeNumber = false;
//         break;
//     }
// }
// if (isPrimeNumber) {
//     console.log(`${x} is a prime number.`)
// } else {
//     console.log(`${x} is not a prime number.`)
// }