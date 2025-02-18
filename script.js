const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

rightButton.addEventListener('click', function () {
  leftButton.style.transform = 'scale(1.5)';
});

leftButton.addEventListener('click', function () {
  window.location.href = 'newPage.html';
});