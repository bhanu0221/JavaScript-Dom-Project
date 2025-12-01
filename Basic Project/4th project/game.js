const imageMap = {
    'Rock': 'https://cdn.aptoide.com/imgs/a/8/3/a83c26adf98b785e13e7eecfdb65351d_screen.png',
    'Paper': 'https://cdn.aptoide.com/imgs/7/2/8/728dc196ac6f469b5eb0a1602815ab3b_screen.png',
    'Scissors': 'https://cdn.aptoide.com/imgs/6/3/5/6356997e5744d5922e890ad765e09301_screen.png'
};


function playGame(userchoice) {
    const num = Math.random();
    let computerChoice = '';

    if (num >= 0 && num < 1 / 3) {
        computerChoice = 'Rock';
    } else if (num >= 1 / 3 && num < 2 / 3) {
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
    ) {
        result = 'You Win';
    } else {
        result = "You lose";
    }

    const userImage = imageMap[userchoice];
    const computerImage = imageMap[computerChoice];


    // --- Inside your playGame function, where you update the result ---

    document.getElementById('result').innerHTML = `
    <div style="text-align: center;">
        <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 10px; flex-wrap: wrap;">
            
            <div style="text-align: center; min-width: 120px;">
                <p style="font-weight: bold; margin: 5px 0; font-size: 0.9em;">You chose:</p>
                <img src="${userImage}" alt="${userchoice}" style="width: 80px; height: 80px; object-fit: cover; border: 3px solid #4CAF50;">
            </div>
            
            <div style="text-align: center; min-width: 120px;">
                <p style="font-weight: bold; margin: 5px 0; font-size: 0.9em;">Computer chose:</p>
                <img src="${computerImage}" alt="${computerChoice}" style="width: 80px; height: 80px; object-fit: cover; border: 3px solid #F44336;">
            </div>

        </div>

        <p style="font-size: 1.5em; font-weight: bold; color: #333; padding-top: 10px; border-top: 1px dashed #ccc; margin-top: 10px;">
            ${result}
        </p>

    </div>
`;

    // document.getElementById('result').innerHTML = `you chose: ${userchoice}<br>
    // computer chose: ${computerChoice}<br> ${result}`;
}
