let player = ""
let computer = ""
let win = 0
let lose = 0

let rock = () => {
    player = "rock"
    choice()
    if (player == computer){
        alert("draw")
    } else if(computer == "paper"){
        alert('Lose')
        lose++
        score()
    } else{
        alert("win")
        win++
        score()
    }
}

let paper = () => {
    player = "paper"
    choice()
    if (player == computer){
        alert("draw")
    } else if(computer == "scissors"){
        alert('Lose')
        lose++
        score()
    } else{
        alert("win")
        win++
        score()
    }
}

let scissors = () => {
    player = "scissors"
    choice()
    if (player == computer){
        alert("draw")
    } else if(computer == "rock"){
        alert('Lose')
        lose++
        score()
    } else{
        alert("win")
        win++
        score()
    }
}

let choice = () => {
    let ch = Math.random()
    if(ch < 0.34){
        computer = "rock"
    }
    else if(ch <= 0.64){
        computer = "paper"
    }
    else{
        computer = "scissors"
    }
}

let score = () => {
    let wins = document.getElementById('s1')
    let losses = document.getElementById('s2')
    wins.textContent = "Your wins are: " + win
    losses.textContent = "Your losses are: " + lose
}

score()