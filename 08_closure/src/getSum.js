//2. Напишите функцию, которая получает два бесконечных числа в
// виде строк. Вы должны вернуть результат суммы этих двух чисел
// в виде строки. Математическая работа с этими двумя числами
// недоступна. Не используйте BigInt.
// getSum(‘123’, ‘324’) -> ‘447’
// getSum(‘111111111111111111111111111111111111111111111111111’,
// ’23333333333333333333333333333333333333333333333333’)
// -> ‘3444444.......4444444‘

function getSum(num1, num2) {
    if(typeof num1 !== 'string' && typeof num2 !== 'string' ) {
        return false;
    }

    const sumArr = num1.split('');
    const sumArr2= num2.split('');

    const newArr = sumArr.map(Number);
    const  newArr2 = sumArr2.map(Number);

    const sum =  newArr2.map(function (num, ind) {
        return num + newArr[ind];
    });
    let x = sum.join('')
    return x;
}
console.log(getSum('123', '324')) // 447
console.log(getSum('1111111111111111111111111111111111111111111111111',
    '2333333333333333333333333333333333333333333333333')) //‘3444444.......4444444‘

module.exports = { getSum };

//TODO: delete BigInt