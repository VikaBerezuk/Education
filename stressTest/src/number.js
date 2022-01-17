//Через прототип расширьте встроенный объект Number методом isOdd(), который
// возвращает true, если число нечетное.

Number.prototype.isOdd = function() {
    if(this.valueOf() % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

// const n = 55;
// const x = 2;
// console.log(x.isOdd())// false
// console.log(n.isOdd())// true

module.exports = { Number };
