const canvas = document.getElementById('canvas_one');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles_array = [];
let hue = 0;

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse_click = {
  x: undefined,
  y: undefined,
}

canvas.addEventListener('click', function (event) {
  mouse_click.x = event.x;
  mouse_click.y = event.y;
  // particles_array.push(new Particle()); // creates one particle per click
  // to create more than one particle per click:
  for (let i = 0; i < 10; i++) {
    particles_array.push(new Particle());
  }
});

canvas.addEventListener('mousemove', function (event) {
  mouse_click.x = event.x;
  mouse_click.y = event.y;
  for (let i = 0; i < 5; i++) {
    particles_array.push(new Particle());
  }
});


class Particle {
  constructor() {
    this.x = mouse_click.x;
    this.y = mouse_click.y;
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    // assign color to particle as they are created and remember that color
    this.color = 'hsl(' + hue + ', 100%, 50%)';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    // make the particles shrink in size as they move around
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color; // hue saturation lightness
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// comment out because we are going to creat particles with our mouse now
/**
 * function __init__() {
 *   for (let i = 0; i < 100; i++) {
 *     particles_array.push(new Particle());
 *   }
 * }
 */

function handle_particles () {
  for (let i = 0; i < particles_array.length; i++) {
    particles_array[i].update();
    particles_array[i].draw();
    // pythagorean theorem to draw a line between particles that are close to each other
    for (let j = i; j < particles_array.length; j++) {
      const dx = particles_array[i].x - particles_array[j].x;
      const dy = particles_array[i].y - particles_array[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = particles_array[i].color;
        ctx.lineWidth = 0.2;
        ctx.moveTo(particles_array[i].x, particles_array[i].y);
        ctx.lineTo(particles_array[j].x, particles_array[j].y);
        ctx.stroke(); // to draw the line on canvas
      }
    }
    // remove particles that reach 0 size
    if (particles_array[i].size <= 0.3) {
      particles_array.splice(i, 1);
      console.log(particles_array.length);
      i--;
    }
  }
}

function animate() {
  // commenting the below will allow for trails
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // covers what left behind
  //ctx.fillStyle = "rgba(0,0,0,0.02)";
  //ctx.fillRect(0, 0, canvas.width, canvas.height);
  handle_particles();
  hue+=2;
  requestAnimationFrame(animate);
}

animate();