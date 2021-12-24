// 5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.
// Палиндром - это слово, фраза, число или другая последовательность символов, которая читается так же, как вперед и назад, например, «мадам».
function getNextPalindrome(number) {
    if(typeof number !== 'number') {
        return false;
    }

    let startNumber = number + 1;

    if (number < 10) {
        startNumber = 10;
    }

    while (startNumber.toString().split('').reverse().join('') !== startNumber.toString()) {
        startNumber++
    }

    return startNumber;
}
console.log(getNextPalindrome(7) )// returns 11
console.log(getNextPalindrome(99)) //returns 101
console.log(getNextPalindrome(132)) // returns 141
console.log(getNextPalindrome(888) )// returns 898
console.log(getNextPalindrome(999) )// returns 1001

module.exports = { getNextPalindrome };