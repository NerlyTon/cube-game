class User {
    constructor(username, games) {
        this.username = username
        this.games = games
    }

    displayScoresHTML() {
        return `<div>
        <h3> ${this.username} </h3>
        <li>${this.games.map((game) => `<p>Score:${game.score}</p>`).join("")}</li>
        
        </div>`
    }
}