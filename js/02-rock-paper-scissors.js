// 0 - Rock
// 1 - Paper
// 2 - Scissors

let userChoise
let cont

do {
do {
    userChoise = Number(prompt('Choose 0 for Rock, or 1 for Paper, or 2 for Scissors'))
} while (!(userChoise === 0 || userChoise === 1 || userChoise === 2));

let compChoise = Math.round(Math.random()*2)
console.log(compChoise)

function finalMessage(winner){
alert(`The winner is ${winner}! You choose ${numberToString(userChoise)} and comp choose ${numberToString(compChoise)}`)
}

function numberToString(num){
    if (num === 0) return 'Rock'
    if (num === 1) return 'Paper'
    if (num === 2) return 'Scissors'
}

if (userChoise === compChoise)
    alert('It is a tie!!!')
 else if (userChoise === 0 && compChoise === 1) finalMessage('Comp')
 else if (userChoise === 0 && compChoise === 2) finalMessage('You')
 else if (userChoise === 1 && compChoise === 0) finalMessage('You')
 else if (userChoise === 1 && compChoise === 2) finalMessage('Comp')
 else if (userChoise === 2 && compChoise === 0) finalMessage('Comp')
 else if (userChoise === 2 && compChoise === 1) finalMessage('You')

 cont = prompt('Continue? - click OK. Stop - type s')

} while (cont != 's')