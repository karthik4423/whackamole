const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeleft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeleft.textContent


function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //assign the id of randomPosition to hitPosition for us to see later
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

function countDown() {
    currentTime--
    timeleft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert("GAME OVER! \nYour Final Score is : " + result + "\nA new game will start after you click OK")
        location = location
    }
}

let timerId = setInterval(countDown, 1000)
moveMole()