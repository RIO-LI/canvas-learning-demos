window.addEventListener('DOMContentLoaded', () => {
    const $draw = document.getElementById('draw');
    $draw.width = document.documentElement.clientWidth;
    $draw.height = document.documentElement.clientHeight;
    const ctx = $draw.getContext('2d');
    // 绘制一个填充颜色的直角三角形
    ctx.beginPath();
    ctx.moveTo(100, 40);
    ctx.lineTo(100, 100);
    ctx.lineTo(180, 100);
    ctx.fillStyle = 'red';
    ctx.fill();

    // 绘制一个描边的直角三角形
    ctx.beginPath();
    ctx.moveTo(400, 100);
    ctx.lineTo(400, 600);
    ctx.lineTo(600, 600);
    ctx.closePath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 4;
    ctx.stroke();
});