let humanScore = 0;
let computerScore = 0;
    const buttons = document.querySelectorAll(".choice-button");
    const playerContainer = document.querySelector("#humanChoice");
    const computerContainer = document.querySelector("#computerChoice")
    const winLossOutput = document.querySelector(".first-row");
    const gameContainer = document.querySelector(".game-container");
    const finalResultContainer = document.querySelector(".final-result-container");
    const input = document.querySelector(".gen-selector");
    const playerPokemonImage = document.querySelector("#playerPokemonImage");
    const computerPokemonImage = document.querySelector("#computerPokemonImage");

    buttons.forEach((button) =>{
      button.addEventListener("click", () =>{
        const genNum = input.value;
        console.log(genNum);
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
            playerContainer.innerText = `You chose: ${humanChoice}`;
            computerContainer.innerText = `AI chose: ${computerChoice}`;
            changeImage(humanChoice, computerChoice, genNum);
        }

        if (
          (humanChoice == "water" && computerChoice == "fire") ||
          (humanChoice == "fire" && computerChoice == "grass") ||
          (humanChoice == "grass" && computerChoice == "fire")
        ) {
              humanScore++;
              winLossOutput.innerText = "You win! " + humanChoice + " beats " + computerChoice + "!";
              //const buttonColor = document.getElementById(`#${humanChoice}`).style.backgroundColor;  
              const buttonColor = window.getComputedStyle(document.querySelector(`#${humanChoice}`)).backgroundColor;
              console.log(buttonColor);
              winLossOutput.setAttribute("style", `background-color: ${buttonColor}`);
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
          winLossOutput.setAttribute("style", `background-color: grey`);
              console.log(
                "Tie! You both picked " +
                  humanChoice +
                  ". This round doesn't count. Try again!"
              );
        } 
        
        else {
              computerScore++;
              winLossOutput.innerText = "You lose! " + computerChoice + " beats " + humanChoice + "!";
              winLossOutput.setAttribute("style", `background-color: grey`);
              console.log(
                "You lose! " + computerChoice + " beats " + humanChoice + "!"
              );
              console.log("Human score = " + humanScore);
              console.log("Computer score = " + computerScore);
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
      finalResultText.innerTexts = `You ${result}! ${humanScore}-${computerScore}`;

    }
  
    function toggleElements(){
      gameContainer.classList.toggle("hidden");
      finalResultContainer.classList.toggle("hidden");
      
    }

    function changeImage(humanChoice, computerChoice, genNum){
      playerPokemonImage.src = `./starter-images/gen-${genNum}-${humanChoice}.png`;
      computerPokemonImage.src = `./starter-images/gen-${genNum}-${computerChoice}.png`;
    }