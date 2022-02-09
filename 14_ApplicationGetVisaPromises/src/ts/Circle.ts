export class Circle {
    private readonly x: number;
    private readonly y: number;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private value: string;

    constructor(people, length, y, value, ctx, canvas) {
        this.canvas = canvas;
        this.ctx = ctx;

        if (people === 0) {
            this.x = this.canvas.width / length - (this.canvas.width / length) / 2;
        } else {
            this.x = this.canvas.width / length + ((this.canvas.width / length) * people) - (this.canvas.width / length) / 2;
        }

        this.y = y * 65;
        this.value = value;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 25, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'yellow';
        this.ctx.fill();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'yellow';
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.font = '18px';
        this.ctx.fillStyle = 'black'
        this.ctx.textAlign = 'center';
        this.ctx.fillText(this.value.toUpperCase(), this.x, this.y + 5);
        return 'start'
    }

    request() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 25, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'green';
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.fillStyle = 'black'
        this.ctx.textAlign = 'center';
        this.ctx.font = '18px';
        this.ctx.fillText(this.value.toUpperCase(), this.x, this.y + 5);
    }

    rejected() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 25, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'red';
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.fillStyle = 'black'
        this.ctx.textAlign = 'center';
        this.ctx.font = '18px';
        this.ctx.fillText(this.value.toUpperCase(), this.x, this.y + 5);
    }
}