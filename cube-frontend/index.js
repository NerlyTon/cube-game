function start() {
    const scorelist = document.getElementById("scoreList")
    const userForm = document.getElementById("userForm")

    function createUser() {
    userForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const name = e.target.username.value
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
            const newUser = new User(user.id, user.username, user.games)
                console.log(newUser)
                scorelist.innerHTML += newUser.displayScoresHTML()})
        .catch(err => console.log(err))
       
        hideForm()   
    })
}

createUser();
    
    function deleteScore(id) {
        const dltScore = document.querySelector("#score-"+id)
        dltScore.remove()
    }

    
    function deleteFetch() {
        scorelist.addEventListener("click", function(e) {
            e.preventDefault()
            if (e.target.className === "delete") {
                deleteId = e.target.parentElement.id.split("score-")[1]
               
            fetch(`http://localhost:3000/games/${deleteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',   
            }
            })
            .then(resp => resp.json())
            .then(user => {
                console.log(user)
                deleteScore(user.id)
                
            })
        }}
    )}
    
deleteFetch()

}

start();