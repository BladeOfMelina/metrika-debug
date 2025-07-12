const canvas = document.getElementById('fog-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function createParticle() {
  const size = Math.random() * 2 + 1;
  particles.push({
    x: Math.random() * canvas.width,
    y: canvas.height + size,
    r: size,
    speed: 0.3 + Math.random() * 0.6,
    alpha: 0.1 + Math.random() * 0.15
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.y -= p.speed;
    p.alpha -= 0.0003;
    if (p.alpha <= 0) particles.splice(i, 1);
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 240, 200, ${p.alpha})`;
    ctx.fill();
  });

  if (Math.random() < 0.6) createParticle();
  requestAnimationFrame(drawParticles);
}

drawParticles();
