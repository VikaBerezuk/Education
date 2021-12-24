// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.
function getNumber (array) {
    let odd = [];
    let even = [];

    if(typeof array !== 'object' || array === null) {
        return false;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even.push(array[i]);
        } else {
            odd.push(array[i]);
        }
    }

    if(odd.length > even.length) {
        return even[0];
    } else {
        return odd[0];
    }
}

module.exports = { getNumber };