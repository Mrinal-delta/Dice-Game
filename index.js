var randomPlayerOne = Math.random()*5;
randomPlayerOne = Math.round(randomPlayerOne)+1;
var randomPlayerTwo = Math.random()*5;
randomPlayerTwo = Math.round(randomPlayerTwo)+1;

document.querySelector(".Player1").setAttribute("src","images/dice"+randomPlayerOne+".png");
console.log(randomPlayerOne);
document.querySelector(".Player2").setAttribute("src","images/dice"+randomPlayerTwo+".png");
console.log(randomPlayerTwo);

if(randomPlayerOne>randomPlayerTwo){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}else if(randomPlayerTwo>randomPlayerOne){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}else{
    document.querySelector("h1").textContent = "🏁Its a draw!🏁";
}