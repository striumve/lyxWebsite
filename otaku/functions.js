// 页面切换
let pageBtns = document.querySelectorAll('.nav-btn');
let curPage = 1;

function changePage(from, to) {
    document.querySelector(`[data-btn="${from}"]`).classList.remove('active');
    document.querySelector(`[data-btn="${to}"]`).classList.add('active');

    document.querySelector(`[data-page="${from}"]`).style.animation = 'hide .3s linear both';
    for (let i = 1; i <= 5; i++) {
        document.querySelector(`[data-page="${i}"]`).style.visibility = 'hidden';
        document.querySelector(`[data-page="${i}"]`).style.opacity = '0';
    }
    document.querySelector(`[data-page="${to}"]`).style.animation = 'show .6s linear both';
}

document.querySelector(`[data-page="1"]`).style.visibility = 'visible';
document.querySelector(`[data-page="1"]`).style.opacity = '1';

pageBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        changePage(curPage, this.dataset.btn);
        curPage = this.dataset.btn;
        // console.log(this.dataset.btn, curPage);
    })
})

// page2 视差效果
if (window.matchMedia('(pointer: fine)').matches) {

    document.addEventListener('mousemove', (e) => {
        // 鼠标位置归一化到 [-1, 1] 范围
        const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        const mouseY = (e.clientY / window.innerHeight) * 2 - 1;

        // 背景层：移动慢（速度系数 0.02）
        const bgX = mouseX * 10;
        const bgY = mouseY * 10;
        document.querySelector('.bg').style.transform = `translate(${bgX}px, ${bgY}px)`;

        // 人物立绘：移动快（速度系数 0.05），更有“上层感”
        const charX = mouseX * 60;
        const charY = mouseY * 30;
        document.querySelector('.oshi-page-1-img').style.transform = `translate(${charX}px, ${charY}px)`;
    });
}