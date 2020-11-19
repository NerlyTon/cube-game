class User {
    constructor(id, username, games) {
        this.id = id
        this.username = username
        this.games = games
        User.all.push(this)
        // debugger
    }

    
    
    static all = []
    displayScoresHTML() {
        return `<h3> ${this.username} </h3>
        ${this.games.map((game) => `<div> <p id="score-${game.id}">Score:${game.score} <button class="delete">Delete</button></p>`).join("")}
        </div>`
    }

}

const columnLeft = document.querySelector(".left")
const scorelist = document.getElementById("scoreList")


function hideForm() {
    userForm.style.display = "none"
    columnLeft.innerHTML +=  '<div id="logoutDiv"><h2>LogOut</h2><p><button class="logoutBtn">LogOut</button></p></div>'
    showForm()
    // debugger
}


function showForm() {
    const logout = document.querySelector(".logoutBtn")
    logout.addEventListener("click", (e) => {
        e.preventDefault()
        // debugger
    userForm.style.display = "block"
    document.querySelector("#logoutDiv").style.display = "none"
    scorelist.innerHTML = ""

    }
)}
