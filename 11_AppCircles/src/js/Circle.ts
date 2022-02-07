import {CTX} from "./constants";
import {isCollided, resolveCollision} from "./collision";
import {getRandomArbitrary, getRandomInt} from "./getRandom";

export class Circle {
    color:string = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
    radius:number = getRandomArbitrary(10, 50);
    mass:number = (Math.sqrt(this.radius) * Math.PI) * 0.01;
    xSpeed:number = getRandomArbitrary(-2.5, 2.5);
    ySpeed:number = getRandomArbitrary(-2.5, 2.5);
    private x: number;
    private y: number;
    private drawCircle: () => void;
    private velocity: { x: number; y: number };

    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
        this.velocity = {
            x: this.xSpeed,
            y: this.ySpeed
        }

        this.drawCircle = function(){
            CTX.beginPath();
            CTX.fillStyle = this.color;
            CTX.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            CTX.fill();
            CTX.stroke();
        }
    }

    updatePosition(circle:any, index:number, circles:any[]){
        const {x, y, radius} = circle;

        if (x >= (innerWidth - radius) || x <= (0 + radius)) {
            circle.velocity.x *= -1;
        }
        circle.x += circle.velocity.x;
        if (y >= (innerHeight - radius) || y <= (0 + radius)) {
            circle.velocity.y *= -1;
        }
        circle.y += circle.velocity.y;

        const self = circle;
        for (let i = 0; i < circles.length; i++) {
            if (index === i) continue;
            const someCircle = circles[i];
            if (isCollided(self, someCircle)) {
                resolveCollision(self, someCircle);
            }
        }
        circle.drawCircle();
    }
}
