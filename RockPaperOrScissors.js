//const multiplyByNineFifths = celsius => celsius * (9/5);
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    }
    else {
        console.log('error');
    }
};

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3);
    // console.log('random number = ' + randomNumber);
    if (randomNumber === 0) {
        return 'rock';
    }
    if (randomNumber === 1) {
        return 'paper';
    }
    if (randomNumber === 2) {
        return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'tie';
    }
    else if (userChoice === 'rock' && computerChoice === 'paper' ) {
        return 'computer won';
    }
    else if (userChoice === 'bomb' ) {
            return 'you always win, dirty little cheater!';
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors'){
        return 'you won';
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'you won';
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'computer won';
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'you won';
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'you won';
    }
};

//console.log(determineWinner(getUserChoice('paper'), getComputerChoice()));

// for (let i = 0; i<100; i++) {
//     getComputerChoice();
// }

const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log('User choice: ' + userChoice);
    console.log('Computer choice: ' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
};
playGame();