function start() {
    const scorelist = document.getElementById("scoreList")

    function getGameScores() {
        fetch(`http://localhost:3000/users`)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    getGameScores();
}



start();