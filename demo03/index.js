document.addEventListener('DOMContentLoaded', () => {
    const $draw = document.querySelector('#draw');
    $draw.width = document.documentElement.clientWidth;
    $draw.height = document.documentElement.clientHeight;
    const ctx = $draw.getContext('2d');
    console.log(ctx);
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.arc(100, 100, 100, Math.PI / 4, Math.PI * (3 / 4));
    ctx.lineTo(100, 100);
    ctx.stroke();
    ctx.closePath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 500);
    ctx.fillText('Hello', 90, 150);
    ctx.stroke();
});