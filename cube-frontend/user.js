class User {
    constructor(id, username, games) {
        this.id = id
        this.username = username
        this.games = games
        User.all.push(this)
    }

    
    
    static all = []
    displayScoresHTML() {
        return `<h3> ${this.username} </h3>
        ${this.games.map((game) => `<div> <p id="score-${game.id}">Score:${game.score} <button class="delete">Delete</button></p>`).join("")}
        </div>`
    }

}

