const canvas = document.getElementById('canvas_one');
const ctx = canvas.getContext('2d');
// makes the canvas not be distorted by resizing the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles_array = []; // will hold all the particles created by the __init__ for loop

// resizes the canvas again if user changed window size
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // draw again on resize:
  //ctx.fillStyle = 'blue';
  //ctx.beginPath();
  //ctx.arc(100, 100, 50, 0, Math.PI * 2);
  //ctx.fill();
});

// draw a circle on mouse click
const mouse_click = {
  x: undefined, // null will draw a circle still at 0, 0 so use undefined
  y: undefined,
}

canvas.addEventListener('click', function (event) {
  mouse_click.x = event.x;
  mouse_click.y = event.y;
});

// get triggered every time the mouse moves on the canvas
// a paint brush in basic sense of the event trigger
canvas.addEventListener('mousemove', function (event) {
  mouse_click.x = event.x;
  mouse_click.y = event.y;
});

/** this is being done now in the --> Particle.draw() method
 * function draw_circle() {
 *   ctx.fillStyle = 'blue';
 *   ctx.beginPath();
 *   ctx.arc(mouse_click.x, mouse_click.y, 50, 0, Math.PI * 2);
 *   ctx.fill();
 * }
 */

// particle simulator class for our circle
class Particle {
  // will create a new blank particle object and assign it properties and random values(lines 47 - 53)
  constructor() {
    //this.x = mouse_click.x;
    //this.y = mouse_click.y;
    this.x = Math.random() * canvas.width; // random number 0 --> window width
    this.y = Math.random() * canvas.height; // random number 0 --> window height
    this.size = Math.random() * 5 + 1; // makes the size random to 6
    this.speedX = Math.random() *3 - 1.5; // direction and speed on x
    this.speedY = Math.random() *3 - 1.5; // direction and speed on y
  }
  // all particles have access to update() and draw()
  // update method to change x and y coordinates
  update() {
    this.x += this.speedX; // pos # particles move to the right, neg # particles move to the left
    this.y += this.speedY; // 2D vector on canvas
  }
  // takes in the draw variables and represents that particle
  draw() {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
    ctx.fill();
  }
}

function __init__() {
  for (let i = 0; i < 100; i++) {  //loops to create 100 blue circles
    particles_array.push(new Particle());
  }
}

__init__();
//console.log(particles_array); // check to see if the array caught all 100 particles

// draw the particles from the array we created
function handle_particles () {
  for (let i = 0; i < particles_array.length; i++) {
    particles_array[i].update();
    particles_array[i].draw();
  }
}

// animates the circle to the mouse movement, no painting because it clears it with a loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handle_particles();
  requestAnimationFrame(animate);
}

animate();


// to draw a rectangle
//ctx.fillStyle = 'white';
//ctx.fillRect(10, 20, 150, 50);

// to draw a circle
//ctx.fillStyle = 'blue';
//ctx.strokeStyle = 'red'; // circle border
//ctx.lineWidth = 5; // determines width of --> ctx.strokeStyle
//ctx.beginPath(); // starting a new shape not defined by previous lines
//ctx.arc(100, 100, 50, 0, Math.PI * 2);
//ctx.stroke();
//ctx.fill();
//console.log(ctx); // you can look at the properties we are changing