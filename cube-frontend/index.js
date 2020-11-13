function start() {
    const scorelist = document.getElementById("scoreList")

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
    
}



start();