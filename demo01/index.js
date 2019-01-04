window.addEventListener('DOMContentLoaded', () => {
    const draw = document.querySelector('#draw');
    draw.width = document.documentElement.clientWidth;
    draw.height = document.documentElement.clientHeight;
    const ctx = draw.getContext('2d');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(50, 50, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(75, 75, 50, 50);
})