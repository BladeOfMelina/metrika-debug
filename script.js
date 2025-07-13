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
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 150 + 50,
    dx: (Math.random() - 0.5) * 0.2,
    dy: (Math.random() - 0.5) * 0.2,
    alpha: 0.02
  });
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  if (particles.length < 20) createParticle();
  particles.forEach((p, i) => {
    ctx.beginPath();
    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
    grad.addColorStop(0, `rgba(255,245,200,${p.alpha})`);
    grad.addColorStop(1, 'rgba(255,245,200,0)');
    ctx.fillStyle = grad;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < -p.r) p.x = canvas.width + p.r;
    if (p.x > canvas.width + p.r) p.x = -p.r;
    if (p.y < -p.r) p.y = canvas.height + p.r;
    if (p.y > canvas.height + p.r) p.y = -p.r;
  });
  requestAnimationFrame(draw);
}

draw();
