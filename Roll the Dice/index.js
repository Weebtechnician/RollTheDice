document.querySelector("#rollbtn").addEventListener("click", rollDice);

let player1Score = 0;
let player2Score = 0;

function rollDice() {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;  

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".svg");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".svg");
    
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🎉 Player 1 Wins!";
        document.querySelector("#p1").classList.add("winner");
        document.querySelector("#p2").classList.remove("winner");
        player1Score++;
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉";
        document.querySelector("#p2").classList.add("winner");
        document.querySelector("#p1").classList.remove("winner");
        player2Score++;
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
        document.querySelector("#p1").classList.remove("winner");
        document.querySelector("#p2").classList.remove("winner");
    }

    score();
}

function score() {
    document.querySelector("#player-1-score").innerHTML = "Score: " + player1Score;
    document.querySelector("#player-2-score").innerHTML = "Score: " + player2Score;
}