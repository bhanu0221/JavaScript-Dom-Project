function playGame(userchoice) {
    const num = Math.random();
    let computerChoice = '';

    if (num >= 0 && num < 1/3) {
        computerChoice = 'Rock';
    } else if (num >= 1/3 && num <2/3) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }

    let result = '';

    if (userchoice === computerChoice) {
        result = 'Tie';
    } else if (
        (userchoice === 'Rock' && computerChoice === 'Scissors') ||
        (userchoice === 'Paper' && computerChoice === 'Rock') ||
        (userchoice === 'Scissors' && computerChoice === 'Paper')
    ){
        result = 'You Win';
    } else {
        result = "You lose";
    }

    document.getElementById('result').innerHTML = `you chose: ${userchoice}<br>
    computer chose: ${computerChoice}<br> ${result}`;
}
