
Object.defineProperty(CanvasRenderingContext2D.prototype, 'drawRect', {
    value: function (x1, y1, width, height, borderColor = 'black') {
        const w = Number.parseFloat(width);
        const h = Number.parseFloat(height);
        const x2 = x1 + (Number.isNaN(w) ? 0 : w);
        const y2 = y1 + (Number.isNaN(h) ? 0 : h);

        this.beginPath();
        this.moveTo(x1, y1);
        this.lineTo(x1, y2);
        this.lineTo(x2, y2);
        this.lineTo(x2, y1);
        this.closePath();
        this.strokeStyle = borderColor;
        this.stroke();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const $draw = document.querySelector('#draw');
    const $html = document.documentElement;
    const ctx = $draw.getContext('2d');
    $draw.width = $html.clientWidth;
    $draw.height = $html.clientHeight;

    ctx.drawRect(100, 100, 400, 400);
    ctx.drawRect(600, 100, 200, 200, 'red');
});