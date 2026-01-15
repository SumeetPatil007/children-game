const colors = [
    { name: "RED", value: "red" },
    { name: "BLUE", value: "blue" },
    { name: "GREEN", value: "green" },
    { name: "YELLOW", value: "gold" }
];

let score = 0;
let currentColor = null;

const colorText = document.getElementById("colorText");
const buttonsContainer = document.getElementById("buttonsContainer");
const scoreDisplay = document.getElementById("score");

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    nextRound();
}

function nextRound() {
    buttonsContainer.innerHTML = "";

    currentColor = colors[Math.floor(Math.random() * colors.length)];
    colorText.textContent = currentColor.name;
    colorText.style.color = currentColor.value;

    colors.forEach(color => {
        const btn = document.createElement("button");
        btn.className = "color-btn";
        btn.style.backgroundColor = color.value;
        btn.textContent = color.name;

        btn.onclick = () => checkAnswer(color);
        buttonsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedColor) {
    if (selectedColor.name === currentColor.name) {
        score++;
        scoreDisplay.textContent = score;
    } else {
        alert("Oops! Try again 😊");
    }
    nextRound();
}

function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    colorText.textContent = "Press Start";
    colorText.style.color = "#000";
    buttonsContainer.innerHTML = "";
}
