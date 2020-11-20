const api1 = new ApiFetch()
const columnLeft = document.querySelector(".left")
const bigCanvas = document.querySelector(".canvas")
const box = document.querySelector(".box")
const loginMsg = document.querySelector(".message")
// const scorelist = document.getElementById("scoreList")

function start() {
    showForm()
    api1.createUser();
    api1.deleteFetch();
}

function hideForm() {
    userForm.style.display = "none";
    columnLeft.innerHTML +=  '<div id="logoutDiv"><h2>LogOut</h2><p><button class="logoutBtn">LogOut</button></p></div>'
    bigCanvas.style.display="block";
    box.style.display="block";
    loginMsg.innerText = "Have Fun!"
    logoutEvent()
}


function showForm() {
    document.getElementById("userForm").style.display = "block"
    bigCanvas.style.display="none";
    box.style.display="none";
    scorelist.innerHTML = ""

}

function logoutEvent() {
    const logout = document.querySelector(".logoutBtn")
    logout.addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector("#logoutDiv").style.display = "none"
    showForm()
    loginMsg.innerText = "Please Login to Play";
    api1.createUser()
   })
    
}

start()

