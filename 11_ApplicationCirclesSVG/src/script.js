const height = 700
const width = 1440
const container = document.getElementById("container")
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const svgNS = svg.namespaceURI;
container.addEventListener("click", e => {
    createCircle(e)
})

const circles = []

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createCircle(event){
    const rad = getRandomNum(10, 50)
    const randomColor = getRandomColor()
    const circle = document.createElementNS(svgNS, "circle")
    circle.setAttribute("cx", event.offsetX)
    circle.setAttribute("cy",  event.offsetY)
    circle.setAttribute("r",rad)
    circle.setAttribute("fill", randomColor)
    container.appendChild(circle)
    circle.speedX = getRandomNum(-5, 25);
    circle.speedY = getRandomNum(-5, 25);
    circle.rad = rad;
    circles.push(circle);
    mover(circle);
    return circles;
}

function mover(el) {
    circles.splice(circles.indexOf(el), 1);

    setInterval(() => {
        if (el.cx.animVal.value > width - el.rad || el.cx.animVal.value - el.rad < 0) {
            el.speedX = -el.speedX;
        }
        if (el.cy.animVal.value > height - el.rad || el.cy.animVal.value - el.rad < 0) {
            el.speedY = -el.speedY;
        }
        let increaseX = el.cx.animVal.value + el.speedX;
        let increaseY = el.cy.animVal.value + el.speedY;
        el.setAttribute("cx", increaseX);
        el.setAttribute("cy", increaseY);

        for (let i = 0; i < circles.length; i++) {
            if (el.cx.animVal.value + el.rad === circles[i].cx.animVal.value + circles[i].rad ||
                el.cy.animVal.value + el.rad === circles[i].cy.animVal.value + circles[i].rad) {
                el.speedX = -el.speedX;
                el.speedY = -el.speedY;
                circles[i].speedX = -circles[i].speedX;
                circles[i].speedY = -circles[i].speedY;
                let increaseX1 = el.cx.animVal.value + el.speedX;
                let increaseY1 = el.cy.animVal.value + el.speedY;
                let increaseX2 = circles[i].cx.animVal.value + circles[i].speedX;
                let increaseY2 = circles[i].cy.animVal.value + circles[i].speedY;
                el.setAttribute("cx", increaseX1);
                el.setAttribute("cy", increaseY1);
                circles[i].setAttribute("cx", increaseX2);
                circles[i].setAttribute("cy", increaseY2);
            }
        }


    }, 100);
    circles.push(el);
}