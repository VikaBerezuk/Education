import {User} from "./interface";
import {ageCheck, balanceCheck, disabledButtonFalse, documentCheck, langCheck, randomTime} from "./index";
import {Circle} from "./Circle";

export function getPromise(people: number, arr: User[], minTime: number, maxTime: number, cb: Function, checkValue: string, textValue: string, circleCounter: number, ctx, canvas) {
    return new Promise<void>(resolve => {
        const circle = new Circle(people, arr.length, circleCounter, textValue, ctx, canvas);
        circle.draw();

        setTimeout(() => {
            if (cb(checkValue)) {
                circle.request();
                resolve();
            } else {
                return circle.rejected();
            }
        }, randomTime(minTime, maxTime))
    })
}

export function startRace(arrUsers: User[], ctx, canvas) {
    const promiseArr: Promise<any>[] = [];

    arrUsers.forEach((_,i) => {
        const candidatePromises = getPromise(i, arrUsers, 5, 10, balanceCheck, arrUsers[i].balance, 'Bal', 1, ctx, canvas)
            .then(() => {
                const agePromise = getPromise(i, arrUsers, 1, 3, ageCheck, arrUsers[i].age, 'Age', 2, ctx, canvas);
                const documentPromise = getPromise(i, arrUsers, 10, 20, documentCheck, arrUsers[i].document, 'Doc', 3, ctx, canvas);
                const langPromise = getPromise(i, arrUsers, 5, 10, langCheck, arrUsers[i].english, 'Eng', 4, ctx, canvas);

                return Promise.all([agePromise, documentPromise, langPromise])
            })
            .then(() => {
                return i;
            })
        promiseArr.push(candidatePromises);
    })

    return promiseRace(promiseArr, arrUsers);
}

function textValue(result: string, text: string) {
    const a = <HTMLElement>document.getElementById(result);
    a.innerText = text;
}

export function promiseRace(promiseArr: Promise<any>[], arr: User[]) {
    const errorPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(400)
        }, 43001)
    })

    Promise.race(promiseArr.concat(errorPromise)).then((value) => {
        disabledButtonFalse('all-generated');
        disabledButtonFalse('add-candidate');
        disabledButtonFalse('start');
        disabledButtonFalse('clear');
        if (value !== 400) {
            textValue('error', `Winner ${arr[value].name}, receives VISA!`)
            return value;
        } else {
            textValue('error', 'The visa center is closed, no one received a visa.')
            return false;
        }
    })
}
