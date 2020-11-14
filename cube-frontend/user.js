class User {
    constructor(username, games) {
        this.username = username
        this.games = games
    }

    // getUsername(form) {
    //     return this.username = username.value
    // }

    displayScoresHTML() {
        return `<h3> ${this.username} </h3>
        ${this.games.map((game) => `<div> <p id=${game.id}>Score:${game.score} <button class="delete">Delete</button></p>`).join("")}
        
        </div>`
    }
}