const api1 = new ApiFetch()
const bigCanvas = document.querySelector(".canvas")
const box = document.querySelector(".box")
const loginMsg = document.querySelector(".message")
// const likebtn = document.querySelector(".like")



function start() {
    showForm()
    api1.createUser();
    api1.deleteFetch();
}

function hideForm() {
    document.querySelector("#userForm").style.display = "none";
    document.querySelector("#logoutBtn").innerHTML =  '<div id="logoutDiv"><h2>LogOut</h2><p><button class="logoutBtn">LogOut</button></p></div>'
    bigCanvas.style.display="block";
    box.style.display="block";
    loginMsg.innerText = "Have Fun!"
    logoutEvent()

    
}


function showForm() {
    document.getElementById("userForm").style.display = "block"
    document.querySelector("#userForm input").value = ""
    bigCanvas.style.display="none";
    box.style.display="none";
    scorelist.innerHTML = ""

}

function logoutEvent() {
    const logout = document.querySelector(".logoutBtn")
    console.log("logout", logout)
    logout.addEventListener("click", (e) => {
    document.querySelector("#logoutBtn").innerHTML = ""
    showForm()
    loginMsg.innerText = "Please Login to Play";
    User.all = []
    
   })
    
}




start()

