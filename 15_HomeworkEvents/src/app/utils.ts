import {paint} from "./index";

export let state = [];

export function addListener(id, eventType, callback) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
        return true;
    }
    return false;
}

export function api() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        }).then(data => {
            const arr = Object.values(data)
            state = arr.slice(10, 30)
            paint(state);
        })
}

export function getElementAppendChild(id, value) {
    const node = document.getElementById(id);
    if(node) {
       return  node.appendChild(value);
    }
    return false;
}

export function createElement(el, src, alt, className, id, title) {
    const node = document.createElement(el);
    if(node) {
        node.src = src;
        node.alt = alt;
        node.className = className;
        node.id = id;
        node.title = title;
        return  node;
    }
    return false;
}

export function showDisplay(id, display) {
    const node = document.getElementById(id);
    if(node) {
        node.style.display = display;
    }
    return false;
}

export function querySelectorAll(value) {
    const node = document.querySelectorAll(value);
    if (node) {
        return node;
    }
    return false;
}