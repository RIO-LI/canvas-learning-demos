window.addEventListener('DOMContentLoaded', () => {
    const draw = document.querySelector('#draw');
    draw.width = document.documentElement.clientWidth;
    draw.height = document.documentElement.clientHeight;
    const ctx = draw.getContext('2d');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(50, 50, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(75, 75, 50, 50);

    ctx.strokeStyle = 'green';
    ctx.lineWidth = 15; // 设置线的宽度
    ctx.strokeRect(75, 75, 50, 50);


    ctx.fillStyle = 'rgb(140, 150, 80, 0.8)';
    ctx.fillRect(200, 200, 400, 200);
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 2;
    ctx.strokeRect(280, 230, 240, 140);

    // 清空矩形中的一些区域
    ctx.clearRect(300, 250, 200, 100);
})