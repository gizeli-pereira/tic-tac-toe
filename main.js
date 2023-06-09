/*----- constants -----*/
const currentPlayer = document.querySelector(".currentPlayer");
const resetBtn = document.querySelector(".reset");
const message = document.querySelector(".message");

/*----- state variables -----*/
let selected;
let player = "X";

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

/*----- functions and event listeners -----*/
function init() {
  selected = [];

  currentPlayer.innerHTML = `PLAYER: ${player}`;

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}   


init();

//Get player move on button
function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  check();
  
//Show who is the current player 
  player = player === "X" ? "O" : "X";
  currentPlayer.innerHTML = `PLAYER: ${player}`;
}

//Reset button
resetBtn.addEventListener('click', () => {
  location.reload();
 });

 //Check for winner or DRAW
function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);
// for loop to check the positions of the players
  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert("THE PLAYER'" + playerLastMove + "' WON!");
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    message.innerHTML = "It's a DRAW!";
    init();
    return;
  }

}


