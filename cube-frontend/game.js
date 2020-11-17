const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

class Player {
    constructor(dx, dy, x, y, color,) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.color = color
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.dx, this.dy, this.x, this.y)
        ctx.fill()
    }

    moveRight() {
        this.dx = this.dx + 40
    }

    moveLeft() {
        this.dx = this.dx - 40
    }

}

const player = new Player(395, 550, 50, 50, 'white')
player.draw()


addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        player.moveRight()
        player.draw()
    } else if(e.key === "ArrowLeft") {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        player.moveLeft()
        player.draw()
    }
})

class Obstacles {
    constructor(dx, dy, x, y, color,) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.color = color
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.dx, this.dy, this.x, this.y)
        ctx.fill()
    }

    update() {
        this.dy = this.dy + 2
        this.draw()
    }

}
const obstacles = []

function populateObstacles() {
    setInterval(() => {
        const dx = 100
        const dy = 200
        const x = 80
        const y = 80
        const color = 'pink'
        obstacles.push(new Obstacles(dx, dy, x, y, color))
    }, 1000)
}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.draw()
    obstacles.forEach(obstacle => {
        obstacle.update()
    })
}

populateObstacles();
animate();

// console.log(middle)
// const dx = canvas.width / 2
//     const display = document.querySelector("canvas")
//     const ctx = display.getContext("2d")
    
//     // ctx.fillStyle = "red"
//     // ctx.beginPath();
//     ctx.fillRect(100, 130, 200, 200)
//     // ctx.fill()
//     // ctx.stroke()
// 
     // ctx.fillStyle = "#FFFFFF"
        // ctx.fillRect(380, 500, 100, 100);

// window.addEventListener("keydown", function(e) {
//     e.
// })

// let x = 200;
// let dx = 1;
// let y = 200;
// let dy = 1;

// function animate() {
//     requestAnimationFrame(animate);
//     ctx.clearRect(0,0, innerWidth, innerHeight)
//     ctx.fillStyle = "#FFFFFF"
//     ctx.fillRect(x, y, 100, 100);

//     if(x > 750 || x < 200) {
//         dx = -dx;

//     }

//     if(y > 500 || y < 70) {
//         dy = -dy;

//     }
//     x += dx;
//     y += dy;
// }

// animate();

// window.setInterval(() => {
//     ctx.clearRect(0, 0, canvas.width, canvas.heigth)
//     player.moveRight();
//     player.draw();
// }, 250)

// console.log(player) 

// setup();

