const scorelist = document.getElementById("scoreList")
const userForm = document.querySelector("#userForm")
const likebtn = document.querySelector(".like")
// const likeNum= document.querySelector(".like")
// let num = 0



class ApiFetch {

    constructor() {
        this.url = `http://localhost:3000/`
    }

    createUser() {
        
        userForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const name = e.target.username.value
        fetch(this.url+"users", {
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
        
        // document.querySelector(".like").addEventListener("click", (e) => {
        //     console.log(e.target)
        //     // num += 1
    
        // })
    })
    }



    getScore(user_id, score) {
        fetch(this.url+'games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user_id: user_id, score: score})
        })
        .then(resp => resp.json())
        .then(game => { 
            const gameInfo = new Game(game.id, game.score, game.user_id)
            console.log(gameInfo)
    
        scorelist.innerHTML += gameInfo.displayScoresHTML()})
        .catch(err => console.log(err))
    }

    

    
    deleteFetch() {
        scorelist.addEventListener("click", function(e) {
            e.preventDefault()
            if (e.target.className === "delete") {
            const deleteId = e.target.parentElement.id.split("score-")[1]
             
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

            
        }
        else if (e.target.className === "like") {
            // let scoreId = e.target.parentElement.id.split("score-")[1]
            
            // let scoreId = e.target.parentElement.id.split("score-")[1]
            // const likebtn = document.querySelector(".like")
            

            // num ++
            e.target.innerHTML ++
            
            // console.log(e.target) 
            // debugger
        }}
    )}
    
}

function deleteScore(id) {
    const dltScore = document.querySelector("#score-"+id)
    dltScore.remove()
}
