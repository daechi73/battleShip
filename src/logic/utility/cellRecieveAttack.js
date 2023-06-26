const cellRecieveAttackListener = (player2Board, player1) => {
  const player2Cells = document.querySelectorAll(".container-player2 .cell");
  player2Cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      cellRecieveAttack(e, player2Board, player1);
    });
  });
};
const cellRecieveAttack = (e, player2Board, player1) => {
  // console.log(
  //   player2Board.alphaNumCoordToNumCoord(e.target.dataset.alphanumcoord)
  // );
  if (e.target.textContent === "") {
    const result = player1.makeMove(
      player2Board,
      player2Board.alphaNumCoordToNumCoord(e.target.dataset.alphanumcoord)
    );
    // console.log(result);
    if (result) {
      if (result.shipSunk)
        console.log(`You've sank a ${result.ship.getName()}`);
      if (result.sunkAllShips)
        console.log(`You've sank all ships! game over !`);
      e.target.innerHTML = "H";
      e.target.style.backgroundColor = "red";
    } else e.target.innerHTML += "X";
    player2Board.printBoard();
  }
};

export default cellRecieveAttackListener;
