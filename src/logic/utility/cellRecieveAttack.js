import gameOverUI from "../UI/gameOverUI";
const cellRecieveAttack = (playerBoard, player, e) => {
  // console.log(
  //   playerBoard.alphaNumCoordToNumCoord(e.target.dataset.alphanumcoord)
  // );
  if (e) {
    if (e.target.textContent === "") {
      const result = player.makeMove(
        playerBoard,
        playerBoard.alphaNumCoordToNumCoord(e.target.dataset.alphanumcoord)
      );
      // console.log(result);
      if (result) {
        if (result.shipSunk)
          console.log(`${player.name} sank a ${result.ship.getName()}`);
        if (result.sunkAllShips) {
          console.log(`${player.name} sank all ships! game over!`);
          gameOverUI(player);
        }

        e.target.innerHTML = "H";
        e.target.style.backgroundColor = "red";
      } else e.target.innerHTML += "X";
      playerBoard.printBoard();
      return true;
    } else return false;
  } else {
    const result = player.makeMove(playerBoard);
    const frontPlayerCell = document.querySelector(
      `.container-player1 [data-alphanumcoord='${playerBoard.numCoordToAlphaNumCoord(
        player.getCoordToAttack()
      )}']`
    );
    //console.log(frontPlayerCell);
    if (result) {
      if (result.shipSunk)
        console.log(`${player.name} sank a ${result.ship.getName()}`);
      if (result.sunkAllShips) {
        console.log(`${player.name} sank all ships Game Over!`);
        gameOverUI(player);
      }

      frontPlayerCell.innerHTML = "H";
      frontPlayerCell.style.backgroundColor = "red";
    } else frontPlayerCell.innerHTML += "X";
  }
};

export default cellRecieveAttack;
