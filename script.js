let humanScore = 0;
let computerScore = 0;
while (humanScore<5 && computerScore<5){
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) =>{
      button.addEventListener("click", () =>{
        const choice = button.getAttribute("id");
        playGame(choice);
      });
    });
} 
 
 /* gets computer choice */
 function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        return "fire"; //rock
      case 1:
        return "water"; //paper
      case 2:
        return "grass"; //scissors
    }
  }

  function playGame(choice) {
      const humanSelection = choice; 
      const computerSelection = getComputerChoice();

      console.log("human choice is: " + humanSelection);
      console.log("computer choice is: " + computerSelection);
      const playerContainer = document.querySelector("#humanChoice")
      const humanChoice = document.createElement("p");
      humanChoice.classList.add("humanChoice");
      humanChoice.textContent = "You chose: " + humanSelection;
      playerContainer.appendChild(humanChoice);

      const computerContainer = document.querySelector("#computerChoice")
      const computerChoice = document.createElement("p");
      computerChoice.classList.add("computerChoice");
      computerChoice.textContent = "AI chose:" + computerSelection;
      computerContainer.appendChild(computerChoice);

      playRound(humanSelection, computerSelection);

  }
    function playRound(humanChoice, computerChoice) {
      if (humanChoice != null) {
        humanChoice.toLowerCase();
      }

      if (
        (humanChoice == "water" && computerChoice == "fire") ||
        (humanChoice == "fire" && computerChoice == "grass") ||
        (humanChoice == "grass" && computerChoice == "fire")
      ) {
        humanScore++;
        console.log(
          "You win! " + humanChoice + " beats " + computerChoice + "!"
        );
        console.log("Human score = " + humanScore);
        console.log("Computer score = " + computerScore);
      } else if (
        (humanChoice == "fire" && computerChoice == "fire") ||
        (humanChoice == "grass" && computerChoice == "grass") ||
        (humanChoice == "water" && computerChoice == "water")
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

     // in the playRound function, it should overwrite the HTML with the appropriate text.