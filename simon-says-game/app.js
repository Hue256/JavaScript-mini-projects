let gameSeq = [];
let userSeq = [];
let btns = ["one", "two", "three", "four"];

let started = false;
let level = 0;
let highScore = localStorage.getItem("highScore") || 0;

const statusDisplay = document.getElementById("status");
const message = document.getElementById("message");

document.addEventListener("keydown", function() {
    if (!started) {
        started = true;
        message.classList.add("hidden");  
        statusDisplay.classList.remove("hidden");   
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
}

function levelUp() {
    userSeq = [];
    level++;
    updateStatus();

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function check(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        let score = level - 1;
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
        }

        statusDisplay.innerText = `Your score: ${score} | High Score: ${highScore}`;

        message.innerText = "Game Over! Press any key to restart";
        message.classList.remove("hidden");

        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length - 1);
}

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", btnPress);
});

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function updateStatus() {
    statusDisplay.innerText = `Level: ${level} | High Score: ${highScore}`;
}