let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll("choice");
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
   const userChoice = choice.getAttribute("id");
   playGame(userChoice);
    });
});


genComChoice =() =>{
    const options =["rock","paper","seissors"];
    const randomId = Math.floor(Math.random()*3);
    return options [randomId];
}
plaiGame = (userChoice) =>{
    const comChoice= genComChoice();

}