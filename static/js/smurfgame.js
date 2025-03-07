class Rocket {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.rotation = 0;
        this.speed = 0;
        this.size = 20;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        ctx.moveTo(-this.size, -this.size/2);
        ctx.lineTo(this.size, 0);
        ctx.lineTo(-this.size, this.size/2);
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.x += Math.cos(this.rotation) * this.speed;
        this.y += Math.sin(this.rotation) * this.speed;
        
        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }
}

class Missile {
    constructor(x, y, rotation) {
        this.x = x;
        this.y = y;
        this.rotation = rotation;
        this.speed = 7;
        this.size = 5;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
    }

    update() {
        this.x += Math.cos(this.rotation) * this.speed;
        this.y += Math.sin(this.rotation) * this.speed;
    }
}

class Smurf {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = Math.random() * 2 + 1;
        this.rotation = Math.random() * Math.PI * 2;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        
        // Draw Smurf body
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#3366cc';
        ctx.fill();
        
        // Draw hat
        ctx.beginPath();
        ctx.moveTo(-this.size, -this.size/2);
        ctx.lineTo(0, -this.size*1.5);
        ctx.lineTo(this.size, -this.size/2);
        ctx.fillStyle = 'white';
        ctx.fill();
        
        ctx.restore();
    }

    update() {
        this.x += Math.cos(this.rotation) * this.speed;
        this.y += Math.sin(this.rotation) * this.speed;
        
        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    split() {
        if (this.size > 10) {
            return [
                new Smurf(this.x, this.y, this.size / 2),
                new Smurf(this.x, this.y, this.size / 2)
            ];
        }
        return [];
    }
}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let rocket = new Rocket(canvas.width/2, canvas.height/2);
let missiles = [];
let smurfs = [
    new Smurf(100, 100, 40),
    new Smurf(700, 100, 40),
    new Smurf(400, 500, 40)
];

function checkCollisions() {
    missiles.forEach((missile, missileIndex) => {
        smurfs.forEach((smurf, smurfIndex) => {
            const dx = missile.x - smurf.x;
            const dy = missile.y - smurf.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < smurf.size + missile.size) {
                missiles.splice(missileIndex, 1);
                const newSmurfs = smurf.split();
                smurfs.splice(smurfIndex, 1);
                smurfs.push(...newSmurfs);
            }
        });
    });
}

document.addEventListener('keydown', (event) => {
    switch(event.key.toLowerCase()) {
        case 'a':
            rocket.speed += 0.5;
            break;
        case 's':
            rocket.speed -= 0.5;
            break;
        case 'r':
            rocket.rotation += Math.PI / 16;
            break;
        case 'f':
            missiles.push(new Missile(rocket.x, rocket.y, rocket.rotation));
            break;
    }
});

function gameLoop() {
    // Clear canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw rocket
    rocket.update();
    rocket.draw(ctx);
    
    // Update and draw missiles
    missiles = missiles.filter(missile => {
        missile.update();
        missile.draw(ctx);
        return missile.x >= 0 && missile.x <= canvas.width &&
               missile.y >= 0 && missile.y <= canvas.height;
    });
    
    // Update and draw smurfs
    smurfs.forEach(smurf => {
        smurf.update();
        smurf.draw(ctx);
    });
    
    // Check collisions
    checkCollisions();
    
    // Game over condition
    if (smurfs.length === 0) {
        ctx.fillStyle = 'white';
        ctx.font = '48px Arial';
        ctx.fillText('You Won!', canvas.width/2 - 100, canvas.height/2);
    } else {
        requestAnimationFrame(gameLoop);
    }
}

gameLoop(); 