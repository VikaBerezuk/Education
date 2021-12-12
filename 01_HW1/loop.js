// 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function sumEvenNumbers() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
// 2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function isPrimeNumber  (num) {
    if( isNaN(num) || num < 0 || num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    if(num < 4) {
        return true;
    }
    for(let i = 5; i <= num; i ++) {
        return true;
    }
}
// 3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function  sqrtNumber(n) {
    let number = 0;
    if(n < 0 || typeof n === 'string') {
        return false;
    }
    for(let i = 0; i < n; i++) {
        if(i * i < n) {
            number = n - i * i;
        } else if(i * i === n) {
            return i;
        } else {
            return i;
        }
    }
}
function sqrtNumberBinary (n) {
    let x, x1 = n / 2;
    if(n < 0 || typeof n === 'string') {
        return false;
    }
    do {
        x = x1;
        x1 = (x + (n / x)) / 2;
    } while (x !== x1);
    return parseInt(x);
}
// 4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function factorial(n) {
    let total = 1;
    if(n < 0 || typeof n === 'string'){
        return false;
    }
    for (let i = 0; i < n; i++){
        total = total * (n - i);
    }
    return total;
}
// 5.	Посчитать сумму цифр заданного числа
function getSumNumber(num) {
    let sum = 0, tmp;
    if(typeof num === 'string') {
        return false;
    }
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
    }
    return sum;
}
// 6.	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
function mirrorNumber(n) {
    let b, sum = 0;
    if(n < 0 || typeof  n === 'string') {
        return false;
    }
    while(n > 0)
    {
        b = n % 10;
        sum = sum * 10 + b;
        n = parseInt(n / 10);
    }
    return sum;
}
module.exports = {sumEvenNumbers, isPrimeNumber, sqrtNumber, sqrtNumberBinary, factorial, getSumNumber, mirrorNumber};