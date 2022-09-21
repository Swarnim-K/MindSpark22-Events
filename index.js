
const expander = document.querySelectorAll(".expander")
const collapser = document.querySelectorAll(".collapser")
const expandingbtn = document.querySelectorAll(".expander-button");
const collapsingbtn = document.querySelectorAll(".collapsing-button");
const subevent = document.querySelectorAll(".subevents");
const modulelogo = document.querySelectorAll(".module-logo")

for (let i = 0; i < expandingbtn.length; i++) {
    expandingbtn[i].addEventListener("click", () => {
        modulelogo[i].classList.add("module-logo-hidden")
        subevent[i].classList.add("subevents-visible")
        collapser[i].classList.add("collapser-visible")
        expander[i].classList.add("expander-hidden")
    })
}

for (let i = 0; i < collapsingbtn.length; i++) {
    collapsingbtn[i].addEventListener("click", () => {
        modulelogo[i].classList.remove("module-logo-hidden")
        subevent[i].classList.remove("subevents-visible")
        collapser[i].classList.remove("collapser-visible")
        expander[i].classList.remove("expander-hidden")
    })
}

