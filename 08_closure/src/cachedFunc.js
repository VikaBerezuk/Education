//4.Напишите функцию кеш
function complexFunction(arg1, arg2) {
    return arg1 + arg2;
}

function cache(func) {
    let cacheObj = {};

    return function () {
        let key = [].slice.call(arguments).join('');
        if (cacheObj[key]) {
            const result = `will not be executed: ${cacheObj[key]}`;
            delete cacheObj[key];
            return result;
        } else {
            cacheObj[key] = func.apply(this, arguments)
            return `will be fulfilled: ${cacheObj[key]}`
        }
    }
}

let cachedFunc = cache(complexFunction);
console.log(cachedFunc('foo', 'baz'))
console.log(cachedFunc('foo', 'bar')) // complexFunction должна выполнится
console.log(cachedFunc('foo', 'baz'))
console.log(cachedFunc('foo', 'bar')) // complexFunction не должна выполняться
console.log(cachedFunc('foo', 'bar'))
console.log(cachedFunc('foo', 'bar'))
console.log(cachedFunc('foo', 'bar'))
// снова,должен вернуться кеш
console.log(cachedFunc('foo', 'baz'))// complexFunction должна выполнится
//потому что метод не вызывался раньше с этими аргументами

module.exports = { cache };