const ctx = document.createElement('canvas');
document.body.appendChild(ctx);
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
ctx.style.position = 'fixed';
ctx.style.top = ctx.style.left = 0;
ctx.style.pointerEvents = 'none';
ctx.style.zIndex = 0;

const cx = ctx.getContext('2d');
let particles = [];
function create() {
  particles.push({
    x: Math.random()*ctx.width,
    y: ctx.height + 10,
    r: 1 + Math.random()*2,
    speed: 0.3 + Math.random()*0.7,
    alpha: 0.1 + Math.random()*0.2
  });
}
function draw() {
  cx.clearRect(0,0,ctx.width,ctx.height);
  particles.forEach((p,i)=>{
    p.y -= p.speed;
    p.alpha -= 0.0001;
    if(p.alpha <= 0) particles.splice(i,1);
    cx.beginPath();
    cx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    cx.fillStyle = `rgba(233,221,187,${p.alpha})`;
    cx.fill();
  });
  if(Math.random()<0.5) create();
  requestAnimationFrame(draw);
}
draw();
