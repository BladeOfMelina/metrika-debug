const canvas = document.getElementById('fog-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createParticle() {
  particles.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 10,
    r: 1 + Math.random() * 2,
    speed: 0.3 + Math.random() * 0.6,
    alpha: 0.1 + Math.random() * 0.15
  });
}

function drawFog() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.y -= p.speed;
    p.alpha -= 0.0004;
    if (p.alpha <= 0) particles.splice(i, 1);
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(235, 220, 190, ${p.alpha})`;
    ctx.fill();
  });
  if (Math.random() < 0.6) createParticle();
  requestAnimationFrame(drawFog);
}
drawFog();
