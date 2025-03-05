document.getElementById("reveal-btn").addEventListener("click", function() {
    document.getElementById("mystery").classList.add("hidden");
    document.getElementById("birthday").classList.remove("hidden");
    startConfetti();
    startFireworks();
    launchBalloons();
});

/* Confetti Effect */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 2,
            dx: Math.random() * 2 - 1,
            dy: Math.random() * 2 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
    });
}

function updateConfetti() {
    confetti.forEach(c => {
        c.x += c.dx;
        c.y += c.dy;
        if (c.y > canvas.height) c.y = 0;
    });
}

function startConfetti() {
    createConfetti();
    setInterval(() => {
        drawConfetti();
        updateConfetti();
    }, 30);
}

/* Fireworks Effect */
function startFireworks() {
    let fireworksContainer = document.getElementById("fireworks");
    for (let i = 0; i < 5; i++) {
        let firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = Math.random() * 100 + "vw";
        firework.style.animation = "explode 1s ease-in-out";
        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            fireworksContainer.removeChild(firework);
        }, 1000);
    }
}

/* Launch Floating Balloons */
function launchBalloons() {
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(balloon);

        setTimeout(() => {
            document.body.removeChild(balloon);
        }, 6000);
    }
}

/* Get Random Colors */
function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 70%)`;
}
