// // 15. კონსოლიდან წაიკითხეთ ორი მთელი რიცხვი და დაბეჭდეთ მათი საშუალო არითმეტიკული.

// let input1 = prompt('Enter a number: ');
// let input2 = prompt('Enter a number: ');

// // Validate inputs
// if (isNaN(input1) || isNaN(input2)) {
//     console.log('Invalid input. Please enter valid numbers.');
// } else {
//     let num1 = parseInt(input1);
//     let num2 = parseInt(input2);

//     let average = (num1 + num2) / 2;
//     console.log('Arithmetic average:', average);
// }

// // 16. კონსოლიდან წაიკითხეთ სამი მთელი რიცხვი და დაბეჭდეთ მათი საშუალო ჰარმონიული.

// let input1 = prompt('Enter a number: ');
// let input2 = prompt('Enter a number: ');
// let input3 = prompt('Enter a number: ');

// // Validate inputs
// if (isNaN(input1) || isNaN(input2) || isNaN(input3)) {
//     console.log('Invalid input. Please enter valid numbers.');
// } else {
//     let num1 = parseInt(input1);
//     let num2 = parseInt(input2);
//     let num3 = parseInt(input3);

//     let harmonic = 1 / (1/num1 + 1/num2 + 1/num3);
//     console.log('harmonic average:', harmonic);
// }


// /* 17. კონსოლიდან წაიკითხეთ ნამდვილი რიცხვი და დაბეჭდეთ მისი მთელი ნაწილი და მისი
// წილადი ნაწილი. მაგალითად მომხმარებელმა თუ შეიყვანა 3.14 თქვენმა პროგრამამ უნდა დაბეჭდოს 3 და 0.14. */

// let input = prompt('Enter number: ');
// let realNumber = parseFloat(input);

// let fraction = realNumber % 1;
// let integer = realNumber - fraction;
// console.log(integer, fraction);


// 18. კონსოლიდან წაიკითხეთ ორი მთელი რიცხვი და დაბეჭდეთ მათ შორის მაქსიმალური.
// let input1 = prompt('Enter number: ');
// let input2 = prompt('Enter number: ');
// let num1 = parseFloat(input1);
// let num2 = parseFloat(input2);


// if (num1 >= num2) {
//     console.log('Largest number: ', num1)
// } else {
//     console.log('Largest number: ', num2)
// }


/* 19. კონსოლიდან წაიკითხეთ მთელი რიცხვი n და შემდეგ n ჯერ დაბეჭდეთ “hello ” + i, სადაც i
იცვლება 0 დან n-1 მდე. */

// let input = prompt('Enter number: ');
// let n = parseInt(input);

// for (let i = 0; i < n; i++) {
//     console.log('hello', i);
// }


// 20. კონსოლიდან წაიკითხეთ n, შემდეგ წაიკითხეთ n ცალი მთელი რიცხვი და დაბეჭდეთ ჯამი.

// let input = prompt('Enter number: ');
// let num = parseFloat(input);
// let sum = 0;

// for (let i = 0; i < num; i++) {
//     sum += parseFloat(prompt('Enter number: '));
// }
// console.log('Sum  = ', sum);


// 23. მომხმარებელს შეყავს მთელი რიცხვი n, პროგრამამ უნდა დაბეჭდოს 1 დან n მდე რიცხვების ჯამი.

// let input = prompt('Enter number: ');
// let n = parseFloat(input);
// let sum = 0;

// for (let i  = 1; i <= n; i++) {
//     sum += i;
// }
// console.log("Sum of every number from 1 to n equals: ", sum);


// 24. მომხმარებელს შეყავს მთელი რიცხვი n, პროგრამამ უნდა დაბეჭდოს n ის გამყოფების რაოდენობა.

// let n = 0;
// let divisorCount = 0;
// let divisors = [];

// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         divisorCount++;
//         divisors[i-1] = i;
//     }
// }
// console.log(`${n} has ${divisorCount} divisors.`);
// console.log(divisors);


// 25. მომხმარებელს შეჰყავს ორი რიცხვი თქვენმა პროგრამამ უნდა დაბეჭდოს ამ ორი რიცხვის უმცირესი საერთო ჯერადი.

// let num1 = 12;
// let num2 = 18;

// let maxNum = num1 >= num2 ? num1 : num2;
// let minNum = num1 <= num2 ? num1 : num2;
// let lcm = 0;
// let i = 1;

// while (true) {
//     if ((maxNum * i) % minNum == 0) {
//         lcm = maxNum * i;
//         break;
//     }
//     i++
// }
// console.log(lcm);

// 26. მომხმარებელს შეჰყავს ორი რიცხვი თქვენმა პროგრამამ უნდა დაბეჭდოს ამ ორი რიცხვის უდიდესი საერთო გამყოფი.\
// let a = 26;
// let b = 13;
// let maxNum = Math.max(a, b);
// let minNum = Math.min(a, b);

// const calculateGcf = (a, b) => {
//     let gcf = 1;
//     for (let i = a; i > 0; i--) {
//         if(a % i == 0 && b % i == 0) {
//             gcf = i;
//             break;
//         }
//     }
//     return gcf;
// }
// console.log('gcf: ', calculateGcf(minNum, maxNum));

// 27. მომხმარებელს შეყავს n და m დაბეჭდეთ n^m.

// let n = 4;
// let m = 3;

// const toPower = (num, pow) => {
//     let result = 1;
//     for (i = 0; i < pow; i++) {
//         result *= num;
//     }
//     return result;
// }
// console.log(toPower(n, m));


// 28. მომხმარებელს შეყავს დადებითი რიცხვები, მანამ სანამ არ შეიყვანს -1 ს, დაბეჭდეთ რაოდენობა რამდენი ლუწი რიცხვი შეყვანა მომხმარებელმა.

// let evenNumCount = 0;
// while (true) {
//     let x = prompt('Enter number: ');
//     if(x != -1 && x % 2 == 0) {
//         evenNumCount++;
//     } else if(x == -1) {
//         break;
//     }
// }
// console.log(evenNumCount);


// 29. მოხმარებელს შეყავს მთელი რიცხვი n, პროგრამამ უნდა დაბეჭდოს ფიბონაჩის მიმდევრობის მე n წევრი.

// let n = 7;

// const findInFibonacci = (n) => {
//     let num1 = 0;
//     let num2 = 1;
//     let myNum;
//     for (let i = 0; i < n - 1; i++) {
//         myNum = num1 + num2;
//         num1 = num2;
//         num2 = myNum;
//     }
//     return myNum;
// }

// console.log(findInFibonacci(n));


//30. მომხმარებელს შეყავს მთელი რიცხვი, დაბეჭდეთ რიცხვი რომელიც მიიღება ციფრების შებრუნებით, 1256 -> 6521.

// let num = prompt('Enter integer: ');
// let newNum = '';

// if (!num.includes('.')) {
//     for (let i = num.length - 1; i >= 0; i--) {
//         newNum += num[i];
//     }
// } else {
//     console.log('Invalid input.')
// }
// console.log('Reversed: ', newNum);


// 31. დაწერეთ პროგრამა რომელიც დაადგენს შეყვანილი რიცხვი მარტივია თუ არა.

// let n = 4;

// const isPrimeNumber = (n) => {
//     if(n <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// if (isPrimeNumber(n)) {
//     console.log(`${n} is a prime number.`)
// } else {
//     console.log(`${n} is not a prime number.`)
// }


// 32. დაწერეთ პროგრამა რომელიც იპოვის და დაბეჭდავს 1000000 მდე ყველა მერტივ რიცხვს.

// const isPrimeNumber = (n) => {
//     if(n <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(2);
// for (let i = 3; i < 1000000; i += 2) {
//     if (isPrimeNumber(i)) {
//         console.log(i);
//     }
// }


/* 37. რულეტკა, მომხმარებელს შეყავს 0 დან 36 მდე რიცხვი, შემდეგ ხდება რულეტკის დატრიალების სიმულაცია, 
კონსოლში უნდა დაიბეჭდოს ამოსული რიცხვი და მოიგო თუ არა დადებულმა რიცხვმა */

// const ruletteSize = 36;
// const getRandomInt = (ruletteSize) => Math.floor(Math.random() * ruletteSize);

// const spinRulette = (number) => {
//     let randomInt = getRandomInt(ruletteSize);
//     console.log('Number on rulette: ', randomInt)

//     if (number === randomInt) {
//         console.log('You win.')
//     } else {
//         console.log('You lose.')
//     }
// }

// let input = prompt('Enter your number: ');
// let number = parseFloat(input);
// spinRulette(number);


/*38. მოხმარებელს აქვს საწყისი თანხა 1000, თამაშობს მანამ სანამ არ წააგებს ყველაფერს. ყოველ
ჯერზე შეყავს ფსონის თანხა და რიცხვი რომელზეც დებს. ხდება რულეტკის დატრიალების
სიმულაცია(0-დან 36-მდე შემთხვევითი რიცხვი), მოგების შემთხვევაში მოთამაშეს
უორმაგედბა დადებული თანხა წაგების შემთხვევაში კი მოთამაშე კარგავს დადებულ თანხას.
მოთამაშე მოგებულია მაშინ თუ რულეტკაზე ამოსული რიცხვი ემთხვევა მის მიერ დადებულ
რიცხვს. პროგრამა ყოველ მოქმედებაზე უნდა ბეჭდავდეს შესაბამის შეტყობინებას, ადვილად
რომ გაერკვეს მოთამაშე, რა რიცხვი ამოვიდა, რამდენი წააგო, რამდენი მოიგო, რამდენი აქვს ბალანსი.*/

// const ruletteSize = 36;
// const budget = 1000;
// const getRandomInt = (ruletteSize) => Math.floor(Math.random() * ruletteSize);
// let currentBudget = budget;

// function spinRulette() {
//     let numberInput = prompt('Enter your number: ');
//     let betInput = prompt('Enter your bet: ');
//     let number = parseFloat(numberInput);
//     let bet = parseFloat(betInput);
//     let randomInt = getRandomInt(ruletteSize);

//     if (bet > currentBudget) {
//         console.log(`You don't have enough money. Please, enter bet within 0-${currentBudget} range.`);
//     } else if (number === randomInt) {
//         currentBudget += bet * 2;
//         console.log('Number on rulette: ', randomInt);
//         console.log('You win.');
//         console.log('Money won: +' + bet);
//         console.log('Current budget: ', currentBudget);
//     } else if (number !== randomInt) {
//         currentBudget -= bet;
//         console.log('Number on rulette: ', randomInt);
//         console.log('You lose.');
//         console.log('Money lost: -' + bet);
//         console.log('Current budget: ', currentBudget);
//     }
// }


// while (currentBudget > 0) {
//     spinRulette();
// }
// console.log('You don\'t have any money left. Game over.');


// 45. მომხმარებელს კონსოლიდან შეჰყავს ტექსტი და სიმბოლო, თქვენმა პროგრამამ უნდა იპოვოს რამდენჯერ გვხვდება მოცემულ ტექსტში მოცემული სიმბოლო.

// let text = prompt('Enter text: ');
// let char = prompt('Enter character: ');
// let charCount = 0;

// for (let i = 0; i < text.length; i ++) {
//     if (char === text[i]) {
//         charCount++;
//     }
// }
// console.log('Your text: ', text);
// console.log('Your character: ', char);
// console.log(charCount);


// 46. დაწერეთ მეთოდი რომელსაც გადაეცემა სტრინგი და რომელიც აბრუნებს ამ სტრინგში ყველაზე ხშირ სიმბოლოს.

// const getMostFrequentChar = (str) => {
//     let everyCharCount = [];
//     let currCharCount = 0;
    
//     for (let i  = 0; i < str.length; i++) {
//         for (let j = 0; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 currCharCount++;
//             }
//         }
//         everyCharCount.push(currCharCount);
//     }

//     let indexOfMostFrequentChar = everyCharCount.indexOf(Math.max(...everyCharCount));
//     let mostFrequentChar = str[indexOfMostFrequentChar];
//     console.log('Your text was: ', str);
//     console.log('Most frequent character in that text: ', mostFrequentChar);
// }

// let str = prompt('Enter text: ');
// getMostFrequentChar(str);


// 47. დაწერეთ პრედიკატ მეთოდი რომელსაც გადაეცემა სტრინგი და რომელიც დაადგენს არის თუ არა მოცემული ტექსტი პალინდრომი.

// const getReversedStr = (str) => {
//     let result = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }

// const checkPalindrome = (str, reversedStr) => str === reversedStr ? true : false;

// let str = prompt('Enter word: ');
// let reversedStr = getReversedStr(str);

// if (checkPalindrome(str, reversedStr)) {
//     console.log(`${str} is a palindrome.`)
// } else {
//     console.log(`${str} is not a palindrome.`)
// }


// 48. კონსოლიდან შეგყვავს ტექსტი პროგრამამ უნდა დაბეჭდოს სტატისტიკა რომელი სიმბოლო რამდენჯერ გვხვდება.
