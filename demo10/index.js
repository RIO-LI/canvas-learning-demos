document.addEventListener('DOMContentLoaded', () => {
    const $draw = document.querySelector('#draw');
    const ctx = $draw.getContext('2d');
    const $html = document.documentElement;
    $draw.width = $html.clientWidth;
    $draw.height = $html.clientHeight;

    ctx.save();

    // 对角渐变
    const gradient = ctx.createLinearGradient(0, 0, 400, 400);
    gradient.addColorStop(0.0, 'blue');
    gradient.addColorStop(1.0, 'black');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);
    ctx.restore();

    // 垂直渐变
    const gradient2 = ctx.createLinearGradient(0, 450, 0, 850);
    gradient2.addColorStop(0.0, 'blue');
    gradient2.addColorStop(1.0, 'black');
    ctx.fillStyle = gradient2;
    ctx.fillRect(0, 450, 400, 400);
    ctx.restore();


    // 水平渐变
    const gradient3 = ctx.createLinearGradient(450, 0, 850, 0);
    gradient3.addColorStop(0.0, 'blue');
    gradient3.addColorStop(1.0, 'black');
    ctx.fillStyle = gradient3;
    ctx.fillRect(450, 450, 400, 400);
    ctx.restore();
});