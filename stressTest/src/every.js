// 3) Написать функцию every, которая будет принимать первым аргументом массив, а
// вторым функцию колбэк(которая будет принимать каждый элемент массива и
// возвращать true либо false). Результатом функции должно быть логическое
// выражение true/false в зависимости от того, выполняется ли условие для каждого
// из элементов.
// Example:
// every([8, 2, 4], function (num){
// return num%2===0
// }) // true

function num(array) {
    let result;
    array.forEach(el => {
        result = el % 2 === 0;
    })

    return result;
}

function every(array, func) {
    return func(array);
}

// console.log(every([8, 2, 4], num));//true
// console.log(every([1, 5, 7], num));//false

module.exports = { every, num };