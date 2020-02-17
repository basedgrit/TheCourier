(function (){
  if(!console) {
    console = {};
  }
  var old = console.log;
  var logger = document.querySelector("#text");
  console.log = function (message) {
    if (typeof message == 'object'){
      logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message): String(message)) + '<br />';
    } else{
      logger.innerHTML += message + '<br />';
    }
  }
})();
  startGame();

function startGame(){
  console.log('You wake up in a daze');
  console.log('testing');
};
