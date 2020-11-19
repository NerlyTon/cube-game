function start() {
    const scorelist = document.getElementById("scoreList")
    const userForm = document.getElementById("userForm")


    // function getScore(id, score) {
    //     fetch(`http://localhost:3000/games`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({user_id: id, score: score})

    //     })
    //     .then(resp => resp.json())
    //     .then(user => { 
    //         currentUser = User.all.find(user)
    //        scorelist.innerHTML += currentUser.displayScoresHTML()})
    //     .catch(err => console.log(err))
    //     // debugger
    // }
    // function getGameScores() {
    //     fetch(`http://localhost:3000/users`)
    //         .then(res => res.json())
    //         .then(function (users) {
    //             scorelist.innerHTML = ""
    //             scorelist.innerHTML += "<ul>"
    //         users.forEach((user) => {
    //             const newUser = new User(user.username, user.games)
    //             // console.log(newUser)
    //             scorelist.innerHTML += newUser.displayScoresHTML();
    //         })})
    //         scorelist.innerHTML += "</ul>"
    // }
            
    // getGameScores();

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
            
    function createUser() {
    userForm.addEventListener("submit", (e) => {
        e.preventDefault()
        // debugger
        const name = e.target.username.value
        // const userFilter = User.all.filter
        // debugger
        // const userObj = getUsername(e.target)
        
        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username: name})

        })
        .then(resp => resp.json())
        .then(user => { 
            //if !userFilter(user) :
            // debugger
            const newUser = new User(user.id, user.username, user.games)
                console.log(newUser)
                // debugger
                scorelist.innerHTML += newUser.displayScoresHTML()})
        .catch(err => console.log(err))
        // debugger
        hideForm()
        // showForm()
        
    })}

    createUser();
    // logOutEvent();


    // function getGameScores(id) {
    //     // const userId = document.getElementsByClassName("user")
    //     // debugger
    //     fetch(`http://localhost:3000/users/${id}`)
    //         .then(res => res.json())
    //         .then(function (user) {
    //             scorelist.innerHTML = ""
    //             scorelist.innerHTML += "<ul>"
    //         // users.forEach((user) => {
    //             const newUser = new User(user.id, user.username, user.games)
    //             // console.log(newUser)
    //             scorelist.innerHTML += newUser.displayScoresHTML();
    //         })
    //         scorelist.innerHTML += "</ul>"
    // }
    // getGameScores(User.all);
    function deleteScore(id) {
        const dltScore = document.querySelector("#score-"+id)
        // debugger
        dltScore.remove()
     }

    function deleteFetch() {
        scorelist.addEventListener("click", function(e) {
            e.preventDefault()
            if (e.target.className === "delete") {
                deleteId = e.target.parentElement.id.split("score-")[1]
                // debugger
            fetch(`http://localhost:3000/games/${deleteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(user => {
            console.log(user)
            deleteScore(user.id)
            // deleteScore(user.id)
            // grab query selector 
            // location.reload();
            // getScore(user.user_id, user.score)
            // start();
            // const newUser = new User(user.username, user.games)
            //     console.log(newUser)
            //     scorelist.innerHTML += newUser.displayScoresHTML()
        })
    }}
    )}
    deleteFetch()
}

start();