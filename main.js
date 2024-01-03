const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

function imgClosedCookie(){
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
}

function openAnotherOne(){
    location.reload()
}
