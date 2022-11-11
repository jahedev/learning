const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
var lastCalledTime;
var fps;
var averageFPS = 0;
var counter = 0;
var fpsArray = [];

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener('click', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 10; i++) particlesArray.push(new Particle());
});

canvas.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

class Particle {
  constructor() {
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 15 + 5; // 1 to 6
    this.speedX = Math.random() * 3 - 1.5; // -1.5 to 1.5
    this.speedY = Math.random() * 3 - 1.5; // -1.5 to 1.5
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }

  draw() {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
  }
}
init();

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1);
      i -= 1;
    }
  }
}

function showFPS() {
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText(averageFPS + ' FPS', 10, 30);
}

function calcFPS() {
  if (!lastCalledTime) {
    lastCalledTime = Date.now();
    fps = 0;
  }
  delta = (Date.now() - lastCalledTime) / 1000;
  lastCalledTime = Date.now();
  fps = Math.ceil(1 / delta);

  if (counter >= 60) {
    var sum = fpsArray.reduce(function (a, b) {
      return a + b;
    });
    averageFPS = Math.ceil(sum / fpsArray.length);
    console.log(averageFPS);
    counter = 0;
  } else {
    if (fps !== Infinity) {
      fpsArray.push(fps);
    }

    counter++;
  }
}

function animate() {
  // clear screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  showFPS();

  window.requestAnimationFrame(() => {
    calcFPS();
    animate();
  });
}

animate();
