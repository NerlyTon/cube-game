const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const scoreNum = document.getElementById("scoreNum")
const startBtn = document.getElementById("startBtn")
const startBox = document.getElementById("startBox")
const showScore = document.getElementById("showScore")

class Game {
    constructor(id, score, user_id) {
        this.id = id
        this.score = score
        this.user_id = user_id
        // User.all.push(this)
    }

    displayScoresHTML() {
        return `<p id=${this.id}>Score:${this.score} <button class="delete">Delete</button></p>`
    }
}

// function getGameScores(id) {
//     // debugger
//     // const userId = document.getElementsByClassName("user")
//     // debugger
//     fetch(`http://localhost:3000/users/${id}`)
//         .then(res => res.json())
//         .then(function (user) {
//             scorelist.innerHTML = ""
//             scorelist.innerHTML += "<ul>"
//         // users.forEach((user) => {
//             const newUser = new User(user.id, user.username, user.games)
//             // console.log(newUser)
//             scorelist.innerHTML += newUser.displayScoresHTML();
//         })
//         scorelist.innerHTML += "</ul>"
// }

function getScore(user_id, score) {
    
    fetch(`http://localhost:3000/games`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({user_id: user_id, score: score})

    })
    .then(resp => resp.json())
    .then(game => { 
        const gameInfo = new Game(game.id, game.score, game.user_id)
        console.log(gameInfo)
        // debugger

        // function checkId() {
        //     if(game.user_id === User.all[0].id) {
        //         return game.user_id
        //     }
        // }
        // currentUser = User.all.find(checkId)
        // debugger
        // console.log(game)
        // debugger
    //     currentUser = User.all.find(user)
       scorelist.innerHTML += gameInfo.displayScoresHTML()})
    .catch(err => console.log(err))
    // debugger
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

    moveRight() {
        this.dx = this.dx + 60
    }

    moveLeft() {
        this.dx = this.dx - 60
    }

    moveUp() {
        this.dy = this.dy - 60
    }

    moveDown() {
        this.dy = this.dy + 60
    }

}

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


// addEventListener("keydown", (e) => {
//     if (e.key === "ArrowRight") {
//         ctx.fillStyle = 'rgba(0, 0, 0, 0)'
//         ctx.fillRect(0, 0, canvas.width, canvas.height)
//         player.moveRight()
//         player.draw()
//     } else if(e.key === "ArrowLeft") {
//         ctx.fillStyle = 'rgba(0, 0, 0, 0)'
//         ctx.fillRect(0, 0, canvas.width, canvas.height)
//         player.moveLeft()
//         player.draw()
//     } else if(e.key === "ArrowUp") {
//         ctx.fillStyle = 'rgba(0, 0, 0, 0)'
//         ctx.fillRect(0, 0, canvas.width, canvas.height)
//         player.moveUp()
//         player.draw()
//     }
//      else if(e.key === "ArrowDown") {
//         ctx.fillStyle = 'rgba(0, 0, 0, 0)'
//         ctx.fillRect(0, 0, canvas.width, canvas.height)
//         player.moveDown()
//         player.draw()
//     }
// })

addEventListener("mousemove", (e) => {
    player.dx = e.x  
    player.dy = e.y
    // player.x = mouse
    // console.log(e.x, e.y)
})

function populateObstacles() {
    setInterval(() => {
        const dx = Math.random() * canvas.width
        const dy = 0
        const x = 40
        const y = 40
        const color = colorArr[Math.floor(Math.random() * colorArr.length)];
        obstacles.push(new Obstacles(dx, dy, x, y, color))
    }, 1000)
}

// const obstaclesInterval = setInterval(populateObstacles, 1000)

function animate() {
    animationId = requestAnimationFrame(animate)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
    obstacles.forEach((obstacle, index) => {
        obstacle.update()
        // console.log(obstacle)
        if(obstacle.dy > 560){
            setTimeout(() => {
                obstacles.splice(index, 1)
            }, 0); 
        }

        if (player.color === obstacle.color && player.dx < (obstacle.dx + obstacle.x) && (player.dx + player.x) > obstacle.dx &&
            player.dy < (obstacle.dy + obstacle.y) &&
            (player.dy + player.y) > obstacle.dy) {
                // debugger
            score += 1
            scoreNum.innerHTML = score
            setTimeout(() => {
                obstacles.splice(index, 1)
            }, 0); 
            
        } else if (player.color !== obstacle.color && player.dx < (obstacle.dx + obstacle.x) && (player.dx + player.x) > obstacle.dx &&
                player.dy < (obstacle.dy + obstacle.y) &&
                (player.dy + player.y) > obstacle.dy) {
                    // debugger
                    setTimeout(() => {
                        obstacles.splice(index, 1)
                    }, 0); 
            
                cancelAnimationFrame(animationId)
                startBox.style.display = ''
                showScore.innerHTML = score
                // debugger
                getScore(User.all[0].id, score)
                // debugger
                // clearInterval(obstaclesInterval)
                // obstaclesInterval
        }
    })
}

function startGame() {
    player.draw()
    populateObstacles();
    animate();
}

startBtn.addEventListener('click', () => {
    initialize()
    startGame()
    startBox.style.display = 'none'

})
