console.log('hi');

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput
    } else {
        console.log("Choose rock, paper or scissors")
    }
}


const getComputerChoice = () => {
    const rand = Math.floor(Math.random() * 3)

    switch (rand) {
        case 0:
            console.log("You chose rock");
            return "rock";
        case 1:
            console.log("You chose paper");
            return "paper";
        case 2:
            console.log("You chose scissors")
            return "scissors";
        default:
            console.log("Invalid choice")
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "The game is a tie";
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer won!"
        } else {
            return "The user won!"
        }
    }

}

