document.addEventListener('DOMContentLoaded', () => {
    const $draw = document.querySelector('#draw');
    const ctx = $draw.getContext('2d');
    $draw.width = 500;
    $draw.height = 300;

    const img = document.createElement('img');
    img.onload = () => {
        const scale = 300 / 500;
        const sx = 0;
        const sy = (853 - 300) / 2;
        const sw = 1278;
        const sh = sw * scale;
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, 500, 300);
    };
    // 1278 * 853
    img.src = '../img01.jpg';
});