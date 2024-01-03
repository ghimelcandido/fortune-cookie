const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

function openTheCookie(event){
    event.preventDefault()

    screen1.classList.add("hide")
    screen2.classList.remove("hide")
}

function openAnotherOne(event){
    event.preventDefault()

    location.reload()
}

const imgClosedCookie = document.querySelector("#imgClosedCookie")
const getAnotherCookie = document.querySelector("#openAnotherOne")

imgClosedCookie.addEventListener('click', openTheCookie)
getAnotherCookie.addEventListener('click', openAnotherOne)
