window.onload = loadDocument;

function loadDocument(){
  //For now this function will only be used for starting the game when
  //the page loads, eventually there will be a button to start the game
  startGame();
};

function startGame(){
  document.getElementById("text").innerHTML = "You wake up in a daze";
  document.getElementById("text").innerHTML = "As your vision starts clearing up you see a man sitting directly beside you";
}
