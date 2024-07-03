let first_question_button = document.getElementById("first-question-button")
let first_question_text = document.getElementById("first-question-text")

first_question_button.onclick = function () {
    if ((String(first_question_text.classList).includes("hide"))) {
        console.log("тут")
        first_question_text.classList.add("open-window")
        first_question_text.classList.remove("close-window")
        first_question_text.classList.remove("hide")
    } else {
        console.log("тута")
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

// Костыли наше всё