import cellRecieveAttack from "./cellRecieveAttack";

const playRound = () => {
  const player2Cells = document.querySelectorAll(".container-player2 .cell");
  player2Cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      cellRecieveAttack(e, player2Board, player1);
    });
  });
};

export default playRound;
