let score = 0;

const scoreElement = document.getElementById('score');
const button = document.getElementById('clickButton');

button.addEventListener('click', () => {
    score += 1;
    scoreElement.textContent = score;
});
