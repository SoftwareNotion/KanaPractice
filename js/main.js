// -----Base Functions-----
function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}


// -----Navbar-----


// -----Start Game-----
const gamePrompt = document.getElementById('game-prompt')
const hiraganaList = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん']
const phoneticList = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo', 'n']
function startGame() {
    let newKana = ''
    for (let i = 0; i < getRandomInt(9); i++) {
        newKana = newKana + hiraganaList[Math.floor(Math.random() * hiraganaList.length)]
    }
    gamePrompt.innerText = newKana
}
startGame()


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
}


// -----Key Inputs-----
const userAnswer = document.getElementById('user-answer')
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
    let userAnswerArray = userAnswer.innerText.split(' • ')
    let promptArray = gamePrompt.innerText.split('')
    let correctCount = 0
    for (let i = 0; i < userAnswerArray.length; i++) {
        let index = ''
        index = phoneticList.indexOf(userAnswerArray[i])
        userAnswerArray[i] = hiraganaList[index]
        if (userAnswerArray[i] == promptArray[i]) {
            correctCount += 1
        }
    }
    if (correctCount == promptArray.length) {
        background.classList.remove('bg-light-200')
        background.classList.add('bg-green-400')

        afterAnswer.innerText = gamePrompt.innerText

        gamePrompt.classList.add('font-rampart-one-jp')
        gamePrompt.classList.remove('text-red-400')
        gamePrompt.classList.add('text-light-100')
        gamePrompt.innerText = 'Correct!'
        

        userAnswer.classList.remove('text-red-400')
        userAnswer.classList.add('text-light-100')
    }
    else {
        background.classList.remove('bg-light-200')
        background.classList.add('bg-red-400')

        afterAnswer.innerText = gamePrompt.innerText

        gamePrompt.classList.add('font-rampart-one-jp')
        gamePrompt.classList.remove('text-red-400')
        gamePrompt.classList.add('text-light-100')
        gamePrompt.innerText = 'Incorrect!'

        userAnswer.classList.remove('text-red-400')
        userAnswer.classList.add('text-light-100')
    }
}