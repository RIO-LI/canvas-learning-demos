document.addEventListener('DOMContentLoaded', () => {
    const $draw = document.querySelector('#draw');
    const ctx = $draw.getContext('2d');
    window.ctx = ctx;
    $draw.width = document.documentElement.clientWidth;
    $draw.height = document.documentElement.clientHeight;
    const origin = {
        x: $draw.width / 2,
        y: $draw.height / 2
    };
    const radius = 100;


    const data = [150, 13, 59, 200, 78];
    const total = data.reduce((prev, curr) => prev + curr, 0);
    const colors = [
        'rgb(255, 113, 94)',
        'rgb(89, 196, 230)',
        'rgb(237, 175, 218)',
        'rgb(147, 183, 227)',
        'rgb(0, 24, 82)'
    ];

    // 绘制饼图
    data.reduce((prevRadian, itemData, index) => {
        const percent = itemData / total;
        const angle = 360 * percent;
        const offsetRadian = angle * (Math.PI / 180);
        const currRadian = prevRadian + offsetRadian;
        ctx.beginPath();
        ctx.moveTo(origin.x, origin.y);
        ctx.arc(origin.x, origin.y, radius, prevRadian, currRadian);
        ctx.lineTo(origin.x, origin.y);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.fillStyle = colors[index];
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        return currRadian;
    }, 0);

    // 绘制饼图百分比
    data.reduce((prevAngle, itemData, index) => {
        const percent = itemData / total;
        const angle = 360 * percent;
        const currAngle = prevAngle + angle;
        const currTextAngle = prevAngle + (angle / 2);
        let paddingX = 20 / 3;
        let paddingY = 20 / 3;
        const distance = 30;
        const x = origin.x + (radius + distance) * Math.cos(currTextAngle * Math.PI / 180); //文字 x 坐标
        const y = origin.y + (radius + distance) * Math.sin(currTextAngle * Math.PI / 180); //文字 y 坐标
        ctx.textAlign = 'left';
        if (currTextAngle < 270 && currTextAngle > 90) {
            ctx.textAlign = 'right';
            paddingX = - 20 / 3;
        }
        if (currTextAngle > 180 & currTextAngle < 360) {
            paddingY = - 20 / 3;
        }
        ctx.moveTo(origin.x, origin.y);
        ctx.fillStyle = colors[index];
        ctx.fillText(`${(percent * 100).toFixed(2)}%`, x + paddingX, y + paddingX);
        return currAngle;
    }, 0);
});