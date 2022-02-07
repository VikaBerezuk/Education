import {paint} from "./index";

export let state:any[] = [];

export function addListener(id:string, eventType:string, callback:() => any) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
        return true;
    }
    return false;
}

export function api():Promise<any> {
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

export function getElementAppendChild(id:string, value:any) {
    const node = document.getElementById(id);
    if(node) {
       return  node.appendChild(value);
    }
    return false;
}

export function createElement(el:any, src:string, alt:string, className:string, id:string, title:string) {
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

export function showDisplay(id:string, display:string) {
    const node = document.getElementById(id);
    if(node) {
        node.style.display = display;
    }
    return false;
}

export function querySelectorAll(value:string) {
    const node = document.querySelectorAll(value);
    if (node) {
        return node;
    }
    return false;
}