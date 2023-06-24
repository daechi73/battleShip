const cellRecieveAttackListener = (player2Board, player1) => {
  const player2Cells = document.querySelectorAll(".container-player2 .cell");
  player2Cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      cellRecieveAttack(e, player2Board, player1);
    });
  });
};
const cellRecieveAttack = (e, player2Board, player1) => {
  e.target.textContent = "x";
  // console.log(
  //   player2Board.alphaNumCoordToNumCoord(e.target.dataset.alphanumcoord)
  // );
  const result = player1.makeMove(
    player2Board,
    player2Board.alphaNumCoordToNumCoord(e.target.dataset.alphanumcoord)
  );
  console.log(result);
  player2Board.printBoard();
};

export default cellRecieveAttackListener;
