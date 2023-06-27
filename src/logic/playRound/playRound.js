import cellRecieveAttack from "../utility/cellRecieveAttack";

const playRound = (player1Board, player2Board, player1, player2) => {
  const player2Cells = document.querySelectorAll(".container-player2 .cell");
  player2Cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      const player1Attack = cellRecieveAttack(player2Board, player1, e);
      if (player1Attack) cellRecieveAttack(player1Board, player2);
    });
  });
};

export default playRound;
