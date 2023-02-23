// TODO: Declare any global variables we need
let headsCount = 0
let tailsCount = 0
let headsPct = 0
let tailsPct = 0
let totalFlips = 0
let status = document.querySelector(".message-container")
let headsTable = document.querySelector("#heads")
let headsPctTable = document.querySelector("#heads-percent")
let tailsTable = document.querySelector("#tails")
let tailsPctTable = document.querySelector("#tails-percent")
let flipButton = document.querySelector("#flip")
let clearButton = document.querySelector("clear")
let image = document.querySelector("img")

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    flipButton.addEventListener("click", function(){
        // TODO: Determine flip outcome
        let result = Math.round(Math.random() * 101)
        console.log("result variable", result)

        if (result < 51) { //heads 0 - 50
          headsCount ++
          status.textContent = "you Flipped Heads!"
          headsTable.textContent = '${headsCount}'
        } else { //tails 51 - 100
          tailsCount ++
          status.textContent = "you Flipped Tails!"
          tailsCount.textContent = '${tailsCount}'
          image.src = "\Users\kdane\FSI-Implement-Coin-Flipper\assets\images\penny-tails.jpg"
        }
        console.log ("headsCount", headsCount)
        console.log ("tailsCount", tailsCount)
        
        headsPct = Math.round{(headsCount/totalFlips) * 100}
        tailsPct = Math.round{(tailsCount/totalFlips) * 100}
        headsPctTable.textContent = '${headsPct}%'
        TailsPctTable.textContent = '${TailsPct}%'

       
        // TODO: Update image 
})
    
    // Clear Button Click Handler
    clearButton.addEventListener("click, function ()"{ 
        status.textContenr = "Let's Get Rolling!"
        headsCount = 0
})      headsTable.textContent = '${headsCount}'
        tailsCount = 0
        tailsTable.textContent = '${tailsCount}'
        headsPct = 0
        tailsPct = 0
        headsPctTable.textContent = '${headsPct}$'
        tailsPctTable.textContent = '${tailsPct}%'

        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})