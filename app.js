const computerChoiceDisplay= document.getElementById("computer-choice")
const userChoiceDisplay= document.getElementById("user-choice")
const resultsDisplay= document.getElementById('results')
const possibleChoices= document.querySelectorAll('button')
let userChoice
let computerChoice
let results
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice= e.target.id;
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResults()
}))

function generateComputerChoice(){
    let random= Math.floor(Math.random() * possibleChoices.length) + 1
    if (random == 1){
        computerChoice ='Rock'
    } 
    if (random == 2){
        computerChoice= 'Paper'
    }
    if (random == 3){
        computerChoice= 'Scessors'
    }
    computerChoiceDisplay.innerHTML= computerChoice
}

function getResults(){
    if(computerChoice == 'Rock' && userChoice == 'Rock'){
        results= "it's a draw"
    }
    if(computerChoice == 'Rock' && userChoice == 'Paper'){
        results= "you win"
    }
    if(computerChoice == 'Rock' && userChoice == 'Scessors'){
        results= "you lost"
    }
    if(computerChoice == 'Paper' && userChoice == 'Paper'){
        results= "it's a draw"
    }
    if(computerChoice == 'Paper' && userChoice == 'Rock'){
        results= "you lost"
    }
    if(computerChoice == 'Paper' && userChoice == 'Sessors'){
        results= "you win"
    }
    if(computerChoice == 'Sessors' && userChoice == 'Rock'){
        results= "you win"
    }
    if(computerChoice == 'Sessors' && userChoice == 'Paper'){
        results= "you lost"
    }
    if(computerChoice == 'Sessors' && userChoice == 'Sessors'){
        results= "it's a draw"
    }
    resultsDisplay.innerHTML= results
}