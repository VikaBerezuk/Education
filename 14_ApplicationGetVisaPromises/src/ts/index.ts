import '../index.scss';
import {age, arrCandidate, balance, canvasSize, documentVisa, levelEnglish, namePerson} from "./constants";
import {User} from "./interface";
import {addCandidate, generated, generatedAll} from "./generated";
import {addListener} from "./utils";

function showCandidate(arrCandidate: User[]):void {
    const person = <HTMLElement>document.getElementById('generated-person');
    person.innerText = '';

    if (arrCandidate.length > 0) {
        arrCandidate.forEach(el => {
            const personList = document.createElement('div');
            personList.innerText = `Name: ${el.name}; balance: ${el.balance}; age: ${el.age}; document: ${el.document}; level English: ${el.english}`;
            person.appendChild(personList);
        })
    } else {
        const error = <HTMLElement>document.getElementById('error');
        error.innerText = 'Выведите данные для кандидата!';
    }
}

function start(arrCandidate: User[]):void {
    const timeName = [0, 1];
    if (arrCandidate.length >= 1) {

        // const namePromise = (arrCandidate:User[]) => (res, rej) => {
        //     console.log(arrCandidate)
        //     // arrCandidate.map(el => {
        //     //     console.log(el.name)
        //     //     setTimeout(res, timeName[Math.round(Math.random())], el.name);
        //     // })
        // }
        // function namePromise(arr:User[]) {
        //     const p =  arr.map(el => {
        //         new Promise((resolve, reject) => {
        //             console.log(el)
        //             setTimeout(resolve, timeName[Math.round(Math.random())], el.name);
        //         })
        //     })
        //     return p;
        // }

        // const nameBalance = (arrCandidate:User) => (res, rej) => {
        //     arrCandidate.map(el => {
        //         console.log(el.balance)
        //         setTimeout(res, timeName[Math.round(Math.random())], el.balance);
        //     })
        // }


        // const promiseAll = (arrCandidate: User[]) => {
        //     return arrCandidate.map(el => {
        //         Promise.all([namePromise(el), nameBalance(el.balance)])
        //         console.log(el)
        //     })
        // }
        // promiseAll(arrCandidate)

        // Promise.race(promiseAll).then((value => {
        //     console.log(value)
        // })).catch(err => {
        //         console.log("catch error,results", err);
        //     })
        // console.log(namePromise(arrCandidate))

        // arrCandidate.forEach((el) => {
        //     const arrEl = Object.values(el);
        //     arrEl.forEach(item => {
        //         if (item === balance) {
        //             result.push(getPromise(timeName, item));
        //         }
        //     });
        //     arrEl.forEach(item => {
        //         if (item !== balance) {
        //             result.push(getPromise(timeName, item));
        //         }
        //     });
        // });

        // function getPromise(time, el) {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(resolve, time[Math.round(Math.random())], el);
        //     })
        // }

        // const allPromise = arrCandidate.map(el => Promise.all(result).then(values => {
        //     console.log(values);
        //     return values;
        // }))

        // Promise.race(allPromise).then((value) => {
        //     console.log(value)
        //     const error = document.getElementById('error');
        //     error.innerText = 'Проверка денежного баланса в Бухгалтерии.';
        // }).catch(err => {
        //     console.log("catch error,results", err);
        // })
    }
}

function draw(arrCandidate: User[]):void {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    if (arrCandidate.length !== 0) {
        arrCandidate.forEach((el, i) => {
            if (el) {
                const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
                ctx.strokeStyle = 'red';
                ctx.arc(canvasSize[i].x, canvasSize[i].y, 25, 0, Math.PI * 2);
                ctx.stroke();
            }
        });
    } else {
        const error = <HTMLElement>document.getElementById('error');
        error.innerText = 'Выведите данные для кандидата!';
    }
}

function clear():void {
    arrCandidate.length = 0;
    const error = <HTMLElement>document.getElementById('error');
    error.innerText = 'Выведите данные для кандидата!';
    const person = <HTMLElement>document.getElementById('generated-person');
    person.innerText = '';

    const canvas = <HTMLCanvasElement>document.getElementById('canvas')
    const context = <CanvasRenderingContext2D>canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

(function init():void {
    addListener('name-generated', 'click', generated.bind(null, 'name', namePerson));
    addListener('balance-generated', 'click', generated.bind(null, 'balance', balance));
    addListener('age-generated', 'click', generated.bind(null, 'age', age));
    addListener('document-generated', 'click', generated.bind(null, 'myDocument', documentVisa));
    addListener('levelEnglish-generated', 'click', generated.bind(null, 'levelEnglish', levelEnglish));
    addListener('all-generated', 'click', generatedAll.bind(null, arrCandidate));
    addListener('add-candidate', 'click', addCandidate.bind(null, arrCandidate, 'name', 'balance', 'age', 'myDocument', 'levelEnglish'));
    addListener('show-candidate', 'click', showCandidate.bind(null, arrCandidate));

    addListener('start', 'click', () => {
        start(arrCandidate);
        draw(arrCandidate);
    });
})();

addListener('clear', 'click', clear.bind(null));
