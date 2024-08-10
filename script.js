let humanScore = 0;
let computerScore = 0;
    const buttons = document.querySelectorAll(".choice-button");
    const playerContainer = document.querySelector("#humanChoice");
    const computerContainer = document.querySelector("#computerChoice")
    const winLossOutput = document.querySelector(".first-row");
    const gameContainer = document.querySelector(".game-container");
    const input = document.querySelector(".gen-selector");
    const playerPokemonImage = document.querySelector("#playerPokemonImage");
    const computerPokemonImage = document.querySelector("#computerPokemonImage");

    const finalResultContainer = document.querySelector(".final-result-container");
    const finalResultText = document.querySelector(".final-result-text");
    const playAgainButton = document.querySelector(".play-again-button");

    buttons.forEach((button) =>{
      button.addEventListener("click", () =>{
        const genNum = input.value;
        if(genNum==""){
          alert("You must pick a generation!");
        }
        else{
          const humanChoice = button.getAttribute("id");
          playRound(humanChoice, genNum);
          if(humanScore == 5 || computerScore==5){
            declareWinner();
          }
        }
      });
    });

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

    function playRound(humanChoice, genNum) {
      if(humanScore<5 && computerScore<5){
        const computerChoice = getComputerChoice();
        
        if (humanChoice != null) {
            humanChoice.toLowerCase();
            const tempHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
            const tempComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
            playerContainer.innerText = `You chose: ${tempHumanChoice} \n`;
            computerContainer.innerText = `AI chose: ${tempComputerChoice} \n`;
            changeImage(humanChoice, computerChoice, genNum);
        }

        if (
          (humanChoice == "water" && computerChoice == "fire") ||
          (humanChoice == "fire" && computerChoice == "grass") ||
          (humanChoice == "grass" && computerChoice == "fire")
        ) {
              humanScore++;
              winLossOutput.innerText = `You win! ${humanChoice} beats ${computerChoice}!`;
              const buttonColor = window.getComputedStyle(document.querySelector(`#${humanChoice}`)).backgroundColor;
              winLossOutput.setAttribute("style", `background-color: ${buttonColor}`);

        } 
        
        else if (
          (humanChoice == "fire" && computerChoice == "fire") ||
          (humanChoice == "grass" && computerChoice == "grass") ||
          (humanChoice == "water" && computerChoice == "water")
        ) {
          
          winLossOutput.innerText = `Tie! You both picked ${humanChoice}!`;
          winLossOutput.setAttribute("style", `background-color: grey`);
        } 
        
        else {
              computerScore++;
              winLossOutput.innerText = `You lose! ${computerChoice} beats ${humanChoice}!`;
              winLossOutput.setAttribute("style", `background-color: grey`);
        }

       const humanScoreLabel = document.createElement("div");
       humanScoreLabel.classList.add("score");
       humanScoreLabel.textContent = `Player: ${humanScore}`;
       playerContainer.appendChild(humanScoreLabel);

       const computerScoreLabel = document.createElement("div");
       computerScoreLabel.classList.add("score");
       computerScoreLabel.textContent = `Computer: ${computerScore}`;
       computerContainer.appendChild(computerScoreLabel);
      }
    }

     function declareWinner(){
      toggleElements();
      console.log("Should be toggling.");
      const result = humanScore === 5 ? "won" : "lose";
      finalResultText.innerText = `You ${result}! \n ${humanScore}-${computerScore}`;

    }
  
    function toggleElements(){
      gameContainer.classList.toggle("hidden");
      finalResultContainer.classList.toggle("hidden");
      playAgainButton.classList.toggle("hidden");
    }

    function changeImage(humanChoice, computerChoice, genNum){
      playerPokemonImage.src = `./starter-images/gen-${genNum}-${humanChoice}.png`;
      computerPokemonImage.src = `./starter-images/gen-${genNum}-${computerChoice}.png`;
    }

    playAgainButton.addEventListener("click", reset);

    function reset(){
      toggleElements();
      humanScore =0;
      computerScore = 0;
      playerPokemonImage.src = "";
      computerPokemonImage.src = "";
      winLossOutput.innerText = "Let's Battle!";
      winLossOutput.setAttribute("style", `background-color: rgb(232, 118, 118)`);
      playerContainer.innerText = "Choose a Pokemon!";
      computerContainer.innerText = "Choose a Pokemon!";
      input.value = "";
      input.focus();
    }