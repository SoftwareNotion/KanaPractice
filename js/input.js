// -----Variables-----
const userAnswer = document.getElementById('user-answer')

// -----Change Input Style-----
// Actually Changing the Input Style
function changeInputStyle(inputStyle) {
    const boardTypes = ['Keyboard', 'Typing', 'Writing']
    const inputTypes = document.getElementById('inputTypeBtns').children
    const KanaKeys = document.getElementById('kanaBoard')
    const Typing = document.getElementById('typingBoard')
    const Writing = document.getElementById('drawingBoard')
    KanaKeys.classList.add('hidden')
    Typing.classList.add('hidden')
    Writing.classList.add('hidden')

    // Change Board Visibility
    if (inputStyle == boardTypes[0]) {
        KanaKeys.classList.remove('hidden') }
    else if (inputStyle == boardTypes[1]) {
        Typing.classList.remove('hidden')
    }
    else if (inputStyle == boardTypes[2]) {
        Writing.classList.remove('hidden')
    }

    // Change Buttons Color
    for (let i = 0; i < inputTypes.length; i++) {
        if (inputTypes[i].innerText == inputStyle) {
            inputTypes[i].classList.remove('text-light-400')
            inputTypes[i].classList.add('text-red-400')
            console.log(inputTypes[i].innerText)
        }
        else {
            inputTypes[i].classList.remove('text-red-400')
            inputTypes[i].classList.add('text-light-400')
        }
    }

    // Set Cookie
    document.cookie = `inputStyle=${inputStyle}`
}

// Run Via Cookies
if (getCookie('inputStyle')) { changeInputStyle(decodeURIComponent(getCookie('inputStyle'))) }
else ( console.log('No Cookie') )


// -----Key Inputs-----
function inputAnswer(value) {
    if (userAnswer.innerText == '') {
        userAnswer.innerText = userAnswer.innerHTML + value
    }
    else {
        userAnswer.innerText = userAnswer.innerHTML + " • " + value
    }
}

function unInputAnswer() {
    if (userAnswer.innerText.includes(' • ')) {
        let lastSpace = userAnswer.innerText.lastIndexOf(' • ')
        userAnswer.innerText = userAnswer.innerText.slice(0, lastSpace)
    }
    else {
        userAnswer.innerText = ''
    }
}

// -----Typing Input-----
function typingInupt() {
    const TypingInput = document.getElementById('typingBoard').children[0]
    newInput = TypingInput.value.replaceAll(' ', ' • ')
    userAnswer.innerText = newInput
}
document.addEventListener('keyup', (event) => {
    if (getCookie('inputStyle') !== 'Keyboard') {
        if (event.key == 'Enter') {
            submitAnswer()
        }
    }
})