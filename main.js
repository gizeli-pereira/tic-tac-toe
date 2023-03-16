/*----- functions -----*/

  //Initialize the init

  function init() {

    const message = document.querySelector(".message");
    const restartBtn = document.querySelector(".restart");
    const items = document.querySelectorAll(".item");
    const gridArray = Array.from(items);
    let tracking = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let currentPlayer = "playerX";

    //Use forEach to loop through all the board items
    items.forEach((item) =>
    item.addEventListener('click', (e) => {
      //Player makes a move
      const index = gridArray.indexOf(e.target);
        if ( items[index].classList.contains("playerX") || items[index].classList.contains("Player0")
        ) {
          return;
        }

      items[index].classList.add("playerX");

      //Hslice out the move from tracking list
      const SpliceNr = tracking.indexOf(index + 1);
        tracking.splice(SpliceNr, 1);

        //Check for player win
        if (winCheck("playerX", items)) {
          message.innerHTML = "Player X wins!";

          document.body.classList.add("over");
            return;
        } 

        if  (winCheck("player0", items)) {
          message.innerHTML = "Player 0 wins!";

          document.body.classList.add("over");
            return;
        } 

        //Check if Draw
        if (tracking.lenght === 0) {
          message.innerHTML = "It's a DRAW!";

          document.body.classList.add("over");
          
          return;
        }
    })
   );

   //RESTART button event

   restartBtn.addEventListener('click', () => {
    location.reload();
   });
}

//Win Check function
function winCheck(player, items) {
  function check(pos1, pos2, pos3) {
    console.log(items);
    if (
      items[pos1].classList.contains(player) & 
    
      items[pos2].classList.contains(player) &

      items[pos3].classList.contains(player) 
    ) {
      return true;
    } else {
      return false;
    }
  }

  if (check(0, 3, 6)) return true;
  else if (check(1, 4, 7)) return true;
  else if (check(2, 5, 8)) return true;
  else if (check(0, 1, 2)) return true;
  else if (check(3, 4, 5)) return true;
  else if (check(6, 7, 8)) return true;
  else if (check(0, 4, 8)) return true;
  else if (check(2, 4, 6)) return true;
}

//Initialize the game
init();