let humanScore = 0;
let computerScore = 0;
    const buttons = document.querySelectorAll("button");
    const playerContainer = document.querySelector("#humanChoice");
    const computerContainer = document.querySelector("#computerChoice")
    const winLossOutput = document.querySelector(".first-row");
    const gameContainer = document.querySelector(".game-container");
    const finalResultContainer = document.querySelector("final-result-container");

    buttons.forEach((button) =>{
      button.addEventListener("click", () =>{
        const choice = button.getAttribute("id");
        playRound(choice);
      });
    });
 
//}

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

    function playRound(choice) {
      if(humanScore<5 && computerScore<5){
        const humanChoice = choice; 
        const computerChoice = getComputerChoice();
        
        if (humanChoice != null) {
          humanChoice.toLowerCase();

          playerContainer.innerText = "You chose: " + humanChoice;
          computerContainer.innerText = "AI chose:" + computerChoice;
  
        }

        if (
          (humanChoice == "water" && computerChoice == "fire") ||
          (humanChoice == "fire" && computerChoice == "grass") ||
          (humanChoice == "grass" && computerChoice == "fire")
        ) {
              humanScore++;
              winLossOutput.innerText = "You win! " + humanChoice + " beats " + computerChoice + "!";
              console.log(
                "You win! " + humanChoice + " beats " + computerChoice + "!"
              );
              console.log("Human score = " + humanScore);
              console.log("Computer score = " + computerScore);
        } 
        
        else if (
          (humanChoice == "fire" && computerChoice == "fire") ||
          (humanChoice == "grass" && computerChoice == "grass") ||
          (humanChoice == "water" && computerChoice == "water")
        ) {

          winLossOutput.innerText = "Tie! You both picked " + humanChoice +"!";
              console.log(
                "Tie! You both picked " +
                  humanChoice +
                  ". This round doesn't count. Try again!"
              );
        } 
        
        else if (humanChoice == undefined) {
              computerScore++;
              console.log("You lose for not picking a true option!");
              console.log("Human score = " + humanScore);
              console.log("Computer score = " + computerScore);
        } 
        
        else {
              computerScore++;
              winLossOutput.innerText = "You lose! " + computerChoice + " beats " + humanChoice + "!";
              console.log(
                "You lose! " + computerChoice + " beats " + humanChoice + "!"
              );
              console.log("Human score = " + humanScore);
              console.log("Computer score = " + computerScore);
        }
      }

      else
      declareWinner();
    }

     function declareWinner(){
      toggleElements();

      const result = humanScore === 5 ? "won" : "lose";
      finalResultText.innerTexts = `You ${result}! ${humanScore}-${computerScore}`;

    }
  
    function toggleElements(){
      gameContainer.classList.toggle("hidden");
      finalResultContainer.classList.toggle("hidden");
      
    }