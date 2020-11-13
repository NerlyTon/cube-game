function start() {
    const scorelist = document.getElementById("scoreList")

    function getGameScores() {
        fetch(`http://localhost:3000/users`)
            .then(res => res.json())
            .then(users => 
            users.forEach(user => {
                const newUser = new User(user.username, user.games)
                console.log(newUser)
            })
            )}

    getGameScores();
}



start();