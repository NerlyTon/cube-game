const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const scoreNum = document.getElementById("scoreNum")
const startBtn = document.getElementById("startBtn")
const startBox = document.getElementById("startBox")
const showScore = document.getElementById("showScore")
const sound = document.getElementById("sound")
const backgm = document.getElementById("backgm")
const api = new ApiFetch()

class Game {
    constructor(id, score, user_id) {
        this.id = id
        this.score = score
        this.user_id = user_id
    }

    displayScoresHTML() {
        return `<div id="score-${this.id}">Score:${this.score} <button class="delete">Delete</button></div>`
    }
}

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

}

class Obstacles extends Player {

    update() {
        this.dy = this.dy + 5
        this.draw()
    }

}

let player = new Player(395, 550, 50, 50, 'White')
let obstacles = []
let colorArr = ['Pink', 'Turquoise', 'Plum', "Aquamarine", "White", "Purple"]
let animationId


function initialize() {
    player = new Player(395, 550, 50, 50, 'White')
    obstacles = []
    colorArr = ['Pink', 'Turquoise', 'Plum', "Aquamarine", "White", "Purple"]
    animationId
    score = 0
    showScore.innerHTML = score
    scoreNum.innerHTML = score
}



addEventListener("mousemove", (e) => {
    player.dx = e.x  
    player.dy = e.y
})

function populateObstacles() {
    // setInterval(() => {
        const dx = Math.random() * canvas.width
        const dy = 0
        const x = 40
        const y = 40
        const color = colorArr[Math.floor(Math.random() * colorArr.length)];
        obstacles.push(new Obstacles(dx, dy, x, y, color))
    // }, 250)
}

let obstaclesInterval = setInterval(populateObstacles, 250)

function animate() {
    animationId = requestAnimationFrame(animate)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
    obstacles.forEach((obstacle, index) => {
        obstacle.update()
        if(obstacle.dy > 560){
            setTimeout(() => {
                obstacles.splice(index, 1)
            }, 0); 
        }
        let soundFlag = true
        if (player.color === obstacle.color && player.dx < (obstacle.dx + obstacle.x) && (player.dx + player.x) > obstacle.dx &&
            player.dy < (obstacle.dy + obstacle.y) &&
            (player.dy + player.y) > obstacle.dy) {
            score += 5
            if(soundFlag) {
                sound.pause()
                sound.currentTime = 0
                sound.play()
                soundFlag = false
            }
            scoreNum.innerHTML = score
            setTimeout(() => {
                obstacles.splice(index, 1)
            }, 0); 
            
        } else if (player.color !== obstacle.color && player.dx < (obstacle.dx + obstacle.x) && (player.dx + player.x) > obstacle.dx &&
                player.dy < (obstacle.dy + obstacle.y) &&
                (player.dy + player.y) > obstacle.dy) {
                    setTimeout(() => {
                        obstacles.splice(index, 1)
                    }, 0); 
            
                cancelAnimationFrame(animationId)
                startBox.style.display = ''
                showScore.innerHTML = score
                api.getScore(User.all[0].id, score)
                backgm.pause()
                backgm.currentTime = 0
                clearInterval(obstaclesInterval)
                obstaclesInterval = setInterval(populateObstacles, 200)
                
        }
    })
}

function startGame() {
    player.draw()
    populateObstacles()
    animate();
    backgm.play()
    // startBtnEvent()
}

// function startBtnEvent() {
    startBtn.addEventListener('click', () => {
    initialize()
    startGame()
    startBox.style.display = 'none'
    })
// }
