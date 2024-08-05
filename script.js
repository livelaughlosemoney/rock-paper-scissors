 /* gets computer choice */
 function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        return "rock";
      case 1:
        return "scissors";
      case 2:
        return "paper";
    }
  }

  /* then, prompt the user to make their choice */

  function getHumanChoice() {
   // let choice = prompt("Rock, paper, or scissors?");
    if (choice != null && choice != undefined) {
      if (
        choice.toLowerCase() == "rock" ||
        choice.toLowerCase() == "scissors" ||
        choice.toLowerCase() == "paper"
      ) {
        return choice;
      }
    } else {
      choice = prompt("Whoops! Please enter rock, paper, or scissors!");
    }
  }

  /*with each first choice made, we play the game */
  playGame();

  function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore + computerScore < 5) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();

      console.log("human choice is: " + humanSelection);
      console.log("computer choice is: " + computerSelection);

      playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
      console.log("Congrats! You win!");
    } else {
      console.log("You lost! Better luck next time!");
    }

    function playRound(humanChoice, computerChoice) {
      if (humanChoice != null) {
        humanChoice.toLowerCase();
      }

      if (
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")
      ) {
        humanScore++;
        console.log(
          "You win! " + humanChoice + " beats " + computerChoice + "!"
        );
        console.log("Human score = " + humanScore);
        console.log("Computer score = " + computerScore);
      } else if (
        (humanChoice == "rock" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "paper")
      ) {
        console.log(
          "Tie! You both picked " +
            humanChoice +
            ". This round doesn't count. Try again!"
        );
      } else if (humanChoice == undefined) {
        computerScore++;
        console.log("You lose for not picking a true option!");
        console.log("Human score = " + humanScore);
        console.log("Computer score = " + computerScore);
      } else {
        computerScore++;
        console.log(
          "You lose! " + computerChoice + " beats " + humanChoice + "!"
        );
        console.log("Human score = " + humanScore);
        console.log("Computer score = " + computerScore);
      }
    }
  }