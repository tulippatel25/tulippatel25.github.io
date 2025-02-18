const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const panda = document.getElementById('panda');
let clickCount = 0;

rightButton.addEventListener('click', function () {
    if (clickCount < 10) {
        clickCount++;
        const scaleFactor = 1 + clickCount * 0.1;
        panda.style.transform = `scale(${scaleFactor})`;
    }
});

leftButton.addEventListener('click', function () {
    window.location.href = 'newPage.html';
});