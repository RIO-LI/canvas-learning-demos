document.addEventListener('DOMContentLoaded', () => {
    const $docEl = document.documentElement;
    const $draw = document.querySelector('#draw');
    const ctx = $draw.getContext('2d');
    $draw.width = 400;
    $draw.height = 400;
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 300);
    ctx.lineTo(300, 300);
    ctx.lineTo(100, 100);
    ctx.stroke();
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    // 将位图转成base64资源地址赋值给img图片标签,质量设置为60%
    const $img = new Image();

    $img.src = $draw.toDataURL('image/png', 0.6);
    $draw.after($img);
});