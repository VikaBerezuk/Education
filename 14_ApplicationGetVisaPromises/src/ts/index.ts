import '../index.scss';
import {age, arrCandidate, balance, documentVisa, levelEnglish, namePerson} from "./constants";
import {User} from "./interface";
import {addCandidate, generated, generatedAll} from "./generated";
import {
    addListener,
    canvas, disabledButton, getContextCanvas,
    getCreateElTextAppendChild,
    getElementById,
    getInnerText, getNameCanvas
} from "./utils";
import {startRace} from "./promise";

export function showCandidate(arrCandidate: User[]):void {
    arrCandidate.forEach((el, i) => {
        getNameCanvas(el, i);
    })
    getInnerText('generated-person', '');
    if (arrCandidate.length > 0) {
        arrCandidate.forEach(el => {
            getCreateElTextAppendChild('generated-person', 'div', `Name: ${el.name}; balance: ${el.balance}; age: ${el.age}; document: ${el.document}; level English: ${el.english}`)
        })
    } else {
        getInnerText('error', 'Get the data for the candidate!')
    }
}

export function start(arrCandidate: User[]):void {
    const canvasId = <HTMLCanvasElement>getElementById('canvas');
    const ctx = getContextCanvas();

    disabledButton('all-generated', true);
    disabledButton('add-candidate', true);
    disabledButton('start', true);
    disabledButton('clear', true);

    startRace(arrCandidate, ctx, canvasId);
}

export function balanceCheck(balance):boolean{
    return balance >= 2000;
}

export function ageCheck(age):boolean{
    return age >= 18 && age <= 60;
}

export function documentCheck(document) {
    return document === 'password, insurance, photo';
}

export function langCheck(eng):boolean {
    return eng === 'B1' || eng === 'B2' || eng === 'C1';
}

export function clear():void {
    arrCandidate.length = 0;
    getInnerText('error', 'Get the data for the candidate!');
    getInnerText('generated-person', '');
    canvas(0,0);
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
    addListener('start', 'click', start.bind(null, arrCandidate));
})();

addListener('clear', 'click', clear.bind(null));
