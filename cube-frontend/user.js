class User {
    constructor(username, games) {
        this.username = username
        this.games = games
    }

    // getUsername(form) {
    //     return this.username = username.value
    // }

    displayScoresHTML() {
        return `<div>
        <h3> ${this.username} </h3>
        <li>${this.games.map((game) => `<p id=${game.id}>Score:${game.score} <button class="delete">Delete</button></p>`).join("")}</li>
        
        </div>`
    }
}