document.addEventListener('DOMContentLoaded', () => {
    const $draw = document.querySelector('#draw');
    const ctx = $draw.getContext('2d');
    const $html = document.documentElement;
    $draw.width = $html.clientWidth;
    $draw.height = $html.clientHeight;

    ctx.lineWidth = 5;
    ctx.fillStyle = 'red';
    ctx.save();

    // 将绘制参考坐标点移动至(400, 200)
    ctx.translate(400, 200);
    // 将其旋转 45度
    ctx.rotate(45 * (Math.PI / 180));
    // 填充色修改为蓝色
    ctx.fillStyle = 'blue';
    // 将基于偏移后的参考坐标，进行移动，点为(500, 300)
    ctx.fillRect(100, 100, 100, 100);

    // 回滚状态
    ctx.restore();
    // 绘制一个基于（0，0）原点做偏移的矩形，填充色为红色
    ctx.fillRect(100, 100, 100, 100);

});