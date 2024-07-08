let left_nav = document.getElementById("left-nav")

left_nav.onclick = function () {
    document.location = "index.html" 
}

let select_page_first = document.getElementById("first-button")
let select_page_second = document.getElementById("second-button")
let select_page_third = document.getElementById("third-button")

select_page_first.onclick = function () {
    select_page_second.classList.remove("selected")
    select_page_third.classList.remove("selected")
    select_page_first.classList.add("selected")
}

select_page_second.onclick = function () {
    select_page_first.classList.remove("selected")
    select_page_third.classList.remove("selected")
    select_page_second.classList.add("selected")
}

select_page_third.onclick = function () {
    select_page_first.classList.remove("selected")
    select_page_second.classList.remove("selected")
    select_page_third.classList.add("selected")
}