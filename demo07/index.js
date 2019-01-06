document.addEventListener('DOMContentLoaded', () => {
    const $draw = document.querySelector('#draw');
    const ctx = $draw.getContext('2d');
    const $html = document.documentElement;
    $draw.width = $html.clientWidth;
    $draw.height = $html.clientHeight;

    ctx.lineWidth = 20;

    // 用stroke来封闭图形，在线宽度够大时，会看到闭合处有缺口
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 400);
    ctx.lineTo(300, 400);
    ctx.lineTo(100, 100);
    ctx.stroke();
    ctx.fillText('闭合处有缺口', 150, 300);

    //绘制两条线，然后调用closePath()来封闭图形，最后stroke()把线渲染出来，
    // 可以发现图形是完美闭合的，不存在缺口
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(600, 100);
    ctx.lineTo(600, 400);
    ctx.lineTo(900, 400);
    ctx.closePath();
    ctx.stroke();
    ctx.fillText('完美闭合', 700, 300);
});