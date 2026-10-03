let i = 1;
const total = 7;

const img = document.getElementById("slide");
const num = document.getElementById("num");

function render() {
img.src = "slides/slide" + i + ".svg";
num.textContent = i + " / " + total;
}

function move(n) {
i = ((i - 1 + n + total) % total) + 1;
render();
}

// Tombol keyboard
document.addEventListener("keydown", e => {
if (e.key === "ArrowRight") move(1);
if (e.key === "ArrowLeft") move(-1);
});

// Swipe di HP
let sx = 0;

document.addEventListener("touchstart", e => {
sx = e.touches[0].clientX;
}, { passive: true });

document.addEventListener("touchend", e => {
const d = e.changedTouches[0].clientX - sx;

if (Math.abs(d) > 60) {
move(d < 0 ? 1 : -1);
}
}, { passive: true });

render();
