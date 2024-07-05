let first_question_button = document.getElementById("first-question-button")
let first_question_text = document.getElementById("first-question-text")

first_question_button.onclick = function () {
    if ((String(first_question_text.classList).includes("hide"))) {
        first_question_text.classList.add("open-window")
        first_question_text.classList.remove("close-window")
        first_question_text.classList.remove("hide")
    } else {
        first_question_text.classList.remove("open-window")
        first_question_text.classList.add("close-window")
        setTimeout(function () {
            first_question_text.classList.add("hide")
        }, 1000)
    }
}


let second_question_button = document.getElementById("second-question-button")
let second_question_text = document.getElementById("second-question-text")

second_question_button.onclick = function () {
    if ((String(second_question_text.classList).includes("hide"))) {
        console.log("тут")
        second_question_text.classList.add("open-window")
        second_question_text.classList.remove("close-window")
        second_question_text.classList.remove("hide")
    } else {
        console.log("тута")
        second_question_text.classList.remove("open-window")
        second_question_text.classList.add("close-window")
        setTimeout(function () {
            second_question_text.classList.add("hide")
        }, 1000)
    }
}

let third_question_button = document.getElementById("third-question-button")
let third_question_text = document.getElementById("third-question-text")

third_question_button.onclick = function () {
    if ((String(third_question_text.classList).includes("hide"))) {
        console.log("тут")
        third_question_text.classList.add("open-window")
        third_question_text.classList.remove("close-window")
        third_question_text.classList.remove("hide")
    } else {
        console.log("тута")
        third_question_text.classList.remove("open-window")
        third_question_text.classList.add("close-window")
        setTimeout(function () {
            third_question_text.classList.add("hide")
        }, 1000)
    }
}

let nav_login_button = document.getElementById("nav-login-button")
let login_menu = document.getElementById("login-menu")

nav_login_button.onclick = function () {
    window.scrollTo({top: 0, behavior: 'smooth'});
    login_menu.classList.toggle("hide")
}

let close_login = document.getElementById("login-exit")

close_login.onclick = function () {
    login_menu.classList.toggle("hide")
}


let register_button = document.getElementById("go-to-register")
let register_menu = document.getElementById("register-menu")

register_button.onclick = function () {
    register_menu.classList.toggle("hide")
    login_menu.classList.add("hide")
}

let close_register = document.getElementById("register-exit")

close_register.onclick = function () {
    register_menu.classList.toggle("hide")
}

let go_to_login = document.getElementById("go-to-login")
 
go_to_login.onclick = function () {
    register_menu.classList.add("hide")
    login_menu.classList.remove("hide")
}

// Костыли наше всё