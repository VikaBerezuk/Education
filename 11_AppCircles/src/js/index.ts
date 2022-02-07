import {Circle} from "./Circle";
import {addListener, animation, windowWH} from "./utils";

let circles:any[] = [];
windowWH('canvas');
addListener('canvas', 'click', (e) => circles.push(new Circle(e.x, e.y)))

export function init():void{
    animation(init);

    circles.forEach((circle, index, circles) => {
        circle.updatePosition(circle, index, circles);
    })
}

init();