const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeleft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let buttn = document.querySelector('#start')
let cheer = document.querySelector('#cheer')

let result = 0
let currentTime = timeleft.textContent

var timeout = 1000

alert("This is the classic Whack-a-mole Game.\n Click okay to begin.")

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
    console.log(timeout)
        //assign the id of randomPosition to hitPosition for us to see later
    hitPosition = randomPosition.id
}
var timeout = 1000
var first10 = first25 = first35 = first50 = first65 = first75 = true
square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
        if (result > 10 && first10) {
            cheer.textContent = "Whooho!"
            first10 = false
        }
        if (result > 25 && first25) {
            timeout = timeout - 150
            cheer.textContent = "You're On a Roll!"
            first25 = false
        }
        if (result > 35 && first35) {
            timeout = timeout - 100
            cheer.textContent = "LEGENDARY!"
            first35 = false
        }
        if (result > 50 && first50) {
            timeout = timeout - 150
            cheer.textContent = "How much can you score?!"
            first50 = false
        }
        if (result > 65 && first65) {
            timeout = timeout - 150
            cheer.textContent = "Whack-a-mole GURU!"
            first65 = false
        }
        if (result > 75 && first75) {
            timeout = timeout - 50
            cheer.textContent = "Whack-a-BOSS!"
            first75 = false
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, timeout)
    console.log(timeout)
}

function countDown() {
    currentTime--
    timeleft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        setTimeout(alert("GAME OVER! \nYour Final Score is : " + result + "\nA new game will start after you click OK"), 1500)
        location = location
    }
}

moveMole()
let timerId = setInterval(countDown, 1000)