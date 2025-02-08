// -----Variables-----
const userAnswer = document.getElementById('user-answer')

// -----Change Input Style-----
function changeStyle(inputStyle) {          
    let parent = inputStyle.parentElement
    for (let i = 0; i < parent.childElementCount; i++) {
        if (parent.children[i].classList.contains('text-red-400')) {
            parent.children[i].classList.remove('text-red-400')
            parent.children[i].classList.add('text-light-400')
        }
    }
    inputStyle.classList.remove('text-light-400')
    inputStyle.classList.add('text-red-400')
    changeInputStyle(inputStyle)
}

function changeInputStyle(inputStyle) {
    const boardTypes = ['Keyboard', 'Typing']
    const kanaKeys = document.getElementById('kanaBoard')
    const Typing = document.getElementById('typingBoard')
    kanaKeys.classList.add('hidden')
    Typing.classList.add('hidden')
    if (typeof(inputStyle) == 'object') {
        if (inputStyle.innerText == boardTypes[0]) {
            kanaKeys.classList.remove('hidden') }
        else if (inputStyle.innerText == boardTypes[1]) {
            Typing.classList.remove('hidden')
        }
        document.cookie = `inputStyle=${inputStyle.innerText}`
    }
    else {
        inputStyle = inputStyle.split('=')[1]
        if (inputStyle == boardTypes[0]) {
            kanaKeys.classList.remove('hidden') }
        else if (inputStyle == boardTypes[1]) {
            Typing.classList.remove('hidden')
        }
    }
}

// Run Via Cookies
if (document.cookie) { changeInputStyle(decodeURIComponent(document.cookie)) }
else ( console.log('No Cookies') )


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

function submitAnswer() {
    const background = document.getElementById('background')
    const afterAnswer = document.getElementById('after-answer')
    const TypingInput = document.getElementById('typingBoard').children[0]
    let userAnswerArray = userAnswer.innerText.split(' • ')
    let promptArray = gamePrompt.innerText.split('')
    let correctCount = 0
    TypingInput.value = ''
    for (let i = 0; i < userAnswerArray.length; i++) {
        let index = ''
        index = phoneticList.indexOf(userAnswerArray[i])
        userAnswerArray[i] = hiraganaList[index]
        if (userAnswerArray[i] == promptArray[i]) {
            correctCount += 1
        }
    }
    if (correctCount == promptArray.length) {
        background.classList.remove('bg-light-200', 'dark:bg-dark-200')
        background.classList.add('bg-green-400', 'dark:bg-green-600')

        afterAnswer.innerText = gamePrompt.innerText

        gamePrompt.classList.add('font-rampart-one-jp')
        gamePrompt.classList.remove('text-red-400')
        gamePrompt.classList.add('text-light-100', 'dark:text-dark-100')
        gamePrompt.innerText = 'Correct!'
        

        userAnswer.classList.remove('text-red-400')
        userAnswer.classList.add('text-light-100', 'dark:text-dark-100')
    }
    else {
        background.classList.remove('bg-light-200', 'dark:bg-dark-200')
        background.classList.add('bg-red-400', 'dark:bg-red-600')

        afterAnswer.innerText = gamePrompt.innerText

        gamePrompt.classList.add('font-rampart-one-jp')
        gamePrompt.classList.remove('text-red-400')
        gamePrompt.classList.add('text-light-100', 'dark:text-dark-100')
        gamePrompt.innerText = 'Incorrect!'

        userAnswer.classList.remove('text-red-400')
        userAnswer.classList.add('text-light-100', 'dark:text-dark-100')
    }
}

// -----Typing Input-----
document.addEventListener('keyup', (event) => {
    const TypingInput = document.getElementById('typingBoard').children[0]
    newInput = TypingInput.value.replaceAll(' ', ' • ')
    userAnswer.innerText = newInput
    if (event.key == 'Enter') {
        submitAnswer()
    }
})