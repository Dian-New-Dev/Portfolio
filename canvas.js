const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray;

//constructor function (it's a blueprinet to make several similar objects)
function Particle(x, y, directionX, directionY, size, color){
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
}

// adding draw method to particle prototype
Particle.prototype.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI *2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}

// update method that will be called over and over to draw frame by frame
//here we control that particles do when they hit the canvas borders
Particle.prototype.update = function() {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY = -this.directionY;
    }

    this.x += this.directionX;
    this.y += this.directionY;

    this.draw();
}


//create particle array

function init() {
    particleArray = [];
    for (let i = 0; i < 20; i++) {
        let size = 5;
        let x = Math.random() * (innerWidth - size * 2);
        let y = Math.random() * (innerHeight - size * 2);
        let directionX = (Math.random() * 10.4) - 1.2;
        let directionY = (Math.random() * 0.4) - 1.2;
        let color = 'yellow';

        particleArray.push(new Particle(x, y, directionX, directionY, size, color));

    }
}

// animation loop

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i <particleArray.length; i++) {
        particleArray[i].update();
    }

}

init();
animate();

window.addEventListener('resize',
    function(){
        canvas.width = innerWidth;
        canvas.height =innerHeight;
        init();
    }
)

// const particle1 = new Particle(100,100,1,1,20,'white');
// particle1.draw();
