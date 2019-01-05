document.addEventListener('DOMContentLoaded', () => {
    const $download = document.querySelector('#download');
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

    // 点击下载
    $download.addEventListener('click', () => {
        $draw.toBlob((blob) => {
            let $link = document.createElement('a');
            $img.onload = () => {
                // 释放资源
                URL.revokeObjectURL(blob);
            };
            $link.href = URL.createObjectURL(blob);
            $link.download = 'canvas转的图片.png'
            $link.click();
            $link = null;
        });
    });

    // 将位图转成base64资源地址赋值给img图片标签,质量设置为60%
    const $img = new Image();
    $img.src = $draw.toDataURL('image/png', 0.6);
    $draw.after($img);
});