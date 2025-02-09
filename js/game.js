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

// -----Submit Answer-----
function submitAnswer() {
    const background = document.getElementById('background')
    const afterAnswer = document.getElementById('after-answer')
    const correctAnswer = document.getElementById('correct-answer')
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
        else {
            correctCount -= 1
        }
    }
    // If Answer is Correct
    if (correctCount == promptArray.length) {
        background.classList.remove('bg-light-200', 'dark:bg-dark-200')
        background.classList.add('bg-green-400', 'dark:bg-green-600')
        background.classList.add('transition-[transform,background-color]')

        afterAnswer.innerText = gamePrompt.innerText

        gamePrompt.classList.add('font-rampart-one-jp')
        gamePrompt.classList.remove('text-red-400')
        gamePrompt.classList.add('text-light-100', 'dark:text-dark-100')
        gamePrompt.innerText = 'Correct!'
        

        userAnswer.classList.remove('text-red-400')
        userAnswer.classList.add('text-light-100', 'dark:text-dark-100')
    }
    // If Answer is Incorrect
    else {
        correctAnswer.innerHTML = '&nbsp;/&nbsp;'
        for (let i = 0; i < gamePrompt.innerText.length; i++) {
            let index = ''
            index = hiraganaList.indexOf(gamePrompt.innerText[i])
            correctAnswer.innerHTML = correctAnswer.innerText += phoneticList[index] + '&nbsp;'
        }
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