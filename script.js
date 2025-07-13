const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = 0;
canvas.style.pointerEvents = 'none';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 100 + 20,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.beginPath();
    let gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
    gradient.addColorStop(0, 'rgba(255, 255, 220, 0.03)');
    gradient.addColorStop(1, 'rgba(255, 255, 220, 0)');
    ctx.fillStyle = gradient;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < -p.r) p.x = canvas.width + p.r;
    if (p.x > canvas.width + p.r) p.x = -p.r;
    if (p.y < -p.r) p.y = canvas.height + p.r;
    if (p.y > canvas.height + p.r) p.y = -p.r;
  }

  requestAnimationFrame(draw);
}

draw();
