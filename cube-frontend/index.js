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
            
    }
            
    getGameScores();


    function createUser() {
    userForm.addEventListener("submit", (e) => {
        e.preventDefault()
        // const userObj = getUsername(e.target)
        //fetch - POST - instatiate a new console using the class, then take advantage of the diplayScoresHTML
        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username: "nerly"})

        })
        .then(resp => resp.json())
        .then(user => console.log(user))
        .catch(err => console.log(err))
        // scorelist.innerHTML += '<li> name </li>'
    })}

    createUser();
}



start();