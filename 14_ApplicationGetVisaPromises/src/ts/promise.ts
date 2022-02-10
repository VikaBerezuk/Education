import {User} from "./interface";
import {ageCheck, balanceCheck, documentCheck, langCheck} from "./index";
import {disabledButton, getInnerText, getPromise} from "./utils";

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

export function promiseRace(promiseArr: Promise<any>[], arr: User[]) {
    const errorPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(400)
        }, 43001)
    })

    Promise.race(promiseArr.concat(errorPromise)).then((value) => {
        disabledButton('all-generated', false);
        disabledButton('add-candidate', false);
        disabledButton('start', false);
        disabledButton('clear', false);
        if (value !== 400) {
            getInnerText('error', `Winner ${arr[value].name}, receives VISA!`)
            return value;
        } else {
            getInnerText('error', 'The visa center is closed, no one received a visa.')
            return false;
        }
    })
}
