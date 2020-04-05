export class Ball {

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.arc(400, 200, 4, 0, 2 * Math.PI);
        ctx.strokeStyle = '#003300';
        ctx.stroke();
    }

}
