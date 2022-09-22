const expander = document.querySelectorAll(".expander")
const collapser = document.querySelectorAll(".collapser")
const expandingbtn = document.querySelectorAll(".expander-button");
const collapsingbtn = document.querySelectorAll(".collapsing-button");
const subevents = document.querySelectorAll(".subevents");
const modulelogo = document.querySelectorAll(".module-logo")


for (let i = 0; i < expandingbtn.length; i++) {
    expandingbtn[i].addEventListener("click", () => {
        modulelogo[i].classList.add("module-logo-hidden")
        subevents[i].classList.add("subevents-visible")
        collapser[i].classList.add("collapser-visible")
        expander[i].classList.add("expander-hidden")
    })
}

for (let i = 0; i < collapsingbtn.length; i++) {
    collapsingbtn[i].addEventListener("click", () => {
        modulelogo[i].classList.remove("module-logo-hidden")
        subevents[i].classList.remove("subevents-visible")
        collapser[i].classList.remove("collapser-visible")
        expander[i].classList.remove("expander-hidden")
    })
}

const body = document.querySelector("body")

const timeOfTheDay = new Date()
const hourOFTheDay = timeOfTheDay.getHours()

const stateOfTheDay = function () {
    if (hourOFTheDay >= 6 && hourOFTheDay <= 17) {
        return "Morning";
    } else if (hourOFTheDay > 17 && hourOFTheDay <= 19) {
        return "Evening";
    } else if (hourOFTheDay > 19 && hourOFTheDay <= 24) {
        return "Night";
    } else if (hourOFTheDay >= 0 && hourOFTheDay < 6) {
        return "Night";
    }
}

if (stateOfTheDay() == "Evening") {
    body.classList.remove("night")
    body.classList.add("evening")
} else if (stateOfTheDay() == "Night") {
    body.classList.add("night")
    body.classList.remove("evening")
}