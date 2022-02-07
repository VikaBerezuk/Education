import './index.scss';
import {addListener, api, createElement, getElementAppendChild, querySelectorAll, showDisplay, state} from "./utils";

let interval:any;

export function paint(data:any[]):void {
    const imgMain = createElement('img', data[0].url, "photo", 'main__img', '', '');
    getElementAppendChild('gallery-main', imgMain)

    data.forEach(el => {
        const img = createElement('img', `${el.thumbnailUrl}`, "photo", '', `${el.id}`, `${el.title}`);
        getElementAppendChild('gallery-additional', img);
        addListener(`${el.id}`, 'click', () => {
            imgMain.src = `${el.url}`;
        });
    });
}

export function showAllImg(data:any[]):void {
    showDisplay('carousel', 'block');

    const img = createElement('img', data[0].url, 'photo', 'demonstration', '11', '')
    getElementAppendChild('carousel', img);

    let currentIndex = 1;
    interval = setInterval(function () {
        img.src = data[currentIndex].url;
        currentIndex++;
        if (currentIndex >= data.length) {
            currentIndex = 0;
        }
    }, 2000);

    showDisplay('closed', 'block');
    showDisplay('show-all', 'none');
}

export function closed():void {
    showDisplay('show-all', 'block');
    showDisplay('closed', 'none');
    showDisplay('carousel', 'none');

    const img = querySelectorAll('img');

    if (typeof img !== "boolean") {
        img.forEach(el => {
            if (el.className === 'demonstration') {
                el.classList.remove('demonstration');
                console.log(img);
            }
        })
    }

    clearInterval(interval);
}

addListener('closed', 'click', closed);
addListener('show-all', 'click', () => showAllImg(state));

api();