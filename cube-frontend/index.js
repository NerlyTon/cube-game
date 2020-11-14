function start() {
    const scorelist = document.getElementById("scoreList")
    const userForm = document.getElementById("userForm")

    function getGameScores() {
        fetch(`http://localhost:3000/users`)
            .then(res => res.json())
            .then(function (users) {
                scorelist.innerHTML += "<ul>"
            users.forEach((user) => {
                const newUser = new User(user.username, user.games)
                console.log(newUser)
                scorelist.innerHTML += newUser.displayScoresHTML();
            })})
            scorelist.innerHTML += "</ul>"

        // fetch(`http://localhost:3000/games`)
        //     .then(res => res.json())
        //     .then(function (games) {
        //         scorelist.innerHTML += "<ul>"
        //     games.forEach((game) => {
        //         // const info = [game.score, game.user]
        //         // console.log(info)
        //         scorelist.innerHTML += `<div id=${game.id}>
        //         <li><p>Score:${game.score} <button class="delete">Delete</button></p></li>
                
        //         </div>`
                
                
        //     })})
        //     scorelist.innerHTML += "</ul>"
            
    }
            
    getGameScores();


    function createUser() {
    userForm.addEventListener("submit", (e) => {
        e.preventDefault()
        // debugger
        const name = e.target.username.value
        debugger
        // const userObj = getUsername(e.target)
        //fetch - POST - instatiate a new user using the class, then take advantage of the diplayScoresHTML
        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username: name})

        })
        .then(resp => resp.json())
        .then(user => 
        scorelist.innerHTML += `<li> ${user} </li>`)
        .catch(err => console.log(err))
        
    })}

    createUser();


    function deleteScore() {

    }
}



start();