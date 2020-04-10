const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeleft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let buttn = document.querySelector('#start')
let cheer = document.querySelector('#cheer')

let result = 0
let currentTime = timeleft.textContent

timeout = 1000

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
var first10 = first25 = first35 = first50 = first65 = first75 = true
square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
        if (result > 10 && first10) {
            cheer.textContent = "10 Points! Whooho!\nSpeeding UP!"
            first10 = false
            timeout = timeout - 250
                //moveMole(800)
        }
        if (result > 25 && first25) {
            first25 = false
            timeout = timout - 150
            cheer.textContent = "25! You're On a Roll!"

        }
        if (result > 35 && first35) {
            first35 = false
            timeout = timeout - 100
            cheer.textContent = "35! LEGENDARY!"

        }
        if (result > 50 && first50) {
            first50 = false
            timeout = timeout - 100
            cheer.textContent = "50!! How much can you score?!"

        }
        if (result > 65 && first65) {
            first65 = false
            timeout = timeout - 50
            cheer.textContent = "65! Whack-a-mole GURU!"

        }
        if (result > 75 && first75) {
            //timeout = timeout - 50
            cheer.textContent = "75! Whack-a-BOSS!"
            first75 = false
        }
    })
})

function randomtick() {
    setTimeout(() => {
        moveMole()
        randomtick()
    }, timeout)
}

function moveMole(timeout = 1000) {
    let timerId = null
    randomSquare()
        //timerId = setInterval(randomSquare, timeout)
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
randomtick()
    //moveMole()
let timerId = setInterval(countDown, 1000)