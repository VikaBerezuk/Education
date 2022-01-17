//) Напишите функцию getDays, которая принимает год и месяц, а возвращает
// количество дней в месяце

function getDays(year, month) {
    const monthArr = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];

    if(typeof month  === 'string') {
        for(let i = 1; i <= monthArr.length; i++) {
            if(monthArr[i] === month) {
                return  new Date(year, i, 0).getDate();
            }
        }
    } else if( typeof month  === 'number') {
        return new Date(year, month, 0).getDate();
    } else {
        return false
    }
}

// console.log(getDays( 2021 , 4)) //30
// console.log(getDays( 2020 , 2)) //29
// console.log(getDays( 2021 , 2)) //28
// console.log(getDays( 2021 , 'February')) //28
// console.log(getDays( 2021 , 'October'))//31

module.exports = { getDays };